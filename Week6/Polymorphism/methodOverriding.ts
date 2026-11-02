/*Overriding
Create a parent class Browser with a method browserVersion()*/


class Browser1{
    browserVersion()
    {
        console.log(`this is the browser version`)
    }
}
//Create a child class Chrome that overrides browserVersion() and prints a specific browser version.
class Chrome1 extends Browser1{
    browserVersion()
    {
        console.log('the browser version is chrome')
    }
}
let chromeob= new Chrome1();
chromeob.browserVersion();