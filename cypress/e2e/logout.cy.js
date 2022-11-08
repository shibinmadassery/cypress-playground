import { gumroadLogin, logout, TestFunction01, verifyinggumroaddashboard } from "./utlis";
describe("Login to Gumroad", () => {
  it("login to gumroad and verify after login", () => {
    gumroadLogin();
  });

  it("logout from gumroad", () => {
    logout();
  });
});