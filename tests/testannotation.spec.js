import {test} from '@playwright/test'

test.describe('test annotation', () => {

    test('', () => {
        
    })
    
    // test('', () => {
        
    // });
    
});

//test.skip // skip the particular test
//test.only //execute particular test block
//test.fixme //Marks a test as broken. It will be skipped during execution
//test.fail //Marks a test as "should fail". Playwright runs this test and ensures that it is actually failing. 
//test.slow //slows the executon triple the defualt time (30000) -->900000
//test.describe // to group the tests