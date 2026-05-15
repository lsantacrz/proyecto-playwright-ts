import { test } from '@playwright/test';
import { CommonPageMethods } from '../pages/common-page/common-page.methods';
import { LogingPageMethods } from '../pages/login-page/login-page.methods';
import { LoginPageData } from '../pages/login-page/login-page.data';

const credential = LoginPageData.credentials;


test.describe('Login', () => {

    test('Login with valid credentials', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page);
        const loginPageMethods = new LogingPageMethods(page);


        await commonPageMethods.navigateToTheApplication();
        await loginPageMethods.insertUsername(credential.usernames.standard_user);
        await loginPageMethods.insertPassword(credential.password);
        await loginPageMethods.clickLoginButton();
    });

    // test('Login with invalid credentials', async ({ page }) => {
    //     const commonPageMethods = new CommonPageMethods(page);
    //     const loginPageMethods = new LogingPageMethods(page);

    //     await commonPageMethods.navigateToTheApplication();
    //     await loginPageMethods.insertUsername(credential.usernames.invalid_user);
    //     await loginPageMethods.insertPassword(credential.password);
    //     await loginPageMethods.clickLoginButton();
    // });
});