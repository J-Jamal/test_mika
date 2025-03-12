import userData from "../../fixtures/data/userData.json";
import Navigation from "../../support/PageObject/Navigation";
import account from "../../fixtures/data/account.json";
import Login from "../../support/PageObject/Login";
// import messageData from "../../fixtures/data/messageData.json";

const submit = Login.clickLogin();

describe("User Login Test Suite", () => {
  beforeEach(() => {
    Navigation.visitHomepage();
    cy.clearAllCookies;
    cy.contains("Login").click();
    cy.clearAllCookies;
  });  
  it("TC-1_Verifikasi login akun untuk masuk(POSITIVE)", () => {  
    cy.get(account.phone).type(userData.validUser.no_telp);
    cy.get(account.password).type(userData.validUser.password);
    cy.get(submit).click(); 
})
it("TC-2_Verifikasi login akun untuk masuk(NEGATIVE)", () => {  
    cy.get(account.phone).type(userData.invalidUser.no_telp);
    cy.get(account.password).type(userData.invalidUser.password);
    cy.get(submit).click(); 
    cy.get(Login.loginError) 
          .should("not.be.visible")
})
});
