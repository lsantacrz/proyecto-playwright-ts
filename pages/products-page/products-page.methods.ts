import{Page} from 'playwright';
import { ProductsPageElements } from './products-page.elements';
import { Logger } from '../../support/logger';

export class ProductsPageMethods {
    private page: Page;
    private productsPageElements: ProductsPageElements;

    constructor(page: Page) {
        this.page = page;
        this.productsPageElements = new ProductsPageElements(page);
    }

    async addProductToCart(productName: string) {
        await Logger.logStep('Add product to cart: ' + productName);    
        await this.productsPageElements.addCartButton(productName).click();
    }

    async clickOnCartIcon() {
        await Logger.logStep('Click on Cart icon');
        await this.productsPageElements.icons.cart.click();
    }

}