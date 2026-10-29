

class mathOperation{

    public add(num1: number,num2:number)
    {
            console.log(`Adding ${num1} and ${num2} gives ${num1+num2}`)
    }
    private sub(num1: number,num2:number){
         console.log(`Subtracting ${num2} from ${num1} gives ${num1-num2}`)
    }
    protected mul(num1: number,num2:number){
         console.log(`Multiplying ${num1} and ${num2} gives ${num1*num2}`)
    }

    constructor(num1: number,num2:number)
    {
        //constructor is called when an object is created
        console.log("calling constructor")
        this.add(num1,num2)
        this.sub(num1,num2)
        this.mul(num1,num2)

    }
 
}

const obj=new mathOperation(15,10);
obj.add(25,20)
//obj.mul(25,20) mul() method is protected so cant access outside the class
//obj.sub(25,20) sub() method is private so cant access outside the class
class advanceMath extends mathOperation{
    public calculate(a:number,b:number)
    {
        console.log(`calculate method`)
        this.add(a,b)
       // this.sub. since private methods cant called inside child class also
        this.mul(a,b) //protected method can be called inside child class
    }
    constructor(a:number,b:number)
    {
        super(a,b)
        console.log("Child constructor called");
    }
    
}

const childObj = new advanceMath(20, 10);


