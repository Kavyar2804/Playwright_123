export class Selectproduct
{
     /**
   * @param {import('playwright').Page} page  //to get suggestion
   */

constructor(page ,context)
{
this.context=context
this.page=page
this.productsumsung= page.getByRole('heading',{name:'Samsung Galaxy A35 5G (Awesome Iceblue, 8GB RAM, 128GB Storage) Without Offer'})
    
}

async productselct()
{
    const pagepromise= this.context.waitForEvent('page')
    await this.productsumsung.click()
    const newpage= await pagepromise
    await newpage.title()


}

} 