import { test, expect } from "@playwright/test";

test("[@api] GET /posts/1 returns valid post", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1",
  );

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const body = await response.json();

  // Minimal contract checks
  expect(body).toMatchObject({
    id: 1,
  });

  expect(typeof body.userId).toBe("number");
  expect(typeof body.title).toBe("string");
  expect(typeof body.body).toBe("string");
});
