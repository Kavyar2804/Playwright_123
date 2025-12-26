import {test} from '@playwright/test'
import path from 'path';
import f1 from 'fs'

test('File download', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    await page.getByPlaceholder('Enter text here').fill('Playwright')
    let customfolder = 'C:/Users/User/OneDrive/Desktop/Playwrightbatchhhhhh/filedownload'
    let customfilename ='example.txt'
    let fullpath= path.join(customfolder,customfilename) 
    console.log(fullpath); //C:\Users\User\OneDrive\Desktop\Playwrightbatchhhhhh\filedownload\example.txt

    // let dowloadpromise = page.waitForEvent('download') //wait for event called download
    // await page.getByRole( 'button', {name: 'Download',exact:true}).click()
    // let dowloadedfile = await dowloadpromise

    const [dowloadedfile] = await Promise.all([
        page.waitForEvent('download') ,   //1st promise it is listner wait for the dowload event to happen
        page.getByRole( 'button', {name: 'Download',exact:true}).click()  //2nd promise

    ])

    await dowloadedfile.saveAs(fullpath)

    //temp folder 

    console.log('Dowloaded temp path', await dowloadedfile.path());  //tem


    //verify if its saved

    if(f1.existsSync(fullpath))    //existsSync is a method from nodejs file it is used to check whether 
                                    // file or folder exists in your sysytem
    {

        console.log('File is saved');
        
    }
    else
    {
        console.log('file is not saved');
        
    }



    


});