import axios from "axios";

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
