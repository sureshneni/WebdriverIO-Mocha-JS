const loginPage = require('../pageobjects/login.po')
const data = require('../testData/testdata.json')


describe("Login feature suite", ()=> {

    it("Test login with valid username and password", ()=>{
        loginPage.navigate();
        loginPage.login(data.login.userName, data.login.password);
        loginPage.verifyDashboard(data.dashboard.accountsOverview);
    });
});