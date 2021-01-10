function up() {
	document.getElementById('curtain').style.bottom = '100%';
	document.getElementById('curtain').style.transition = '1s';
}

function light() {
	document.getElementById('light').style.transition = '0.2s';
	document.getElementById('light').classList.toggle('light');
	document.getElementById('girl').style.transition = '0.2s';
	document.getElementById('girl').classList.toggle('appear');
	document.getElementById('hat').style.transition = '0.2s';
	document.getElementById('hat').classList.toggle('appear');
	document.getElementById('rabbit').style.transition = '0.2s';
	document.getElementById('rabbit').classList.toggle('appear');
	document.getElementById('dove').style.transition = '0.2s';
	document.getElementById('dove').classList.toggle('appear');
	document.getElementById('lampSwitcher').classList.toggle('up');
	document.getElementById('lampSwitcher').style.transition = '0.2s';
}


function replace() {
	document.getElementById('rabbit').style.transition = '0.5s';
	document.getElementById('rabbit').classList.toggle('replace');
	document.getElementById('dove').style.transition = '0.5s';
	document.getElementById('dove').classList.toggle('replace');
}

