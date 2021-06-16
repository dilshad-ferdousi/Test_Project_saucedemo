const Page = require('./page');

class CheckOutPage extends Page{

    get CheckOutPageTitle () {return $('[class="title"]')};
    get firstName () {return $('#first-name')};
    get lastName () {return $('#last-name')};
    get zipPostalCode () {return $('#postal-code')};
    get cancelButton () {return $('#cancel')};
    get continueButton () {return $('#continue')};
}
module.exports = new CheckOutPage();
