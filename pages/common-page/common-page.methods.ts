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

    async openLeftMenu() {
        await this.commonPageElements.buttons.openMenu.click();
    }

    async clickOnAllItemsButton() {
        await this.commonPageElements.leftMenu.allItems.click();
    }

    async clickOnAboutButton() {
        await this.commonPageElements.leftMenu.about.click();
    }

    async clickOnLogoutButton() {
        await this.commonPageElements.leftMenu.logout.click();
    }

    async clickOnResetAppStateButton() {
        await this.commonPageElements.leftMenu.resetAppState.click();
    }
    

}
