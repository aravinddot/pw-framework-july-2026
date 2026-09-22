import { test, expect } from '@playwright/test'
import { LoginPage } from '../src/pages/login'
import { HomePage } from '../src/pages/homePage'
import { upcomingDeliveriesTableHeader } from '../src/constants/constants'



test.describe('HomePage Test cases', async () => {

    let loginPage: LoginPage
    let homePage: HomePage

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
    })


    test('Verify the profile icon and Your Account', async () => {

        await loginPage.loginApplication()
        await homePage.verifyProfileIcon()

    })

    test('Verify Homepage and sections', async () => {

        await loginPage.loginApplication()
        await homePage.verifyHomePage('thead tr th', upcomingDeliveriesTableHeader)
    })





})


