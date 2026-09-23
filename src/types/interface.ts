

export interface ICommonPage {
    verifyTableHeader(locator: string, columns: string[]): Promise<void>
    navigateViaHomePage(locator: string, expectedUrl: string):  Promise<void>
}