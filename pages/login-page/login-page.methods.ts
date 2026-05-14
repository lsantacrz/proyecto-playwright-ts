import { Page } from "@playwright/test";
import { LoginPageElements } from "./login-page.elements";
import { Logger } from "../../support/logger";

export class LogingPageMethods {
    private page: Page;
    private loginPageElements: LoginPageElements;

    constructor(page: Page) {
        this.page = page;
        this.loginPageElements = new LoginPageElements(page);
    }

    async insertUsername(username: string) {
        await Logger.logStep('Insert username: ' + username);
        await this.loginPageElements.testboxes.username.fill(username);
    }

    async insertPassword(password: string) {
        await Logger.logStep('Insert password: ' + password);
        await this.loginPageElements.testboxes.password.fill(password);
    }

    async clickLoginButton() {
        await Logger.logStep('Click on Login button');
        await this.loginPageElements.buttons.login.click();
    }
    




}

