import {test} from '@playwright/test'

test.describe('group name',()=>{


test.beforeAll()
test.afterAll()

    test.beforeEach()
    test.afterEach()
    

    test('authentication', async({browser}) => {
    
        //playwright approach
        //  only for test level not global
    
       const context =await browser.newContext({
    
     httpCredentials:{
    
            username:'admin',
            password:'admin'
        }
       })
        
       const page = await context.newPage()
       await page.goto('https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')
    
    //    let msg= await page.getByRole('paragraph',{name:'congratulations with valid credentials'}).textContent()
    //    console.log(msg);
       
    
       await expect(page.locator('//body/p')).toContainText('congratulations with valid credentials')
    
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

test('file upload multiple file @smoke', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.locator('#singleFileInput').setInputFiles('C:/Users/User/neDrive/Desktop/Playwrightbatchhhhhh/uploadfile/Objects.txt')
    console.log(__dirname); //it gives the current folder
    console.log(path.join(__dirname, '../uploadfile/Objects.txt'));
    
    await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname, '../uploadfile/Objects.txt'), path.join(__dirname, '../uploadfile/jenkins.txt')])
    await page.getByRole('button',{name:'Upload Multiple Files'}).click()
    // await page.pause()


});
    



})