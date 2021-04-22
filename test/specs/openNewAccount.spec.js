const home = require("../pageobjects/home.po");
const createAcc = require("../pageobjects/createAccount.po");
const openAcctData = require("../testData/openSavingsAccount.json")
const loginData = require("../testData/testdata.json");
const loginPage = require('../pageobjects/login.po')

describe("Create new account feature", ()=> {

    it("Precondition - Login", ()=>{
        loginPage.navigate();
        loginPage.login(loginData.login.userName, loginData.login.password);
    });

    it("Create account with valid details", ()=> {
        home.goToCreateAccountSection();
        createAcc.selectAccountType(openAcctData.CreateAccount.accountType);
        createAcc.selectExisitngAccount(openAcctData.CreateAccount.accountNo);
        createAcc.clickOnOpenNewAcocunt();
    });

    it("Verify account creation successfully", ()=> {
        createAcc.verifyAccountCreation(openAcctData.CreateAccount.successMsg);
    });


})