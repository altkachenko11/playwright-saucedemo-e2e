import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../data/users";

type Fixtures = {
  authedPage: import("@playwright/test").Page;
};

export const test = base.extend<Fixtures>({
  authedPage: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    const login = new LoginPage(page);
    await login.open();
    await login.login(users.standard.username, users.standard.password);

    await page.waitForURL("**/inventory.html");

    await use(page);
    await context.close();
  },
});

export { expect } from "@playwright/test";
