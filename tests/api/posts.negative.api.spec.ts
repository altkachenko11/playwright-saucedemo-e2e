import { test, expect } from "@playwright/test";

test("[@api][negative] GET /posts/999999 returns 404", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/999999",
  );

  // JSONPlaceholder  404
  expect(response.status()).toBe(404);
});
