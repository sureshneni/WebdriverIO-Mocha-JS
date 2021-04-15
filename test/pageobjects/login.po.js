
class LoginPage {

    //Define locators by using getters.
    get loginUserName() { return $("//input[@name='username']") }
    get loginPassword() { return $("//input[@name='password']") }
    get loginBtn() { return $("//input[@value='Log In']") }

    get accountsOverviewTitle() { return $("//div[@ng-if='showOverview']/h1") }


    //function to encapsulate the login functionality of Login page
    login(username, password) {
        this.loginUserName.setValue(username);
        this.loginPassword.setValue(password);
        this.loginBtn.click();
    }

    navigate() {
        browser.url(`https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC`);
    }

    //function to verify wether user can see accounts overview title after successful login
    verifyDashboard(accOverviewHeader) {
        console.log("Text: "+this.accountsOverviewTitle.getText());
        expect(this.accountsOverviewTitle).toHaveTextContaining(accOverviewHeader);
    }
}
module.exports = new LoginPage();