import { Page, Locator, expect } from "@playwright/test";

export class CheckoutOverviewPage {
  private readonly title: Locator;
  private readonly finishButton: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator(".title");
    this.finishButton = page.locator('[data-test="finish"]');
  }

  async expectLoaded() {
    await expect(this.title).toHaveText("Checkout: Overview");
  }

  async finish() {
    await this.finishButton.click();
  }
}
