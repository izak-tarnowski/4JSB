alert("Welcome to my site nigga!")

var name = prompt("What is your name?", "Name");
var age = prompt("And your age?", "19");

document.write("<h1>Hello, " + name + ".</h1>");
document.write("You are " + age + " years old!\n");

var d = new Date();

var sd = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();

document.write("And the time is: " + sd);

int s = 0;