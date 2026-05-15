import { test } from '@playwright/test';
import { CommonPageMethods } from '../pages/common-page/common-page.methods';
import { LogingPageMethods } from '../pages/login-page/login-page.methods';
import { LoginPageData } from '../pages/login-page/login-page.data';
import { ProductsPageMethods } from '../pages/products-page/products-page.methods';
import * as interfaces from '../pages/login-page/login-page.interfaces';


const credential = LoginPageData.credentials;


test.describe('Login', () => {

    test('Login with valid credentials', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page);
        const loginPageMethods = new LogingPageMethods(page);
        const productsPageMethods = new ProductsPageMethods(page);


        await commonPageMethods.navigateToTheApplication();
        await loginPageMethods.insertUsername(credential.usernames.standard_user);
        await loginPageMethods.insertPassword(credential.password);
        await loginPageMethods.clickLoginButton();
        await productsPageMethods.verifyProducPageIsDisplayed();
    });

    test('Login with invalid credentials', async ({ page }) => {
         const commonPageMethods = new CommonPageMethods(page);
         const loginPageMethods = new LogingPageMethods(page);

         await commonPageMethods.navigateToTheApplication();
         await loginPageMethods.insertUsername('Dummy');
         await loginPageMethods.insertPassword('password');
         await loginPageMethods.clickLoginButton();
            await loginPageMethods.verifyMessage('Username and password do not match any user in this service');
   });

   test('Login', async ({ page }) => {
         const commonPageMethods = new CommonPageMethods(page);
         const loginPageMethods = new LogingPageMethods(page);
         
         await commonPageMethods.navigateToTheApplication();
         await loginPageMethods.login(interfaces.standard_user);

   });



});