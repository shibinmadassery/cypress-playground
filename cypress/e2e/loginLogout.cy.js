import { gumroadLogin, logout, TestFunction01, verifyinggumroaddashboard } from "./utlis";
describe("Login & Logout", () => {
  it("login and logout", () => {
    gumroadLogin();
    logout();
  });
});