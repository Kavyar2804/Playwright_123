import {test,expect} from '@playwright/test'

test('Sample script', async({browser}) => {

    let context = await browser.newContext()
    const page= await context.newPage()
    //await page.setViewportSize()
    await page.goto('https://testautomationpractice.blogspot.com/')
    let title= await page.title()
    console.log(title);
    expect(page).toHaveTitle('Automation Testing Practic')
    console.log(await page.url())
    const cookies = await context.cookies()
    console.log(cookies);
    
    await page.getByPlaceholder('Enter Name').fill('XYZ')
    await page.getByRole('radio',{name:'Female'}).check()
  
    await page.getByRole('checkbox', {name: 'Saturday'}).check()
    await page.locator('#country').selectOption('germany')
  await page.waitForTimeout(2000)

    
});
