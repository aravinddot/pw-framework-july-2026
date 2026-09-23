import { test } from '../src/config/fixtures'
import { GrowingBatchesPage } from '../src/pages/growingBatches'
import { SideBarLocators } from '../src/constants/constants'
import { sideBarItem } from '../src/constants/constants'
import { tableStatus } from '../src/constants/constants'
import testData from '../src/testData/testData.json'


const {planned, sown, germinating} = testData

test.describe('Growing Batches Test cases', async () => {

    let growingBatchesPage: GrowingBatchesPage

    test.beforeEach(async ({ pageWithLogin }) => {
        growingBatchesPage = new GrowingBatchesPage(pageWithLogin)
    })


    test('Verify growing batches table records count', async()=> {
        await growingBatchesPage.navigateViaHomePage(SideBarLocators.GROWINGBATCHES, sideBarItem.growingBatches.expectedUrl)
        await growingBatchesPage.grabRecordsCount()
    })


    test('Verify the table status', async()=> {
        await growingBatchesPage.navigateViaHomePage(SideBarLocators.GROWINGBATCHES, sideBarItem.growingBatches.expectedUrl)
        await growingBatchesPage.verifyTableStatus(planned.dropdownValue, tableStatus.planned.tableStatusvalue)
    })

})
