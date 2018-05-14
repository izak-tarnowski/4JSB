var RATE = 0.25;
var totalPay, netPay, tax = 0.0;

totalPay = parseFloat(prompt("Enter your pay $", "1000"));
tax = totalPay * RATE;
netPay = totalPay - tax;

document.write("Net pay is: $" + netPay.toFixed(2));