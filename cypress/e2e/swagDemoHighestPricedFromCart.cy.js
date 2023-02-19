import { addBackPackAndBikeLighttoCart, findMaxPricedProductCart, loginSauseStandardUser, swagDemoHomePage } from "./utlis";
describe("Find Highest Price from the cart ", () => {
    it("print higest price of the product in the cart", () => {
        swagDemoHomePage();
        loginSauseStandardUser();
        addBackPackAndBikeLighttoCart();
        findMaxPricedProductCart();
    })
})