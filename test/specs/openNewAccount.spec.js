const home = require("../pageobjects/home.po");
const createAcc = require("../pageobjects/createAccount.po");
const data = require("../testData/openSavingsAccount.json")
const loginPage = require('../pageobjects/login.po')

describe("Create new account feature", ()=> {

    it("Test login with valid username and password", ()=>{
        loginPage.navigate();
        loginPage.login(data.login.userName, data.login.password);
    });

    it("Create account with valid details", ()=> {
        home.goToCreateAccountSection();
        createAcc.selectAccountType(data.CreateAccount.accountType);
        createAcc.selectExisitngAccount(data.CreateAccount.accountNo);
        createAcc.clickOnOpenNewAcocunt();
    })

})