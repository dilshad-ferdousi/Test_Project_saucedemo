const Page = require('./page');

class CheckoutOverviewPage extends Page{
    get overviewPageTitle () {return $('[class="title"]')};
    get cancelButton () {return $('#cancel')};
    get finishButton () {return $('#finish')};

}
module.exports =new CheckoutOverviewPage();