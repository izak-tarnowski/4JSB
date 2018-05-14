prompt("Ready?", "YES!");

var text = "";

var num = 0;
while(num < 10) {
	text = text + num + "<br />"
	num = num + 1;
}

document.getElementById("demo").innerHTML = text;
