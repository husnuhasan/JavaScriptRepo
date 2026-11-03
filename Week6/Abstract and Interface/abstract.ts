abstract class BrowserActions
{//create abstract class 

     fill() :void
     {
        console.log("fill method is implemented");
     }
     clear(): void
     {
        console.log('clear method is implemented');
     }
    abstract locator():void

    abstract frame():void
}

class Browser3 extends BrowserActions //concrete class must implement all the inherited abstract methods
{
    locator():void{
        console.log('locator method is implemented in concrete class')
    }
    frame():void{
        console.log('frame method is implemented in concrete class')
    }
}
//creating object for concrete class Browser3
let browser3=new Browser3();
browser3.fill(); 
browser3.clear();
browser3.locator();
browser3.frame();