import { gumroadLogin, logout, navigatetoLoginPage, verifyingGumroadHomePage, visitGumroadHomePage } from "./utlis";
describe("Visit Home Page & Login to Gumroad", () => {
  it("visit gumroad home page url ", () => {
    visitGumroadHomePage();
  });

  it("verifying gumroad home page", () => {
    verifyingGumroadHomePage();
  });
});