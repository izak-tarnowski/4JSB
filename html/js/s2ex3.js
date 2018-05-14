var out = "";

for(var i = 1; i < 100; i++) {
    if(i % 10 == 0) {
        out += "<br />";
	}
	out += i + " ";
}

document.getElementById("demo").innerHTML = out;