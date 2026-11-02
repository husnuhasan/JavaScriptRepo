//Overloading
//Create a class TextBox and implement method overloading for fill() with the following signatures:

class TextBox{

fill(text: string):void
fill(text: string, locator: string):void
fill(text:string,locator?:string)
{
if(locator)
{
    console.log(`text is ${text} and locator is ${locator}`)
}
else
{
    console.log(`text is ${text}`)
}
}

}
let textbox= new TextBox();
textbox.fill('Visible text')
textbox.fill('Username','//input[@id="username"]')