import { expect,Page } from '@playwright/test';

export class WebActions {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async navigateToURL(url: string) {
        this.page.goto(url);
    }
    async delay(sec: number): Promise<void> {
        return  await this.page.waitForTimeout(sec*1000); 
    }
    async waitForElementAttached(locator: string): Promise<void> {
        await this.page.waitForSelector(locator);
    }
    async clickElement(locator: string): Promise<void> {
        await this.waitForElementAttached(locator);
        await this.page.click(locator);
    }
    async enterElementText(locator: string, text: string): Promise<void> {
        await this.waitForElementAttached(locator);
        await this.page.type(locator, text);
    }
}