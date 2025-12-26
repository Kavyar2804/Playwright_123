import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('hjgjhg');
  await page.getByRole('textbox', { name: 'Email Id' }).click();
  await page.getByRole('textbox', { name: 'Email Id' }).fill('hjhjvkn');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Email Id' }).fill('hjhjvknhj');
  await page.getByRole('textbox', { name: 'Password' }).fill('hgjk');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('textbox', { name: 'Email Id' }).fill('hjhjvknhj@gmail.com');
  await page.getByRole('button', { name: 'Register' }).click();
});