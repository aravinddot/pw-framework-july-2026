import { Locator, Page, expect } from "@playwright/test"
import { CommonPage } from "./commonPage"


export class HomePage extends CommonPage{


    page: Page
    passwordBtn: Locator
    modalHeader: Locator
    accountPasswordInput: Locator
    passwordLabel: Locator
    accountNewPasswordInput: Locator
    newPasswordLabel: Locator
    confirmPasswordInput: Locator
    confirmPasswordLabel: Locator
    signOutBtn: Locator
    updatePasswordBtn: Locator

    constructor(page: Page) {
        super(page)
        this.page = page
        this.passwordBtn = this.page.getByTestId('app-account-and-password-button')
        this.modalHeader = page.getByTestId('modal-h2')
        this.accountPasswordInput = page.getByTestId('account-dialog-current-password-input')
        this.passwordLabel = page.getByTestId('account-dialog-current-password-label')
        this.accountNewPasswordInput = page.getByTestId('account-dialog-new-password-input')
        this.newPasswordLabel = page.getByTestId('account-dialog-new-password-label')
        this.confirmPasswordInput = page.getByTestId('account-dialog-confirm-password-input')
        this.confirmPasswordLabel = page.getByTestId('account-dialog-confirm-new-password-label')
        this.signOutBtn = page.getByTestId('account-dialog-button-button')
        this.updatePasswordBtn = page.getByTestId('account-dialog-button-button-2')
    }


    async verifyProfileIcon() {
        await this.passwordBtn.click()
        await this.modalHeader.waitFor({ state: 'visible' })
        await expect(this.modalHeader).toContainText('Your account')
        await expect(this.accountPasswordInput).toBeVisible()
        await expect(this.passwordLabel).toContainText('Current password')
        await expect(this.accountNewPasswordInput).toBeVisible()
        await expect(this.newPasswordLabel).toContainText('New password')
        await expect(this.confirmPasswordInput).toBeVisible()
        await expect(this.confirmPasswordLabel).toContainText('Confirm new password')
        await expect(this.signOutBtn).toBeVisible()
        await expect(this.updatePasswordBtn).toBeVisible()
    }


    async verifyHomePage(locator: string, columns: string[]) {
        await expect(this.page.getByTestId('page-heading-h1')).toContainText('Farm overview')
        await expect(this.page.getByTestId('dashboard-planning-link')).toBeVisible()
        await expect(this.page.getByTestId('dashboard-button-button')).toBeVisible()
        await expect(this.page.getByTestId('dashboard-revenue-overview-h2')).toContainText('Revenue overview')
        await expect(this.page.getByTestId('dashboard-farm-priorities-h2')).toContainText('Farm priorities')
        await expect(this.page.getByTestId('dashboard-upcoming-deliveries-h2')).toContainText('Upcoming deliveries')
        await expect(this.page.getByTestId('dashboard-growing-on-your-farm-h2')).toContainText('Growing on your farm')
        await this.verifyTableHeader(locator, columns)
    }





}