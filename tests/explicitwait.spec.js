import {test} from '@playwright/test'

test('explicit wait', async({page}) => {


    await page.goto('https://www.amazon.in/')
    //page level

    // wait for url
    //await page.waitForURL(/.*flipkart.*/) // wait for URL containing " amazon"

    // wait for selector
    await page.waitForSelector('#nav-search-submit-button', {timeout:2000}) // wait for element to appear

    // await page.pause()

    //hard wait
    await page.waitForTimeout(2000) // hard wait pause the script

    //

    await page.waitForLoadState('networkidle')


    //loctor

    await page.locator('#nav-search-submit-button').waitFor({state:'attached', timeout:2000})


    // 

    await page.waitForEvent('') // loading new tab or window, popups

    
    
});