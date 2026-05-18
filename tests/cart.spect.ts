import { test } from '@playwright/test';
import { CommonPageMethods } from '../pages/common-page/common-page.methods';
import { LogingPageMethods } from '../pages/login-page/login-page.methods';
import { ProductsPageMethods } from '../pages/products-page/products-page.methods';
import { Logger } from '../support/logger';
import { standard_user } from '../pages/login-page/login-page.interfaces';
import { CartPageMethods } from '../pages/cart-page/cart-page.methods';




test.describe('Cart', () => {
  test('should add item to cart', async ({ page }) => {
    const commonPageMethods = new CommonPageMethods(page);
    const loginPageMethods = new LogingPageMethods(page);
    const productsPageMethods = new ProductsPageMethods(page);
    const cartPageMethods = new CartPageMethods(page);
    const productName = 'Sauce Labs Onesie';


    Logger.logPostCondition('User is logged in and on products page');
    await commonPageMethods.navigateToTheApplication();
    await loginPageMethods.login(standard_user);
    await productsPageMethods.verifyProducPageIsDisplayed();
    
    await productsPageMethods.addProductToCart(productName);
    await productsPageMethods.clickOnCartIcon();
    await cartPageMethods.verifyProductISDisplayed(productName);    



  });
});