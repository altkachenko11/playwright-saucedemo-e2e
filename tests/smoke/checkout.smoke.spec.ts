import { test } from "../../src/fixtures/auth.fixture";
import { InventoryPage } from "../../src/pages/InventoryPage";
import { CartPage } from "../../src/pages/CartPage";
import { CheckoutStepOnePage } from "../../src/pages/CheckoutStepOnePage";
import { CheckoutOverviewPage } from "../../src/pages/CheckoutOverviewPage";
import { CheckoutCompletePage } from "../../src/pages/CheckoutCompletePage";
import { products } from "../../src/data/products";
import { checkoutData } from "../../src/data/checkout";

test("[@smoke] [Benutzer kann eine Bestellung erfolgreich abschließen", async ({
  authedPage,
}) => {
  // Vorbereitung: Benutzer ist bereits eingeloggt und befindet sich auf der Produktseite
  const inventory = new InventoryPage(authedPage);
  const cart = new CartPage(authedPage);
  const stepOne = new CheckoutStepOnePage(authedPage);
  const overview = new CheckoutOverviewPage(authedPage);
  const complete = new CheckoutCompletePage(authedPage);

  await inventory.expectLoaded();

  // Aktion: Benutzer fügt ein Produkt zum Warenkorb hinzu
  await inventory.addItem(products.backpack);
  await inventory.expectCartCount(1);

  // Benutzer öffnet den Warenkorb
  await inventory.openCart();

  // Überprüfung: Das Produkt ist im Warenkorb sichtbar
  await cart.expectLoaded();
  await cart.expectItemVisible(products.backpack);

  // Benutzer startet den Checkout-Prozess
  await cart.checkout();

  // Benutzer gibt seine Bestelldaten ein
  await stepOne.expectLoaded();
  await stepOne.fillCustomer(
    checkoutData.validCustomer.firstName,
    checkoutData.validCustomer.lastName,
    checkoutData.validCustomer.postalCode,
  );

  await stepOne.continue();

  // Überprüfung: Bestellübersicht wird angezeigt
  await overview.expectLoaded();
  await overview.expectItemVisible(products.backpack);

  // Bestellung abschließen
  await overview.finish();

  // Finale Überprüfung: Bestellung wurde erfolgreich abgeschlossen
  await complete.expectLoaded();
  await complete.expectThankYou();
});
