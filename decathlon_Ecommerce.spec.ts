import {test,expect} from '@playwright/test'
test('shop in decathlon website',async({page})=>
{
    //Launch browser and navigate to Decathlon website https://www.decathlon.in/ 
    await page.goto('https://www.decathlon.in/');
    await page.waitForLoadState('domcontentloaded')
    //Verify URL using Playwright assertions
    const currentURL =  page.url();
    await expect(page).toHaveURL('https://www.decathlon.in/');

    //Verify the Decathlon homepage is displayed 
    const pageTitle=page.title();
    await expect(page).toHaveTitle('Buy Sporting Goods, Sportswear and Equipments | Download App');

    //Verify if search box is enabled 
    let searchBox= page.locator('input[data-test-id="search-input-desktop:container"]');
    await expect(searchBox).toBeEnabled();

     //⁠Click on the search Box and  ⁠Enter the product name “Shoes” 
     await searchBox.fill('shoes');

     //Press Enter or select a suggestion from the dropdown 
    await page.locator('span[data-test-id="text-suggestions-list:text-span-2"]').nth(0).click();

    //⁠Verify the product listing page is displayed or Verify search results page title 
    let productTitle=page.title();
    console.log(productTitle)
    await expect(page).toHaveTitle('Decathlon Sports India');

    //Click on the Sport filter dropdown 
    await page.locator('//span[text()="Sport"]').click();

    //⁠Select Running from the Sport dropdown 
    await page.locator('//span[text()="Running"]').click();

    //Click on the Gender filter dropdown
    await page.locator('//span[text()="Gender"]').click();

    //Select Women
    await page.locator('//label[@data-test-id="checkbox-container"]/following-sibling::span[text()="Women"]').click();

     //Click on the Size filter dropdown
     await page.locator('//span[text()="Size"]').click();

     //Select size UK 4
     await page.locator('//input[@data-test-id="filter-checkbox-indian_size-5"]').click();

     //Click on the Price filter dropdown
     await page.locator('//span[text()="Price"]').click();

     //Select a price range
     //await page.locator('div[data-test-id="filter-sidebar-desktop:slider-thumb-max-inner"').click();

     //From the filtered results, click on the first available product 
     await page.getByAltText('Women Running Light Cushion Shoes, Jogflow 100.1 - Black').click();

     // ⁠On the product details page, select Size – UK 4
    await page.getByLabel('Select size 5',{exact:true}).click();

    //Click on Add to cart button
    await page.locator('button[data-test-id="pdp:add-to-cart-button"]').click();

    //Verify that the product is successfully added to the cart
    await expect(page.locator('span[data-test-id="header-desktop:cart-count-badge"]')).toContainText("1");
    


})