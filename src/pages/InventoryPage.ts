import { Page, Locator, expect } from "@playwright/test";

export class InventoryPage {
  private readonly title: Locator;
  private readonly cartLink: Locator;
  private readonly cartBadge: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator(".title");
    this.cartLink = page.locator(".shopping_cart_link");
    this.cartBadge = page.locator(".shopping_cart_badge");
  }

  private itemCard(name: string) {
    return this.page.locator(".inventory_item").filter({ hasText: name });
  }

  private addToCartButton(name: string) {
    return this.itemCard(name).locator('button:has-text("Add to cart")');
  }

  async expectLoaded() {
    await expect(this.title).toHaveText("Products");
  }

  async addItem(name: string) {
    await this.addToCartButton(name).click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async expectCartCount(count: number) {
    await expect(this.cartBadge).toHaveText(String(count));
  }
}
