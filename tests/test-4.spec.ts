import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui/toggle?sublist=0');
  await page.locator('span').nth(1).click();
  await page.locator('span').nth(3).click();
  await page.locator('span').nth(5).click();
  await page.locator('.relative.bg-gray-300').click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.locator('body').press('PageDown');
  await page.locator('body').press('PageDown');
  await page.locator('body').press('Enter');


  
});