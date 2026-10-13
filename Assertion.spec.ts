import {test, expect } from "@playwright/test";

test('Learn assertions in playwright',async({page})=>{

   //Navigate to the page
    await page.goto('https://leafground.com/input.xhtml');

   //Locate the textbox with placeholder "Disabled".
   await expect(page.locator('//input[@placeholder="Disabled"]')).toBeDisabled();
   
   //Validate an Enabled Textbox
//Locate another textbox (example: the one with placeholder "Type your name").
await expect(page.locator('input[placeholder="Babu Manickam"]')).toBeEnabled();
await  page.locator('input[placeholder="Babu Manickam"]').fill('Husnu');//Type your name into the textbox.
//Soft Assertion Practice
//Pick a textbox that is not disabled.
await expect(page.locator('input[id$=":thisform:age"]')).toBeDisabled();
//Fill Data - Choose a textbox (any enabled one).
await page.locator('input[value="Can you clear me, please?"]').fill('Text is cleared');

})