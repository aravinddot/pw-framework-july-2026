import { CommonPage } from './commonPage'
import { Page, expect, Locator } from '@playwright/test'


export class GrowingBatchesPage extends CommonPage {

    grabRecords: Locator

    constructor(page: Page) {
        super(page)
        this.grabRecords = this.page.getByTestId('records-records-span-batches')
    }

    async loadingIconDisappears() {
        await this.page.getByTestId('empty-empty-icon-div').waitFor({state: 'detached'})
    }

    async getRecordsCount() {
        const recordsCount = await this.grabTextFrmUI(this.grabRecords)
        const count = recordsCount.split(' ')[0]
        return count
    }

    async grabRecordsCount() {
        await this.loadingIconDisappears()
        await this.page.getByTestId('records-page-size-select-batches').selectOption('100')
        await this.loadingIconDisappears()
        const count = await this.getRecordsCount()
        for(let i = 0; i < Number(count); i++) {
            await this.page.locator(`[row-index="${i}"]`).scrollIntoViewIfNeeded()
            await this.page.locator(`[row-index="${i}"]`).waitFor({state: 'visible'})
            await expect(this.page.locator(`[row-index="${i}"]`)).toBeVisible()
        }
    }


    async verifyTableStatus(dropdownValue: string, tableStatusValue: string) {
        await this.page.getByTestId('records-filter-status-select-batches').selectOption(dropdownValue)
        await this.loadingIconDisappears()
        const count = await this.getRecordsCount()
        console.log(count)
        for(let i = 0; i < Number(count); i++) {
            const grabbedValue = await this.page.locator(`[row-index="${i}"] [col-id="7"]`).getByText(tableStatusValue).innerText()
            expect(grabbedValue).toBe(tableStatusValue)
        }
    }

}