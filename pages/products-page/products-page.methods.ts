import{Page} from 'playwright';
import { ProductsPageElements } from './products-page.elements';

export class ProductsPageMethods {
    private page: Page;
    private productsPageElements: ProductsPageElements;

    constructor(page: Page) {
        this.page = page;
        this.productsPageElements = new ProductsPageElements(page);
    }

    async addProductToCart(productName: string) {
        await this.productsPageElements.addCartButton(productName).click();
    }
    
}