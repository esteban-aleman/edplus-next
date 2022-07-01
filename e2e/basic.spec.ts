import { expect, test } from '@playwright/test';

test('should navigate to Home and alternative language', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('http://localhost:3000');
  await page.locator(`text=English`).click();
  await expect(page).toHaveURL('http://localhost:3000/en');
});
