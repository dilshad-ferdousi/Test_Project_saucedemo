const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    get title () { return $('span.title')};
    get productItemParent () { return $('[class="inventory_list"]')};
    get productClieldElement () {return this.productItemParent.$$('[class="inventory_item"]')}
    get socialNetworkIcon () { return $('ul[class="social"] li[class="social_twitter"]')};
    get addToCartbutton() { return $$('[class="btn btn_primary btn_small btn_inventory"]')}


    GetTextForChild(){
        
        //return this.productClieldElement[number];
        return this.productClieldElement.filter(Element =>{
          console.log(Element.getText());
        });
    }
    async landingPage() {
    
        //await (await this.title).getText();
       // await (await this.socialNetworkIcon).getText();
        await (await this.productItem[2]);
    }
    async AddToCartButtonClick() {
        await (await this.addToCartbutton[2]).c
    }
    
open () {
    return super.open('/inventory-item.html?id=4');
}
}

module.exports = new ProductPage();
