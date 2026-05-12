import { Page } from "@playwright/test";
import { CheckOutOverviewPageElements } from "./checkout-overview-page.elements";


export class CheckOverviewPageMethods {
    private page: Page 
    private checkOutOverviewPageElements: CheckOutOverviewPageElements;

    constructor(page: Page) {
        this.page = page;
        this.checkOutOverviewPageElements = new CheckOutOverviewPageElements(page);
    }   

    async clickOnFinishButton() {
        await this.checkOutOverviewPageElements.buttons.finish.click();
    }

    async clickOnCancelButton() {
        await this.checkOutOverviewPageElements.buttons.cancel.click();
    }
}
