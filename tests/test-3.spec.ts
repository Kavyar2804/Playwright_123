import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.flipkart.com/')
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('mobiles')
     await page.getByRole('textbox', { name: 'Search for Products, Brands' }).press('Enter')
    await page.locator("//div[@class='hZ3P6w DeU9vF' and translate(.,'₹,','')>7000]").first().waitFor()
  let price= await page.locator("//div[@class='hZ3P6w DeU9vF' and translate(.,'₹,','')>7000]").allTextContents()
  let name = await page.locator("//div[@class='hZ3P6w DeU9vF' and translate(.,'₹,','')>7000]/ancestor::div[@class='ZFwe0M row']//div[@class='RG5Slk']").allTextContents()
   console.log(price);
  

  // for(let loc of price)
  // {

    
  //   console.log();
    
  // }



  
  console.log(name);
  console.log(name.length);

  let pricename= await page.locator("//div[@class='hZ3P6w DeU9vF' and translate(.,'₹,','')>7000]/ancestor::div[@class='ZFwe0M row']//div[@class='RG5Slk']|//div[@class='hZ3P6w DeU9vF' and translate(.,'₹,','')>7000]").allTextContents()
  console.log(pricename);

  //dynamic xpath

  let prod ='POCO M7 5G (Satin Black, 128 GB)'
  let prppriice= await page.locator('//div[.="'+prod+'"]/parent::div/following-sibling::div/descendant::div[@class="hZ3P6w DeU9vF"]').textContent()
console.log(prppriice);

//svg
//for images
//local-name() function u should use to late svg
//*[local-name()='svg'] // gives entire svg in tjat page
//g & svg, path u cannot directly loacte


//div[.='Primary Camera']/*[local-name()='svg']/*[local-name()='path']
//*[name()='svg']/child::*[name()='g'][@fill-rule="evenodd"]
  
let prodname ='POCO C75 5G (Aqua Bliss, 64 GB)'

let pprice= await page.locator('//div[.="'+prodname+'"]/parent::div/following-sibling::div/descendant::div[@class="hZ3P6w DeU9vF"]').textContent()

console.log(pprice);

//div[.='+prodname+']/parent::div/following-sibling::div/descendant::div[@class="hZ3P6w DeU9vF"]
  
  
});