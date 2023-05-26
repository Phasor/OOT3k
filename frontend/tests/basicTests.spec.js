// @ts-check
const { test, expect } = require('@playwright/test'); 

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Oceans/);
});

test('wallet checker link', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Click the get started link.
  await page.getByRole('link', { name: 'Check Wallet' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*check/);
});

test('mint page link', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Click the get started link.
  await page.getByRole('link', { name: 'MINT' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*mint/);
});
