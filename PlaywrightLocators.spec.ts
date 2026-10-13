import{test,expect} from '@playwright/test'

test('learn Playwright locators',async({page})=>
{
    await page.goto('https://leaftaps.com/opentaps/control/login');
    await page.getByRole("textbox",{name:"USERNAME"}).fill('democsr');
    await page.getByRole("textbox",{name:"PASSWORD"}).fill('crmsfa');
    await page.getByRole("button",{name:"Login"}).click();
    await page.getByText('CRM/SFA').click();
})