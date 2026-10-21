import {test,expect} from '@playwright/test'
test('Learn to handle a nested iframe',async({page})=>
{
    //Navigate to the LeafGround Frames page.
    await page.goto(' https://www.leafground.com/frame.xhtml');
    //dentify the parent iframe.
    const parentiFrame =  page.frameLocator('//iframe[@src="page.xhtml"]');
    //Locate the nested iframe inside the parent iframe using frameLocator().
    const childiFrame =  parentiFrame.frameLocator('//iframe[@src="framebutton.xhtml"]');

    //Click the button inside the nested iframe.
    await childiFrame.locator('#Click').click();

    //Verify that the button text changes to Hurray! You Clicked Me.
 await expect(childiFrame.locator('#Click')).toHaveText("Hurray! You Clicked Me.");

})