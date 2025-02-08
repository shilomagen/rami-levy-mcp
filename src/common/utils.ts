import { z } from "zod";

export class RamiLevyError extends Error {
  constructor(
    message: string,
    public status?: number,
    public response?: unknown
  ) {
    super(message);
    this.name = "RamiLevyError";
  }
}

export interface RequestOptions {
  method?: string;
  body?: unknown;
  headers?: Record<string, string>;
}

const DEFAULT_HEADERS = {
  accept: "application/json, text/plain, */*",
  "content-type": "application/json;charset=UTF-8",
  Authorization: `Bearer ${process.env.RAMI_LEVY_API_KEY}`,
  locale: "he",
  ecomtoken: `${process.env.ECOM_TOKEN}`,
  cookie: `${process.env.COOKIE}`,
};

export async function ramiLevyRequest(
  url: string,
  options: RequestOptions = {}
): Promise<unknown> {
  const { method = "GET", body, headers = {} } = options;

  const response = await fetch(url, {
    method,
    headers: {
      ...DEFAULT_HEADERS,
      ...headers,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  if (!response.ok) {
    throw new RamiLevyError(
      `Request failed with status ${response.status}`,
      response.status,
      await response.json().catch(() => null)
    );
  }

  return await response.json();
}

export function formatError(error: unknown): string {
  if (error instanceof RamiLevyError) {
    let message = `Rami Levy API Error: ${error.message}`;
    if (error.response) {
      message += `\nDetails: ${JSON.stringify(error.response)}`;
    }
    return message;
  }

  if (error instanceof z.ZodError) {
    return `Validation Error: ${JSON.stringify(error.errors)}`;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return String(error);
}
