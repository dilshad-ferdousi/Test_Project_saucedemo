const LoginPage = require('../pageobjects/login.page');
//const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    
    it('should login with valid credentials', async () => {
        browser.maximizeWindow();
        await LoginPage.open();
        //browser.pause(7000);

        await LoginPage.login('standard_user', 'secret_sauce');
        //await expect(SecurePage.flashAlert).toBeExisting();
       // await expect(SecurePage.flashAlert).toHaveTextContaining(
           // 'You logged into a secure area!');
    });
});


