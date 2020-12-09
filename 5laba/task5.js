document.getElementById("button1").onclick = function() {
	document.getElementById("pop_up1").style.display = "block"
	document.getElementById("background").style.display = "block"
}

document.getElementById("button2").onclick = function() {
	document.getElementById("pop_up2").style.display = "block"
	document.getElementById("background").style.display = "block"
}

document.getElementById("button3").onclick = function() {
	document.getElementById("pop_up3").style.display = "block"
	document.getElementById("background").style.display = "block"
}

document.getElementById("background").onclick = function() {
	document.getElementById("pop_up1").style.display = "none"
	document.getElementById("pop_up2").style.display = "none"
	document.getElementById("pop_up3").style.display = "none"
	document.getElementById("background").style.display = "none"
}
