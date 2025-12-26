import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('hkjhjk');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('jjkjh');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Sunday' }).check();
  await page.getByLabel('Colors:').selectOption('red');
  await page.getByLabel('Colors:').selectOption([]);
  await page.getByLabel('Colors:').selectOption('blue');
  await page.getByLabel('Colors:').selectOption('green');
  await page.getByPlaceholder('Start Date').fill('2025-11-13');
  await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
});