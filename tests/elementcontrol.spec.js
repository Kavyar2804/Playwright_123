import {expect, test} from '@playwright/test'

test('Element control', async({page}) => {
// //text field
// await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
// await page.getByPlaceholder('Enter your name'). fill('abc') // send data to test field using fill method
// let attvalu= await page.getByPlaceholder('Enter your name').getAttribute('value') // return the attribute value
// console.log(attvalu);

// await page.waitForTimeout(2000)
// // //buttons
// await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
// await page.waitForSelector("#btn")
// await expect(page.getByRole('button', {name:'Yes'})).toHaveCSS('background-color','rgb(134, 239, 172)')
// await page.getByRole('button', {name:'Yes'}).click()
// await expect(page.getByRole('button', {name:'Yes'})).toHaveCSS('background-color','rgb(134, 239, 172)')
// await expect(page.getByRole('button', {name:'Yes'})).toHaveAttribute('id', 'btn')
// await  expect(page.getByText('You selected "Yes"')).toContainText('Yes') // comparing string with substring
// await page.waitForTimeout(2000)

// //links
// await page.goto('https://demoapps.qspiders.com/ui/link?sublist=0')
// await page.getByRole('link', {name: 'Kids'}).click()
// await page.waitForTimeout(2000)

//checkbox
// await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
// // await page.getByRole('checkbox', {name:'Email'}).check()
// await page.locator('#domain_a').check()
// await page.locator('#domain_a').uncheck()
// await expect(page.locator('#domain_a')).toBeChecked()
// await page.waitForTimeout(2000)

// //radio button
// await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0')
// await page.locator('#attended').check()
// await page.waitForTimeout(2000)

// //image
// await page.goto('https://demoapps.qspiders.com/ui/image/compareImage?sublist=2')
// await page.getByAltText('Image-1').click()
// await page.waitForTimeout(2000)

// //toggle
// await page.goto('https://demoapps.qspiders.com/ui/toggle?sublist=0')
// await page.locator('//span[@class="relative bg-gray-300 rounded-full w-9 h-4 transition duration-300 ease-in-out"]//input').first().click()
// //await page.pause()

// //single select dropdown

// await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0')
// await page.locator('#country_code').selectOption('+44')
// await page.locator('#select3').selectOption('China')
// await page.locator('#select5').selectOption('Hong Kong')


//multiselect
await page.goto('https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1')

//select by value
//await page.locator('#select-multiple-native').selectOption(['Fjallraven - Foldsac...', 'Mens Casual Premium ...','Mens Cotton Jacket...'])

//select by index
//await page.locator('#select-multiple-native').selectOption([{index:0},{index:3}])

//select by lable
await page.locator('#select-multiple-native').selectOption([{label:'Mens Casual Slim Fit...'},{label:'White Gold Plated Pr...'}])
await page.getByRole('button', {name:'Add'}).click()
let productname= await page.locator('//tbody//tr//td[1]').allTextContents() //returns visible text content of matching elements matching 
console.log(productname);
expect.soft(productname,'To have length of 2').toHaveLength(3)
expect(productname).toContain('White Gold Plated Pr...')

let singleproduct = await page.locator('//tbody//tr[1]//td[1]').textContent() // returns visible text of single elemnet
console.log(singleproduct);
expect(singleproduct,'Should be equal').toEqual('Mens Casual Slim Fit...')


});