import { Page } from 'playwright';

export class CartPageElements {
    private page:Page

    constructor(page: Page) {
        this.page = page
    }   

    removeButton(productName: string) {
        return this.page.locator(`button[data-test="remove-${productName.toLowerCase().replace(/\s/g, '-')}"]`)
    }

    get buttons() {
        return{
            continueShopping: this.page.locator('button[data-test="continue-shopping"]'),
            checkout: this.page.locator('button[data-test="checkout"]'),

        }
    }

}