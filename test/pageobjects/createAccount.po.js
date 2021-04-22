
class createAccountsPage {
    
    get accountTypeDD() { return $("//select[@ng-model='types.selectedOption']") }
    get exsitingAccountDD() { return $("//select[@ng-model='accounts.selectedOption']"); }
    get openNewAccountBtn() { return $("//input[@value='Open New Account']"); }
    get accountCreationConfirmationMsg() { return $("//div[@ng-if='showResult']/p[1]"); }

    selectAccountType(accountType) {
        this.accountTypeDD.waitForDisplayed({ timeout: 5000 });
        this.accountTypeDD.click();
        this.accountTypeDD.selectByVisibleText(accountType);
    }

    selectExisitngAccount(accountNum) {
        this.exsitingAccountDD.click();
        this.accountTypeDD.waitForDisplayed({ timeout: 2000 });
        this.exsitingAccountDD.selectByVisibleText(accountNum);
    }

    clickOnOpenNewAcocunt(){
        this.openNewAccountBtn.waitForDisplayed({ timeout: 5000 });
        this.openNewAccountBtn.click();
    }

    verifyAccountCreation(acctCreationText) {
        this.accountCreationConfirmationMsg.waitForDisplayed({ timeout: 5000 });
        var successText = this.accountCreationConfirmationMsg.getText();
        expect(successText).toEqual(acctCreationText);
    }

}
module.exports = new createAccountsPage();