class HomePage {

    get acocuntsOverviewLink(){ return $("//a[@href='/parabank/overview.htm']") };
    get createNewAccountLink() { return $("//a[@href='/parabank/openaccount.htm']")}
    get transferFunds() { $("//a[@href='/parabank/transfer.htm']") }
    get billPay() { $("//a[@href='/parabank/billpay.htm']") }
    get findTransactions() { return $("//a[@href='/parabank/findtrans.htm']"); }
    get updateContactInfo() { return $("//a[@href='/parabank/updateprofile.htm']"); }
    get requestLoan() { return $("//a[@href='/parabank/requestloan.htm']"); }
    get logout() { return $("//a[@href='/parabank/requestloan.htm']"); }

}
module.exports = new HomePage();