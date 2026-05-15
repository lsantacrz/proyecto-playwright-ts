import{Page} from 'playwright';

export class ProductsPageElements {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get icons() {
        return {
            cart: this.page.locator('#shopping_cart_container'),
        }
    }


    addCartButton(productName: string): any {return this.page.locator(`//div[text()="${productName}"]/ancestor::div[@class="inventory_item"]//button`);
    

    }

    get otherElements() {
        return {
            pageTitle: this.page.locator('.title'),
        }
    }

}