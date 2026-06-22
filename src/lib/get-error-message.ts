import type { ExceptionErrorDto } from "@/api/generated/models";
import { AxiosError } from "axios";

export function getApiErrorMessage(error: unknown): string {
  if (error instanceof AxiosError) {
    return (error.response?.data as ExceptionErrorDto | undefined)?.message ?? error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong";
}
