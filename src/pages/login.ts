import { Locator, Page } from "@playwright/test"



export class LoginPage {

    page: Page
    userNameInput: Locator
    passwordInput: Locator
    signInBtn: Locator
    profileIcon: Locator
    baseUrl: string
    userName: string 
    password: string

    constructor(page: Page) {
        this.page = page
        this.userNameInput = page.getByTestId('connect-username-input')
        this.passwordInput = page.getByTestId('connect-password-input')
        this.signInBtn = page.getByTestId('connect-button-button-2')
        this.profileIcon = page.getByTestId('app-account-and-password-button')
        this.baseUrl = process.env.BASE_URL || ""
        this.userName = process.env.USER_NAME || ""
        this.password = process.env.PASS_WORD || ""
    }


    async loginApplication() {
        await this.page.goto(this.baseUrl)
        await this.userNameInput.fill(this.userName)
        await this.passwordInput.fill(this.password)
        await this.signInBtn.click()
        await this.profileIcon.waitFor({ state: 'visible' })
    }



}