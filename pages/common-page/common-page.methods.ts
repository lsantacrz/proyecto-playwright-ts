import { Page } from'playwright';
import { CommonPageElements } from './common-page.elements';



export class CommonPageMethods {
    private page: Page;
    private commonPageElements: CommonPageElements;


    constructor(page: Page) {
        this.page = page;
        this.commonPageElements = new CommonPageElements(page);

        

    }

    async navigateToTheApplication() {
        await this.page.goto('https://www.saucedemo.com');
    }



}
