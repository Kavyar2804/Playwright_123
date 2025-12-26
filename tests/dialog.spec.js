import{test} from '@playwright/test'

test('handle popup', async({page}) => {

    
await page.goto('https://demoapps.qspiders.com/ui/alert?sublist=0')

//by defaults dialop/popup are to auto dismissed
//if you want to handle use page.on 
//more than one popup it will handle
// page.on('dialog', async(dialog)=>{

//      console.log( dialog.type()); //returns type of the popup/dialog
//     console.log( dialog.message()); //returns messape present on the popup/dialog
//     await dialog.accept() // to click on ok

// })

//listens for only first popup
page.once('dialog', async(dialog)=>{

     console.log( dialog.type()); //returns type of the popup/dialog
    console.log( dialog.message()); //returns messape present on the popup/dialog
    await page.waitForTimeout(2000)
    await dialog.accept() // to click on ok

})

await page.locator('//tbody//tr[1]//td[1]/input').check()
await page.getByRole('button', {name:'Delete'}).click()
await page.pause()


});

test('prompt popup', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/alert/prompt?sublist=1')

    page.once('dialog', async(dialog)=>{

     console.log( dialog.type()); //returns type of the popup/dialog
    console.log( dialog.message()); //returns messape present on the popup/dialog
    await page.waitForTimeout(2000)
    await dialog.accept('playwright') // pass value inside accept
})

    await page.locator('//tbody//tr[1]//td[1]/input').check()
    await page.getByRole('button', {name:'Delete'}).click()
    await page.pause()


});