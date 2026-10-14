import{expect, test} from '@playwright/test'

test.use({storageState:'Week3/JSON/leaftap.json'})
test('Storage state usage',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login');
    await page.waitForTimeout(10000)
    await page.locator("//a[contains(text(),'CRM')]").click();
 //expect(page.locator('//a[contains(text(),"Home")]')).toBe("My Home");
})