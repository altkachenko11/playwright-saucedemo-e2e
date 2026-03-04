import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  timeout: 30000,

  expect: {
    timeout: 5000,
  },

  reporter: [["list"], ["html", { open: "never" }]],

  use: {
    baseURL: "https://www.saucedemo.com",

    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  retries: 1,

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
