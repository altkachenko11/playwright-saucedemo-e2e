import { Page, Locator, expect } from "@playwright/test";

export class CheckoutStepOnePage {
  private readonly title: Locator;
  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly postalCode: Locator;
  private readonly continueButton: Locator;
  private readonly error: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator(".title");
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.error = page.locator('[data-test="error"]');
  }

  async expectLoaded() {
    await expect(this.title).toHaveText("Checkout: Your Information");
  }

  async fillCustomer(first: string, last: string, zip: string) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);
  }

  async continue() {
    await this.continueButton.click();
  }

  async expectErrorContains(text: string) {
    await expect(this.error).toContainText(text);
  }
}
