
class createAccountsPage {
    
    get accountTypeDD() { return $("//select[@ng-model='types.selectedOption']") }
    get exsitingAccountDD() { return $("//select[@ng-model='accounts.selectedOption']"); }
    get openNewAccountBtn() { return $("//input[@value='Open New Account']"); }

    selectAccountType(accountType) {
        this.accountTypeDD.waitForDisplayed({ timeout: 5000 });
        this.accountTypeDD.click();
        this.accountTypeDD.selectByVisibleText(accountType);
    }

    selectExisitngAccount(accountNum) {
        this.exsitingAccountDD.click();
        this.exsitingAccountDD.selectByVisibleText(accountNum);
    }

    clickOnOpenNewAcocunt(){
        this.openNewAccountBtn.waitForDisplayed({ timeout: 5000 });
        this.openNewAccountBtn.click();
    }

}
module.exports = new createAccountsPage();