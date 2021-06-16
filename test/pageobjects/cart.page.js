const Page = require('./page');

class CartPage extends Page{

    get cartPageTitle () {return $('[class="title"]')};
    get continueShoppingButton() {return $('#continue-shopping')};
    get removeButton() {return $('#remove-sauce-labs-backpack')};
    get checkOutButton() {return $('#checkout')};
}

module.exports =new CartPage();