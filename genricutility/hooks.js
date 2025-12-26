import {test} from '@playwright/test'


test.beforeAll('',async()=>{

    console.log('before all'); //database connection 
    
})
test.afterAll('', async()=>{

    console.log('after all'); //disconnecting from database
    

})

 test.beforeEach('',()=>{

    console.log('before each'); //login
    
 })
test.afterEach('',()=>{

    console.log('after each'); //logout
    

})
    