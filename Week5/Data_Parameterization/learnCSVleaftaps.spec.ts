import test, { expect } from "@playwright/test"
import fs from 'fs'
import { parse } from "csv-parse/sync";

let value=fs.readFileSync('tests/utils/SF.csv','utf-8');

let value1: any[]=parse(value,{columns:true,skip_empty_lines:true})

for(let details of value1){

test(`data-driven testing using csv ${details.tcid}`,async({page})=>
{
    await page.goto(details.URL);
    await page.locator('#username').fill(details.username)
    await page.locator('#password').fill(details.password)
    await page.locator('.decorativeSubmit').click();
    await expect(page.getByText(' CRM/SFA ',{exact:true})).toContainText('CRM/SFA');
})
}