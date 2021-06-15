const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('[id="user-name"]') }
    //get languageDropdown () { return $('[name="language"]') }
    //get languageSelection () { return $('[class="mat-option ng-tns-c24-1 ng-star-inserted"]') }
    //get nextButton () {return $('[aria-label="LOGIN"]') }
    get inputPassword () { return $('[id="password"]') }
    get btnSubmit () { return $('[id="login-button"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        //await (await this.languageDropdown).click();
        //await (await this.languageSelection).click();
        //await (await this.nextButton).click();
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();
