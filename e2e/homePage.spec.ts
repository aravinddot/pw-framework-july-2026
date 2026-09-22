import { test } from '../src/config/fixtures'
import { HomePage } from '../src/pages/homePage'
import { upcomingDeliveriesTableHeader } from '../src/constants/constants'



test.describe('HomePage Test cases', async () => {

    let homePage: HomePage

    test.beforeEach(async ({ pageWithLogin }) => {
        homePage = new HomePage(pageWithLogin)
    })


    test('Verify the profile icon and Your Account', async () => {

        await homePage.verifyProfileIcon()

    })

    test('Verify Homepage and sections', async () => {

        await homePage.verifyHomePage('thead tr th', upcomingDeliveriesTableHeader)
    })





})


