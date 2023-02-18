import { gumroadLogin, logout, navigatetoLoginPage, visitGumroadHomePage } from "./utlis";
describe("Visit Home Page & Login to Gumroad", () => {
  it("visit gumroad home page url ", () => {
    visitGumroadHomePage();
  });

  it("navigate to login page", () => {
    navigatetoLoginPage();
  });
  
  it("login", () => {
    gumroadLogin();
  });
});