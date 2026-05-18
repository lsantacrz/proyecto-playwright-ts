import {test} from '@playwright/test';
import { Logger } from '../support/logger';
import { CommonPageMethods } from '../pages/common-page/common-page.methods';
import { LogingPageMethods } from '../pages/login-page/login-page.methods';
import { ProductsPageMethods } from '../pages/products-page/products-page.methods';
import { CartPageMethods } from '../pages/cart-page/cart-page.methods';
import { standard_user } from '../pages/login-page/login-page.interfaces';
import { CheckoutPageElements } from '../pages/checkout-page/checkout-page.elements';
import { CheckOverviewPageMethods } from '../pages/checkout-overview-page/checkout-overview-page.methods';



test.describe.only('Checkout test cases', () => {

  test('Checkout process', async ({ page }) => {
    // Implement the checkout process test case here
    // This may include steps like adding items to the cart, proceeding to checkout, filling in shipping and payment information, 
    // and verifying the order confirmation.

    const commonPageMethods = new CommonPageMethods(page);
    const loginPageMethods = new LogingPageMethods(page);
    const productsPageMethods = new ProductsPageMethods(page);
    const cartPageMethods = new CartPageMethods(page);
    const productName = 'Sauce Labs Onesie';
    const checkoutPageElements = new CheckoutPageElements(page);
    const checkOverviewPageMethods = new CheckOverviewPageMethods(page);

    await Logger.logPreCondition('User is logged in and has items in the cart');
    await commonPageMethods.navigateToTheApplication();
    await loginPageMethods.login(standard_user);
    await productsPageMethods.addProductToCart(productName);


    await productsPageMethods.clickOnCartIcon();    
    await cartPageMethods.clickOnCheckoutButton();
    await checkoutPageElements.inputs.firstName.fill('John');
    await checkoutPageElements.inputs.lastName.fill('Doe');
    await checkoutPageElements.inputs.postalCode.fill('12345');
    await checkoutPageElements.buttons.continue.click();
    await checkOverviewPageMethods.verifyOverviewPageIsDisplayed();
    await page.waitForTimeout(5000);

    //await checkOverviewPageMethods.clickOnFinishButton();
  
    await page.waitForTimeout(5000);


  });
});
