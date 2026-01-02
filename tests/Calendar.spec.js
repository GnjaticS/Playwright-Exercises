const {test, expect}= require ('@playwright/test');
const { CalendarPage } = require('../pageobjects/CalendarPage');

test('Calendar', async ({page})=>
 {

    const cp = new CalendarPage(page);

    await cp.goToPage();
    await cp.selectDate(6, 15, 2025);

})


