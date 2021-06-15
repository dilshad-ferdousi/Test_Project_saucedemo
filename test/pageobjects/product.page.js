const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    get title () { return $('span.title')};
    get productItem() { return $$('[class="inventory_item"]')};
    get socialNetworkIcon () { return $('ul[class="social"] li[class="social_twitter"]')};


    async landingPage(item) {
    
        await (await this.title).getText();
        await (await this.socialNetworkIcon).getText();
        await (await this.productItem.get(item)).click();
}
open () {
    return super.open('/inventory-item.html?id=4');
}
}

module.exports = new ProductPage();
