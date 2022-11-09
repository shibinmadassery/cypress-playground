import { gumroadLogin, logout, TestFunction01, verifyinggumroaddashboard } from "./utlis";
describe("Login & Logout", () => {
  it("login", () => {
    gumroadLogin();
  });

  it("logout", () => {
    logout();
  });
});