import { test, expect } from "../../src/fixtures/auth.fixture";
import { InventoryPage } from "../../src/pages/InventoryPage";

test("Angemeldeter Benutzer sieht die Produktliste", async ({ authedPage }) => {
  const inventory = new InventoryPage(authedPage);

  await inventory.expectLoaded();
  await expect(authedPage.locator(".inventory_item")).toHaveCount(6);
});
