import {test,expect} from '@playwright/test'

test('Autosuggestion drop down', async({page}) => {
 
    await page.goto('https://www.amazon.in')
    //assertion wrt topage title comparing actual expected
    //await expect(page).toHaveTitle('/Amazon/')
    await expect(page).toHaveURL('https://www.amazon.in/')


    //
    await page.getByPlaceholder('Search Amazon.in').fill('mobi')
  //   await page.waitForSelector('(//div[@class="left-pane-results-container"]/div)[1]')
  //  let allsugg=  await page.locator('//div[@class="left-pane-results-container"]/div').all()
  //   console.log(allsugg);
  //   for(let sugg of allsugg)
  //   {
  //     let t  = await sugg.textContent()
  //     console.log(t);
  //     if(t.includes('android'))
  //       {
  //           await sugg.click()
  //           break                                                                                                                   
  //     }
      
  //   }

  //   for (let i = 0; i < 10; i++)
  //      {
  //  await page.keyboard.press('ArrowDown')
  //  await page.waitForTimeout(100)
    
  //      }

  //   //await page.waitForTimeout(3000)

  //     for (let i = 0; i < 5; i++)
  //      {
  //     await page.keyboard.press('ArrowUp')
  //     await page.waitForTimeout(100)
    
  //      }


    await page.pause()
    

    


});