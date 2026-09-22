import { CommonPage } from './commonPage'
import { Page, expect } from '@playwright/test'


export class GrowingBatchesPage extends CommonPage {

    constructor(page: Page) {
        super(page)
    }

    async loadingIconDisappears() {
        await this.page.getByTestId('empty-empty-icon-div').waitFor({state: 'detached'})
    }

    async grabRecordsCount() {
        await this.loadingIconDisappears()
        const recordsCount = await this.page.getByTestId('records-records-span-batches').innerText()
        await this.page.getByTestId('records-page-size-select-batches').selectOption('100')
        await this.loadingIconDisappears()
        const count = recordsCount.split(' ')[0]
        for(let i = 0; i < Number(count); i++) {
            await this.page.locator(`[row-index="${i}"]`).scrollIntoViewIfNeeded()
            await this.page.locator(`[row-index="${i}"]`).waitFor({state: 'visible'})
            await expect(this.page.locator(`[row-index="${i}"]`)).toBeVisible()
        }
    }

}