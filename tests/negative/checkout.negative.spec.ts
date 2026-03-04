import { test } from "../../src/fixtures/auth.fixture";
import { InventoryPage } from "../../src/pages/InventoryPage";
import { CartPage } from "../../src/pages/CartPage";
import { CheckoutStepOnePage } from "../../src/pages/CheckoutStepOnePage";
import { products } from "../../src/data/products";
import { checkoutData } from "../../src/data/checkout";

test(" [@negative] Benutzer kann Checkout nicht ohne Postleitzahl abschließen", async ({
  authedPage,
}) => {
  // Vorbereitung: Benutzer ist eingeloggt und befindet sich auf der Produktseite
  const inventory = new InventoryPage(authedPage);
  const cart = new CartPage(authedPage);
  const stepOne = new CheckoutStepOnePage(authedPage);

  await inventory.expectLoaded();

  // Produkt in den Warenkorb legen
  await inventory.addItem(products.backpack);
  await inventory.openCart();

  // Checkout starten
  await cart.expectLoaded();
  await cart.checkout();

  // Benutzer lässt Postleitzahl leer
  await stepOne.expectLoaded();
  await stepOne.fillCustomer(
    checkoutData.missingPostalCode.firstName,
    checkoutData.missingPostalCode.lastName,
    checkoutData.missingPostalCode.postalCode,
  );

  await stepOne.continue();

  // Erwartung: Fehlermeldung wird angezeigt
  await stepOne.expectErrorContains("Postal Code is required");
});
