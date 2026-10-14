import {test} from '@playwright/test'
test('Storage state excercise',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login');
    await page.getByRole("textbox",{name:"USERNAME"}).fill('democsr');
    await page.getByRole("textbox",{name:"PASSWORD"}).fill('crmsfa');
    await page.getByRole("button",{name:"Login"}).click();
    await page.context().storageState({path:'Week3/JSON/leaftap.json'})
})