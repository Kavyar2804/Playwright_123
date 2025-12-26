import{test} from '@playwright/test'
import path from 'path';

test('file upload',{tag:['@smoke','@1234']}, async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.locator('#singleFileInput').setInputFiles('C:/Users/User/neDrive/Desktop/Playwrightbatchhhhhh/uploadfile/Objects.txt')
    console.log(__dirname); //it gives the current folder
    console.log(path.join(__dirname, '../uploadfile/Objects.txt'));
    
    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname, '../uploadfile/Objects.txt'))
    await page.getByRole('button',{name:'Upload Single File'}).click()
    await page.pause()


});

test('file upload multiple file @smoke', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.locator('#singleFileInput').setInputFiles('C:/Users/User/neDrive/Desktop/Playwrightbatchhhhhh/uploadfile/Objects.txt')
    console.log(__dirname); //it gives the current folder
    console.log(path.join(__dirname, '../uploadfile/Objects.txt'));
    
    await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname, '../uploadfile/Objects.txt'), path.join(__dirname, '../uploadfile/jenkins.txt')])
    await page.getByRole('button',{name:'Upload Multiple Files'}).click()
    await page.pause()


});