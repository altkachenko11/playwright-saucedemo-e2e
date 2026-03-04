import { Page, Locator, expect } from "@playwright/test";

export class CartPage {
  private readonly title: Locator;
  private readonly checkoutButton: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator(".title");
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  private cartItem(name: string) {
    return this.page.locator(".cart_item").filter({ hasText: name });
  }

  async expectLoaded() {
    await expect(this.title).toHaveText("Your Cart");
  }

  async expectItemVisible(name: string) {
    await expect(this.cartItem(name)).toBeVisible();
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}
