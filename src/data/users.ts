import { env } from "../config/env";

export const users = {
  standard: {
    username: env("SAUCE_USERNAME", "standard_user"),
    password: env("SAUCE_PASSWORD", "secret_sauce"),
  },
  locked: {
    username: "locked_out_user",
    password: "secret_sauce",
  },
} as const;
