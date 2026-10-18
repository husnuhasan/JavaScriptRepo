import{test,expect} from '@playwright/test'

test('To book movie ticket in PVR Cinemas',async({page})=>
{
   // ⁠Launch the browser and open PVR Cinemas
    await page.goto('https://www.pvrcinemas.com/');
    await page.waitForLoadState('domcontentloaded')        

    // Select the city "Bengaluru" 
    await page.getByRole('button',{name :'[object Object]'}).click();
    await page.locator("input[placeholder='Search for city']").fill('bengaluru');
    await page.getByRole('option',{name :'Bengaluru'}).click();
 
    //⁠Choose cinema from the available list 
    await page.getByText("Cinema",{exact:true}).click();
    await page.locator('//span[text()="Select Cinema"]').click();
    await page.getByText('PVR Bhartiya Mall Of Bengaluru',{exact:true}).click();

    //Select movie date 
    await page.locator('span').filter({ hasText: 'Select Date' }).click();    
    await page.locator('.p-dropdown').nth(2).click();
    await page.locator('li[role="option"]').filter({ hasText: 'Tomorrow' }).click();

    //Choose any available movie 
    await page.locator('div[aria-label="Select Movie"]').click();
    await page.locator('li[role="option"]').filter({ hasText: 'JAILER 2' }).click();

    //Select available show time 
    await page.locator('//span[text()="Select Timing"]').click();
    await page.locator('li[role="option"]').filter({ hasText: '12:15 PM' }).click()

    //Click on Book button 
    await page.getByRole('button',{name:'Submit'}).click();

    //⁠Click on Accept for Terms & Conditions 
    await page.getByRole('button',{name:'Accept'}).click();

    // ⁠Select the available seat
    await page.locator('//span[@id="CR.CLASSIC ROWS|A:13"]').click();

    //Verify seat information and total ticket amount using assertions
    await expect(page.locator('//div[@class="seat-number"]')).toContainText('A13');
    await expect.soft(page.locator('.grand-prices')).toContainText('549.62');

    //Verify the Title of the page
    await expect(page).toHaveTitle('PVR Cinemas')

    //⁠Proceed to booking
    await page.getByRole('button',{name:'Proceed'}).click();
    await page.waitForTimeout(2000);
    await page.getByAltText('close').click();
    
})
