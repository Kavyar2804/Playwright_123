import{test} from '@playwright/test'
import { RegisterPage } from '../../pageobjects/registerpage'
import regdata from "../../testdata/registerdata.json" assert{type:'json'}
// import rdata from "../../testdata/registerdata.json"


test('REgistering the user', async({page}) => {

    await page.goto(regdata.url)
    const rgstr = new RegisterPage(page)
    await rgstr.registeraction(regdata.username,regdata.emailid,regdata.pwd)
    await page.pause()
    
});