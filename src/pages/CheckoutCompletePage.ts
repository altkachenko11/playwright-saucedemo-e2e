import { Page, Locator, expect } from "@playwright/test";

export class CheckoutCompletePage {
  private readonly title: Locator;
  private readonly completeHeader: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator(".title");
    this.completeHeader = page.locator(".complete-header");
  }

  async expectLoaded() {
    await expect(this.title).toHaveText("Checkout: Complete!");
  }

  async expectThankYou() {
    await expect(this.completeHeader).toHaveText("Thank you for your order!");
  }
}
