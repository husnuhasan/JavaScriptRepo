/*
Create an interface Payment with payment method
pay(amount: number): void
create 3 classes with UPI,CreditCard and NetBanking
each class should implement payment method and provide its own implementation*/
interface Payment{
    pay(amount: number): void
}

class UPI implements Payment
{
    pay(amount:number):void
    {
        console.log(`Rs.${amount} is paid through UPI successfully`)
    }
}
class CreditCard implements Payment
{
   pay(amount:number):void
   {
     console.log(`Rs.${amount} is paid through  CreditCard successfully`)
   }

}
class NetBanking implements Payment
{
    pay(amount:number):void
{
    console.log(`Rs.${amount} is paid through  NetBanking successfully`)
}
}
//creating objects and. calling the methods
let upi=new UPI();
let creditcard=new CreditCard();
let netbanking=new NetBanking();
upi.pay(1000);
creditcard.pay(2000);
netbanking.pay(3000);
