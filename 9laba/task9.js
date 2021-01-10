let symbols = ["+", "-", "*", "/"];
decimalAllowed = true;

function addInteger(x) {
	if(document.getElementById("window").textContent.length < 17) {
		let str = document.getElementById("window").textContent;

		if(document.getElementById("window").textContent === "0") {
			document.getElementById("window").textContent = "";
		}
		document.getElementById("window").textContent += x;
	}
}

function addSymbol(x) {
	if(document.getElementById("window").textContent.length < 17) {
		let str = document.getElementById("window").textContent;

		if(str !== "") {
			if(symbols.includes(str.charAt(str.length-2))) {
					document.getElementById("window").textContent = str.substring(0, str.length - 3);
					document.getElementById("window").textContent += " " + x + " ";
					decimalAllowed = true;
			} 
			else {
				document.getElementById("window").textContent += " " + x + " ";
				decimalAllowed = true;
			}
		}
	}
}

function addDecimal() {
	if(document.getElementById("window").textContent.length < 17) {
		if (decimalAllowed === true) {
			document.getElementById("window").textContent += ".";
			decimalAllowed = false;
		}
	}
}

function addZero(x) {
	if(document.getElementById("window").textContent.length < 17) {
		if(document.getElementById("window").textContent !== "0") {
			document.getElementById("window").append(x);
		}
	}
}

function removeSymbol() {
	let str = document.getElementById("window").textContent;

	if(symbols.includes(str.charAt(str.length-2))) {
		document.getElementById("window").textContent = str.substring(0, str.length - 3);
	} 
	else {
		document.getElementById("window").textContent = str.substring(0, str.length - 1);
	}
}

function removeAll() {
	document.getElementById("window").textContent = "0";
	decimalAllowed = true;
}

function doMath() {
	let str = document.getElementById("window").textContent;

	if(symbols.includes(str.charAt(str.length-1))) {
		document.getElementById("window").textContent = str.substring(0, str.length - 1);
		document.getElementById("window").textContent = eval(document.getElementById("window").textContent);
	} 
	else {
		document.getElementById("window").textContent = eval(document.getElementById("window").textContent);
	}
}