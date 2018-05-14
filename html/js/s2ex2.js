var age = 0;
age = parseInt(prompt("Enter your age", "19"));
while(age < 0 || age > 130) {
	alert("You have entered an invalid age. Must be between 0 and 130");
	age = parseInt(prompt("Enter your age", "19"));
}

document.getElementById("demo").innerHTML = "The validated age is: " + age;