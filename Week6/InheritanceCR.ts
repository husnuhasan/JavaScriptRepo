//Create class Browser
class Browser{
    //Create 2 methods browserType(),browserVersion(
browserType(type:string)
{
    console.log('Browser Type is '+type)
}
browserVersion(version:string)
{
    console.log('Browser Version is ' +version)
}
}

//1st Child file
//Create class Chrome 
class Chrome extends Browser{
    //Create 1 method launchBrowser
    launchBrowser()
    {
        console.log('Chrome browser is launched');
    }

}
//2nd Child class
//Create class Edge
class Edge extends Browser
{
    //Create 1 method launchBrowser
    launchBrowser()
    {
        console.log('Edge browser is launched');
    }
}
//Create object for Chrome
let chromeObj = new Chrome();
chromeObj.launchBrowser();
chromeObj.browserType('chrome');
chromeObj.browserVersion('latest');

//Create object for Edge
let edgeObj= new Edge();
edgeObj.launchBrowser();
edgeObj.browserType('Edge');
edgeObj.browserVersion(`new`);