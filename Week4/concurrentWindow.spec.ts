import {test} from '@playwright/test'
 test('To handle a single child window',async({page,context})=>
{
await page.goto('https://www.leafground.com/window.xhtml');

const [childPage] = await Promise.all([context.waitForEvent('page'),
  page.getByText('Open', { exact: true }).click()]);

const pages = context.pages();
console.log('Page count:', pages.length);
await childPage.waitForEvent('domcontentloaded');
console.log("The title of Main page is "+await page.title());
console.log("The title of Child page is "+await childPage.title());
page.bringToFront();
await childPage.getByPlaceholder('E-mail Address',{exact:true}).fill('example@testemail.com');
await childPage.getByPlaceholder('Write your message...',{exact:true}).fill('Playwright window handling')
})