import{test} from '@playwright/test';
import{ CommonPageMethods } from '../pages/common-page/common-page.methods';
import { LogingPageMethods } from '../pages/login-page/login-page.methods';
import { LoginPageData } from '../pages/login-page/login-page.data';


const userCredentials = LoginPageData.credentials;
;


test('Login', async ({ page }) => {
    const commonPageMethods = new CommonPageMethods(page);
    const loginPageMethods = new LogingPageMethods(page);


    await commonPageMethods.navigateToTheApplication();
    await loginPageMethods.insertUsername(userCredentials.usernames.standard_user);
    await loginPageMethods.insertPassword(userCredentials.password);
    await loginPageMethods.clickLoginButton();

    await page.waitForTimeout(10000);

});
