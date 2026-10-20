//Create a TypeScript program to handle different payment methods using a Union Type.
//Create a type alias called PaymentMethod that allows only "UPI", "CreditCard", or "PayPal".
 type paymentMethod = "UPI"|"CreditCard"|"PayPal"
 //Write a function makePayment that takes a parameter of type PaymentMethod and prints which payment method is chosen.
 function makePayment(payment :paymentMethod)
 {
    console.log('Payment method chosen is ',payment);
 }
//⁠Call the function with "UPI" and "CreditCard" as arguments.
 makePayment("UPI");
 makePayment("CreditCard");

 //makePayment("Debit")
