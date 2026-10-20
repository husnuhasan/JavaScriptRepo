import {test} from '@playwright/test'

test('handlimg alerts',async({page})=>
{
    page.on('dialog',async(alert)=>
    {
    const alertType = alert.type() //Returns dialog's type, can be one of alert, beforeunload, confirm or prompt.
    console.log(alertType);
    if(alertType==='prompt')
    {
        alert.accept('Playwright');
    }

    })
    //Launch the URL
    await page.goto("https://www.leafground.com/alert.xhtml");
    //Click on Prompt Dialog.
    await page.locator('(//span[text()="Show"])').nth(4).click();
    await page.waitForTimeout(3000)
    //Switch to the JavaScript prompt alert.
    

})