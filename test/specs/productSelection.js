const LoginPage = require('../pageobjects/login.page');
const productPage = require('../pageobjects/product.list.page');

describe('select a product from the list and go to details', ()=>{

    it('product details page ', async()=>{
        let a = await console.log(productPage.productItem).toEqual('https://www.saucedemo.com/inventory-item.html?id=4');
        //browser.pause(7000);
        //await expect (browser.getUrl().toEqual('https://www.saucedemo.com/inventory-item.html?id=4'));

    });

    it('', async()=>{
        
    });
});
