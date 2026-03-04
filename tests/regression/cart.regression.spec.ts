import { test } from "../../src/fixtures/auth.fixture";
import { InventoryPage } from "../../src/pages/InventoryPage";
import { CartPage } from "../../src/pages/CartPage";
import { products } from "../../src/data/products";

test("[@regression] Produkt kann in den Warenkorb gelegt werden und ist im Warenkorb sichtbar", async ({
  authedPage,
}) => {
  const inventory = new InventoryPage(authedPage);
  const cart = new CartPage(authedPage);

  await inventory.expectLoaded();

  await inventory.addItem(products.backpack);
  await inventory.expectCartCount(1);

  await inventory.openCart();

  await cart.expectLoaded();
  await cart.expectItemVisible(products.backpack);
});
