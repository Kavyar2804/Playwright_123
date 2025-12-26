import{test} from '@playwright/test'
import '../../genricutility/hooks.js'
import { RegisterPage } from '../../pageobjects/registerpage';
import excel from 'exceljs'
import {readdatafromexcel} from '../../genricutility/excelutility.js'




test('read data from excel @smoke', async({page}) => {

    await page.goto('/ui?scenario=1')
    let excelpath = 'C:/Users/User/OneDrive/Desktop/Playwrightbatchhhhhh/testdata/exceldata.xlsx'
    let usernam= await readdatafromexcel(excelpath,'Sheet1',1,1)
    let email= await readdatafromexcel(excelpath,'Sheet1',2,1)
    let pwd = await readdatafromexcel(excelpath,'Sheet1',3,1) 
    const rgstr= new RegisterPage(page)
    await rgstr.registeraction(usernam,email,pwd)
    console.log('t1');
    
    
});


test('read data from excel', async({page}) => {

    await page.goto('/ui?scenario=1')
    let excelpath = 'C:/Users/User/OneDrive/Desktop/Playwrightbatchhhhhh/testdata/exceldata.xlsx'
    let usernam= await readdatafromexcel(excelpath,'Sheet1',1,1)
    let email= await readdatafromexcel(excelpath,'Sheet1',2,1)
    let pwd = await readdatafromexcel(excelpath,'Sheet1',3,1) 
    const rgstr= new RegisterPage(page)
    await rgstr.registeraction(usernam,email,pwd)
     console.log('t2');
    
});

test.skip('readmultiple data', async({page}) => {

    let book= new excel.Workbook()
    await book.xlsx.readFile('C:/Users/User/OneDrive/Desktop/Playwrightbatchhhhhh/testdata/exceldata.xlsx')
    let sheet = book.getWorksheet('Sheet1')

    for (let row = 1; row <=sheet.rowCount ; row++) 
        
    {
        for (let column = 1; column <= sheet.actualColumnCount ; column++) {
           
            let data=sheet.getRow(row).getCell(column).toString()
            console.log(data);  
            
        }
         
    }

  
});

  test.skip('write data to excel', async({page}) => {

    let book= new excel.Workbook()
    await book.xlsx.readFile('C:/Users/User/OneDrive/Desktop/Playwrightbatchhhhhh/testdata/exceldata.xlsx')
   let sheet= await book.addWorksheet('Sheet21')
   sheet.getRow(1).getCell(1).value='playwright'
   await book.xlsx.writeFile('C:/Users/User/OneDrive/Desktop/Playwrightbatchhhhhh/testdata/exceldata.xlsx')
        
    });