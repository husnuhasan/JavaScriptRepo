import test from "@playwright/test";
import dotenv from 'dotenv'
import { resolve } from 'node:path'


//toggle between different env 
//envData user defined variable to set the environment in the terminal
const fileName = process.env.envData || 'qa';
const envPath = resolve(__dirname, '../../../../Data', `${fileName}.env`);
const envResult = dotenv.config({ path: envPath });

if (envResult.error) {
    throw new Error(`Could not load environment file at ${envPath}: ${envResult.error.message}`);
}

const { L_Url, L_Username, L_Password } = process.env;
if (!L_Url || !L_Username || !L_Password) {
    throw new Error(`Environment file ${envPath} must define L_Url, L_Username, and L_Password.`);
}


//Here if i dont set the environment using command $env:envData
//it's set as undefined in that scenario by default 'qa' environment should be taken

//to read a single env file
//dotenv.config({path:'Data/qa.env'})


test('learn to read data from env file',async({page})=>{
//process.env => node js object to read environment variables
//process is object used to expose the system environment details of my local system

    // console.log(process.env);
    // console.log(process.env.username);
    //expose the username from your local system

    await page.goto(L_Url)
    await page.locator('[id="username"]').fill(L_Username)
    await page.locator('#Login').click();
    await page.locator('[id="password"]').fill(L_Password)
    await page.locator('#Login').click();
    
    
})
