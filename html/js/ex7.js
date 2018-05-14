
var ef = function(arg1, arg2, oper) {
	var abs = 0;
	String a = "";
    switch(oper) {
    	case 0:
    	ans = arg1 + arg2;
    	a = arg1 + " + " + arg2 + " = " + abs;
  		break;
  		case 1:
  		ans = arg1 - arg2;
  		a = arg1 + " - " + arg2 + " = " + abs;
  		break;
  		case 2:
  		ans = arg1 * arg2;
  		a = arg1 + " * " + arg2 + " = " + abs;
  		break;
  		case 3:
  		ans = arg1 / arg2;
  		a = arg1 + " / " + arg2 + " = " + abs;
  		break;
    }

    return a;
};

var num1, num2, ans = 0;
var ele = document.getElementById("demo");

num1 = parseInt(prompt("Please enter first number", "1"));
num2 = parseInt(prompt("Please enter second number", "2"));

document.print(ef(num1, num2, 0));
document.print(ef(num1, num2, 1));
document.print(ef(num1, num2, 2));

if (num1 === 0) {
    num1 = 1;
    document.print("Cannot divide " + num2 + " by 0. Value changed to 1." + '\n');
}

if (num2 === 0) {
    num2 = 1;
    document.print("Cannot divide " + num1 + " by 0. Value changed to 1." + '\n');
}

ans = num1 / num2;
document.print(ef(num1, num2, 3));
