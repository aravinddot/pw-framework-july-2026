import { Locator, Page, expect } from "@playwright/test"


export class GenricUtils {


 page: Page

    constructor(page: Page) {
        this.page = page
    }



    async grabTextFrmUI(selector: Locator) {
        const text = await selector.innerText()
        return text
    }


}