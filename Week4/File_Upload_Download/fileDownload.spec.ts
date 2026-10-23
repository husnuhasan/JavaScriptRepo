import{test,expect} from '@playwright/test'

 test('learning file download',async({page})=>
{
    await page.goto('https://the-internet.herokuapp.com/download');

    //starting the listener
    const downloadRef = page.waitForEvent('download');

    //click on the file
    await page.getByText('webdriverIO.png',{exact: true}).click();

 //resolve the listener promise and store the download ref
    const fDownload = await downloadRef

   //save the file in the user-given name
 await fDownload.saveAs('Downloads/test.jpeg')

 //To know the browser suggessted name
 let fileName =fDownload.suggestedFilename();
 console.log(fileName)

 //to verify the download
expect(fDownload).toBeTruthy()

 //verify the filename
    expect(fDownload.suggestedFilename()).toContain('webdriverIO.png')

})