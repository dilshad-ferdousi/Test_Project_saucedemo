const Page = require('./page');

class ProductDetailsPage extends Page {

    get backToProductButton () {return $('#back-to-products')}; 
    get removeButton () {return $('#remove-sauce-labs-backpack')}
    get price () {return $('inventory_details_price')}

    async action(){
        await( await this.backToProductButton).click();
        await (await this.removeButton).click();
        await (await this.price).getValue();
    }

    open () {
        return super.open('/inventory-item.html?id=4');
    }
}

module.exports = new ProductDetailsPage();