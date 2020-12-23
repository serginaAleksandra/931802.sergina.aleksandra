function addSquare() {
	let num = document.getElementById("number").value;
	for (let i = 0; i < num; i++) {
		let newSquare = document.createElement("div");
		document.getElementById("content").appendChild(newSquare);
		newSquare.classList.add("square");

		let randomOrdinate = Math.floor(Math.random() * 525);
		let randomAbscissa = Math.floor(Math.random() * 1247);
		let randomSize = Math.floor(Math.random() * Math.min(525 - randomOrdinate, 1247 - randomAbscissa));

		newSquare.style.marginTop = `${randomOrdinate}px`;
		newSquare.style.marginLeft = `${randomAbscissa}px`;
		newSquare.style.width = `${randomSize}px`;
		newSquare.style.height = `${randomSize}px`;

		newSquare.onclick = function() {
		newSquare.style.background = "yellow";
		}

		newSquare.ondblclick = function() {
		newSquare.remove();
		}
		
	}

}

function addTriangle() {
	let num = document.getElementById("number").value;
	for (let i = 0; i < num; i++) {
		let newTriangle = document.createElement("div");
		document.getElementById("content").appendChild(newTriangle);
		newTriangle.classList.add("triangle");

		let randomOrdinate = Math.floor(Math.random() * 525);
		let randomAbscissa = Math.floor(Math.random() * 1247);
		let randomSize = Math.floor(Math.random() * Math.min((525 - randomOrdinate)/4, (1247 - randomAbscissa)/4));

		newTriangle.style.marginTop = `${randomOrdinate}px`;
		newTriangle.style.marginLeft = `${randomAbscissa}px`;
		newTriangle.style.borderLeft = `${randomSize}px solid transparent`;
		newTriangle.style.borderRight = `${randomSize}px solid transparent`;
		newTriangle.style.borderBottom = `${randomSize * 2}px solid blue`;

		newTriangle.onclick = function() {
		newTriangle.style.borderBottomColor = "yellow"; 
		}

		newTriangle.ondblclick = function() {
		newTriangle.remove();
		}
	}

}

function addCircle() {
	let num = document.getElementById("number").value;
	for (let i = 0; i < num; i++) {
		let newCircle = document.createElement("div");
		document.getElementById("content").appendChild(newCircle);
		newCircle.classList.add("circle");

		let randomOrdinate = Math.floor(Math.random() * 525);
		let randomAbscissa = Math.floor(Math.random() * 1247);
		let randomSize = Math.floor(Math.random() * Math.min(525 - randomOrdinate, 1247 - randomAbscissa));

		newCircle.style.marginTop = `${randomOrdinate}px`;
		newCircle.style.marginLeft = `${randomAbscissa}px`;
		newCircle.style.width = `${randomSize}px`;
		newCircle.style.height = `${randomSize}px`;

		newCircle.onclick = function() {
		newCircle.style.background = "yellow";
		}

		newCircle.ondblclick = function() {
		newCircle.remove();
		}
	}

}

