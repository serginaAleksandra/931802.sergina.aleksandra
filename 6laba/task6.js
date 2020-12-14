document.getElementById('left').onclick = function() {
	document.getElementById('blue').classList.add('big');
	document.getElementById('green').classList.add('small');
	document.getElementById('green').classList.remove('big');
	document.getElementById('blue').classList.remove('small');
}	

document.getElementById('right').onclick = function() {
	document.getElementById('green').classList.add('big');
	document.getElementById('blue').classList.add('small');
	document.getElementById('blue').classList.remove('big');
	document.getElementById('green').classList.remove('small');

}

document.getElementById('both').onclick = function() {
	document.getElementById('green').classList.remove('big');
	document.getElementById('blue').classList.remove('small');
	document.getElementById('blue').classList.remove('big');
	document.getElementById('green').classList.remove('small');

}
