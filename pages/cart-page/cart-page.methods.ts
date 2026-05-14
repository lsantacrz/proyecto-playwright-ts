import { Page } from 'playwright';
import { CartPageElements } from './cart-page.elements';
import { Logger } from '../../support/logger';

export class CartPageMethods {
    private page: Page;
    private cartPageElements: CartPageElements;

    constructor(page: Page) {
        this.page = page;
        this.cartPageElements = new CartPageElements(page);
    }


    async clickOnContinuesShoppingButton() {
        await Logger.logStep('Click on Continue Shopping button');
        await this.cartPageElements.buttons.continueShopping.click();
    }

    async clickOnCheckoutButton() {
        await Logger.logStep('Click on Checkout button');
        await this.cartPageElements.buttons.checkout.click();
    }

    async clickOnRemoveButton(productName: string) {
        await Logger.logStep('Click on Remove button for product: ' + productName);
        await this.cartPageElements.removeButton(productName).click();
    
    }
}