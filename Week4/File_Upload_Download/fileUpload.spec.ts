import{test,expect} from '@playwright/test'
test('practising file upload',async({page})=>
{
    await page.goto('https://www.naukri.com/registration/createAccount');
    //clicking experienced
    await page.getByText(' I have work experience (excluding internships)',{exact: true}).click();
    await page.waitForTimeout(2000)

    //click on upload resume
    await page.locator('//input[@type="file"]').setInputFiles('Data/sample.pdf');

    //retry assertion 
    let resumeAssertion = await page.locator('[class="file-name ellipsis"]').innerText()
    console.log(resumeAssertion);

    await expect(page.locator('[class="file-name ellipsis"]')).toContainText('sample.pdf')


    
})