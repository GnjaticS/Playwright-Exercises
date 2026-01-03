const { expect } = require("@playwright/test");

class CalendarPage {
    
    constructor(page) {
        this.page = page;
        this.calendarHeader = page.locator('.react-date-picker--enabled');
        this.monthYearTitle = page.locator('.react-calendar__navigation__label');
        this.getMonth = page.locator('.react-calendar__year-view__months__month');
        this.getDate = page.locator('.react-calendar__tile');
        
        
    }

    async goToPage() {
        await this.page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    }

    async selectDate(monthNumber, date, year) {
        await this.calendarHeader.click();
        await this.monthYearTitle.click();
        await this.monthYearTitle.click();
        await this.page.locator('.react-calendar__decade-view__years').locator('.react-calendar__tile').filter({hasText: year.toString() }).click();
        await this.getMonth.nth(monthNumber - 1).click();
        await this.getDate.getByText(date.toString(), { exact: true }).click();
    }

    async verifyDate(expectedDate){
        const deliveryDate = await this.page.locator("input[name='date']").getAttribute('value');
        console.log(deliveryDate);
        expect(deliveryDate).toEqual(expectedDate);
    }
}

module.exports = { CalendarPage };
