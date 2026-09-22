import { Locator, Page, expect } from "@playwright/test"


export class CommonPage {

    page: Page

    constructor(page: Page) {
        this.page = page
    }


    async verifyTableHeader(locator: string, columns: string[]) {
        for(let i = 0; i < columns.length; i++) {
            await expect(this.page.locator(locator).nth(i)).toContainText(columns[i])
        }
    }


    async navigateViaHomePage(locator: string, expectedUrl: string) {
        await this.page.getByTestId(locator).click()
        await this.page.waitForURL(expectedUrl)
        await expect(this.page).toHaveURL(expectedUrl)
    }




}