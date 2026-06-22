import { HEADER_VALUES, HTTP_HEADERS } from "@/constants/headers.constants";
import { ROUTE } from "@/constants/routes.constants";
import axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { getAuthControllerRefreshTokenUrl } from "./generated/auth";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export const customAxios = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await apiClient({
    url,
    method: options?.method,
    headers: options?.headers as Record<string, string>,
    data: options?.body,
    signal: options?.signal ?? undefined,
  });

  return response.data;
};

let accessToken: string | null = null;
let refreshPromise: Promise<string> | null = null;

export const setAccessToken = (token: string) => {
  accessToken = token;
};

export const clearAccessToken = () => {
  accessToken = null;
};

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers[HTTP_HEADERS.NGROK_SKIP_BROWSER_WARNING] = HEADER_VALUES.SKIP_WARNING;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

const refreshAccessToken = async (): Promise<string> => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}` + getAuthControllerRefreshTokenUrl(),
    {},
    {
      withCredentials: true,
    },
  );

  const newToken = response.data.data.accessToken;

  setAccessToken(newToken);

  return newToken;
};

apiClient.interceptors.response.use(
  (response) => response,

  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      if (!refreshPromise) {
        refreshPromise = refreshAccessToken().finally(() => {
          refreshPromise = null;
        });
      }

      const newToken = await refreshPromise;

      originalRequest.headers = {
        ...originalRequest.headers,
        Authorization: `Bearer ${newToken}`,
      };

      return apiClient(originalRequest);
    } catch (refreshError) {
      clearAccessToken();

      if (typeof window !== "undefined") {
        window.location.href = ROUTE.LOGIN;
      }

      return Promise.reject(refreshError);
    }
  },
);
