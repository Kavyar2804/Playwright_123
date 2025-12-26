import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('mobiles');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('ArrowLeft');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('ArrowLeft');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('ArrowLeft');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('ArrowLeft');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('ArrowLeft');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('ArrowLeft');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('ArrowLeft');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('ArrowLeft');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('sumsung mobiles');
  await page.getByRole('button', { name: 'samsung mobiles 5g' }).click();
  await page.getByRole('link', { name: 'Galaxy A16 5G Dual SIM (128GB' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'items in cart' }).click();
  await page.getByRole('link', { name: 'items in cart' }).click();
});