import { gumroadLogin, TestFunction01, verifyinggumroaddashboard } from "./utlis";
describe("Login to Gumroad & Verify the gumroad dashboard", () => {
  it("login to gumroad and verify after login", () => {
    gumroadLogin();
  });

  it("verify the elements on the dashboard", () => {
    verifyinggumroaddashboard();
  });
});