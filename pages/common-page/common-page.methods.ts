import { Page } from'playwright';
import { CommonPageElements } from './common-page.elements';
import { Logger } from '../../support/logger';



export class CommonPageMethods {
    private page: Page;
    private commonPageElements: CommonPageElements;


    constructor(page: Page) {
        this.page = page;
        this.commonPageElements = new CommonPageElements(page);

        

    }

    async navigateToTheApplication() {
        await Logger.logStep('Navigate to the application ' + ' https://www.saucedemo.com');
        await this.page.goto('https://www.saucedemo.com');
    }

    async openLeftMenu() {
        await Logger.logStep('Open left menu icon');
        await this.commonPageElements.buttons.openMenu.click();
    }

    async clickOnAllItemsButton() {
        await Logger.logStep('Click on All Items button option'); 
        await this.commonPageElements.leftMenu.allItems.click();
    }

    async clickOnAboutButton() {
        await Logger.logStep('Click on About button option');
        await this.commonPageElements.leftMenu.about.click();
    }

    async clickOnLogoutButton() {
        await Logger.logStep('Click on Logout button option');
        await this.commonPageElements.leftMenu.logout.click();
    }

    async clickOnResetAppStateButton() {
        await Logger.logStep('Click on Reset App State button option');    
        await this.commonPageElements.leftMenu.resetAppState.click();
    }
    

}
