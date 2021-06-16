const LoginPage = require('../pageobjects/login.page');
const productPage = require('../pageobjects/product.list.page');
//const SecurePage = require('../pageobjects/product.page');

describe('My Login application', () => {
    
    it('should login with valid credentials', async () => {
        browser.maximizeWindow();
        await LoginPage.open();
        //browser.pause(7000);
        await LoginPage.login('standard_user', 'secret_sauce');
    });
    it('After login landed on Product list page', async () => {
        await expect(productPage.title).toBeExisting();
        await expect(productPage.title).toHaveTextContaining('PRODUCTS');
    });
    it('click on an Item to go to details page', async() =>{
        
        await productPage.GetTextForChild;
        //await productPage.GetTextForChild(1).click();
    });
    it('try again', async()=>{
        await productPage.tryAgain;
    });
});


