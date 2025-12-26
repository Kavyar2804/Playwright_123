import{expect, test} from "@playwright/test"

test('Sample first script', async({browser}) => {

    test.setTimeout(20000)

const context = await browser.newContext() //empty inconginto browser without any cookies & histroy
const page = await context.newPage() //creating one new tab
await page.goto("https://demoapps.qspiders.com/ui?scenario=1") //navigating the url
const url= await page.url() //returns the url of the page
console.log(url);
let title = await page.title() //returns the page title
console.log(title);
let viewport = await page.viewportSize() //returns viewport size
console.log(viewport);
await page.setViewportSize({width:1080, height:720})
await page.pause()//pause the execution
await page.locator('#vhgj').click()

})

test('Register',async({page})=>{
    test.setTimeout(200000)
    await page.goto('https://demoapps.qspiders.com/ui?scenario=8')
    await page.getByPlaceholder('Enter your name').fill('XYZ') //built in locator it supports auto wait & shodow root elemnts
    await page.locator( "//input[@id='name']").fill() //xpath
    await page.waitForSelector("//input[@id='name']", {timeout:5000})
    await page.locator('#name').fill() //css selector
    await page.getByPlaceholder('Enter Your Email').fill('xyz@gmail.com')
    await page.getByPlaceholder('Enter your password').fill('xyz@1234')
    await page.getByRole('button',{name:'Register'}).click()
    // await page.getByText('Register')
    await page.pause()

})

test('Button', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await expect(page.getByRole('button', {name:'Yes'})).toBeEnabled()
//     await page.getByRole('button',{name :'Yes'}).click()
//    let text = await page.locator(`//span[text()='You selected "Yes"']`).textContent()   // will return the text value    
//     //tag[text() ='text value']  //text function from xpath
//     let text1= await page.getByText('You selected "Yes"').textContent()
//     console.log(text);
//     console.log(text1);
//     await expect(text).toContain('Yes')

   

   // CSS
    //tagname[AN='AV']

    //input[name='name']
    //id is indicated by '#'
    //('#name')
    //class is indicated is '.'
    //('.block mb-2 text-sm font-medium text-gray-900 ')

    //absolute xpath
// we can locate element from parent to immediate child '/'

//relative xpath
// we can locate element from parent to any child '//'


//input[@name='name'] //tag[@AN='Av']

//multiple attributes
//input[@name='name' and @id='name']

//xpath by text()
//tag[text()='textvalue'] //text() can also be indicated as '.'
//tag[.='textvalue']
//label[.='Name']

//contains to locate partial dynamic element

//tag[contains(., 'TV')]

//label[contains(.,'Password')]

//to navigate from chilfd to immediate parent '/..'

//backward traversing
//label[contains(.,'Password')]/..

//preceding -sibling
//    /preceding-sibling::tag
//label[contains(.,'Password')]/../preceding-sibling::div

//following-sibling
//  /following-sibling::tag
//label[contains(.,'Password')]/../following-sibling::div

//ancestor
//from child to any parent
//  /ancestor::tag
//label[contains(.,'Password')]/ancestor::main



//get by methods from playwright
//get by paceholder
await page.getByPlaceholder('Enter your name').fill('xyz')

let heading = await page.getByText('Register',{exact:true}).first().textContent() //it returns the text of the particular matching element

console.log(heading);


//nth(0) //indexing starts from 0, to locate the element based on index
//first() // to locate the first element
//last() // to locate the last elemnt

//getbylable
// lable tag is availbel for text feilds byusing lable tag you can locate text field & fill the forms

await page.getByLabel('Email Id').fill('xyz@gmail.com')

//get by role 
//buttons, links, tables,textbox, checkbox , radio buttons smart locator
await page.getByRole('link',{name:'Button',exact:true} ).click()



//getBy alt text
//locate the images it should have 'alt' attribute

await page.goto('https://demoapps.qspiders.com/ui/image/linkImage?sublist=1')
await page.getByAltText('broken image').nth(0).click()
await page.pause()

//page.locator() is used when you want css or xpath expression
await page.locator('css/xpath expression')

//get by title

await page.goto('https://demo.nopcommerce.com/')
await page.getByTitle('Show products in category Electronics'). nth(1).click()

// //get by testid
// await page.getByTestId('AV').click()








    
})

