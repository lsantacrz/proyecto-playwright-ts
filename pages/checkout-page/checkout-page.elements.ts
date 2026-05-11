import { Page } from 'playwright';
   
export class CheckoutPageElements {
    private page:Page;

    constructor(page: Page) {
        this.page = page;
    }   

    get inputs() {
        return{
            firstName: this.page.locator('input[data-test="firstName"]'),
            lastName: this.page.locator('input[data-test="lastName"]'),
            postalCode: this.page.locator('input[data-test="postalCode"]'),
        }
    }

    get buttons() {
        return{
            continue: this.page.locator('input[data-test="continue"]'),
            cancel: this.page.locator('button[data-test="finish"]'),
        }
    }
}