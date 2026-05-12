import { Page } from "@playwright/test";

export class CheckOutOverviewPageElements {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }   
    get buttons() {
        return{
            finish: this.page.locator('button[data-test="finish"]'),
            cancel: this.page.locator('button[data-test="cancel"]'),
        }
    }
}