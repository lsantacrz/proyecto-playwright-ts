import { Page } from "@playwright/test";
import { CheckOutOverviewPageElements } from "./checkout-overview-page.elements";
import { Logger } from "../../support/logger";


export class CheckOverviewPageMethods {
    private page: Page 
    private checkOutOverviewPageElements: CheckOutOverviewPageElements;

    constructor(page: Page) {
        this.page = page;
        this.checkOutOverviewPageElements = new CheckOutOverviewPageElements(page);
    }   

    async clickOnFinishButton() {
        await Logger.logStep('Click on Finish button');
        await this.checkOutOverviewPageElements.buttons.finish.click();
    }

    async clickOnCancelButton() {
        await Logger.logStep('Click on Cancel button');
        await this.checkOutOverviewPageElements.buttons.cancel.click();
    }

    async verifyOverviewPageIsDisplayed() {
        await Logger.logStep('Verify overview page is displayed');
        await this.checkOutOverviewPageElements.overviewTitle.waitFor({ state: 'visible' });
    }




}
