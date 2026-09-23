import { Locator, Page, expect } from "@playwright/test"
import { ICommonPage } from "../types/interface"
import { GenricUtils } from "../utils/genricUtils"


export class CommonPage extends GenricUtils implements ICommonPage {

    page: Page

    constructor(page: Page) {
        super(page)
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