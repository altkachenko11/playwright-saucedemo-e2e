import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/LoginPage";
import { InventoryPage } from "../../src/pages/InventoryPage";
import { users } from "../../src/data/users";

test("Benutzer kann sich erfolgreich anmelden", async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.open();
  await login.login(users.standard.username, users.standard.password);

  await inventory.expectLoaded();
  await expect(page).toHaveURL(/inventory\.html/);
});
