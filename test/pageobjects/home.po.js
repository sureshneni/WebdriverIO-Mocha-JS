class HomePage {

    get acocuntsOverviewLink(){ return $("//a[@href='/parabank/overview.htm']") };
    get createNewAccountLink() { return $("//a[@href='/parabank/openaccount.htm']")}
    get transferFunds() { $("//a[@href='/parabank/transfer.htm']") }
    get billPay() { $("//a[@href='/parabank/billpay.htm']") }
    get findTransactions() { return $("//a[@href='/parabank/findtrans.htm']"); }
    get updateContactInfo() { return $("//a[@href='/parabank/updateprofile.htm']"); }
    get requestLoan() { return $("//a[@href='/parabank/requestloan.htm']"); }
    get logout() { return $("//a[@href='/parabank/requestloan.htm']"); }

    goToCreateAccountSection() {
        this.createNewAccountLink.waitForDisplayed({ timeout: 5000 });
        this.createNewAccountLink.click();
    }

    goToAccountsOverviewSection() {
        this.acocuntsOverviewLink.click();
    }

    goToTransferFundsSection() {
        this.transferFunds.click();
    }

    goToBillPaySection() {
        this.billPay.click();
    }

    goToFindTransactionsSection(){
        this.createNewAccountLink.waitForDisplayed({ timeout: 5000 });
        this.findTransactions.click();
    }

    goToUpdateContactInfoSection() {
        this.updateContactInfo.click();
    }

    goToRequestLoanSection() {
        this.createNewAccountLink.waitForDisplayed({ timeout: 5000 });
        this.requestLoan.click();
    }

    goToLogOut() {
        this.logout.click();
    }


}
module.exports = new HomePage();