import {expect, test} from '@playwright/test'

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

   let msg= await page.getByRole('paragraph',{name:'congratulations with valid credentials'}).textContent()
   console.log(msg);
   

   await expect(page.locator('//body/p')).toContainText('congratulations with valid credentials')

   await page.pause()
});


//basic to pass with url

test('credentials with url', async({page}) => {

    await page.goto('https://admin:admin@basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')
       await page.pause()
    
});