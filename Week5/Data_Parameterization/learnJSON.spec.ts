import test from "@playwright/test";
import login from '../../../utils/SF.json'

for(let values of login) {
test(`learn json ${values.TestCaseId}`,async({page})=>{
    

    await page.goto('https://login.salesforce.com');
    await page.locator('#username').fill(values.userName);
    await page.locator('#Login').click();
    await page.locator('#password').fill(values.password);
    await page.locator('#Login').click();
})
}


