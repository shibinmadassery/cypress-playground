import { gumroadLogin, TestFunction01, verifyinggumroaddashboard } from "./utlis";
describe("Login to Gumroad & Verify the gumroad dashboard", () => {
  it("login", () => {
    gumroadLogin();
  });

  it("verify the elements on the dashboard", () => {
    verifyinggumroaddashboard();
  });
});