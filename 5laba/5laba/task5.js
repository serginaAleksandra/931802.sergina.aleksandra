function open_open_(e){
    document.getElementById(e).style.display = 'block';
    document.getElementById('background').style.display = 'block';
};


document.getElementById('background').addEventListener('click', function () {
    document.getElementById('pop_up1').style.display = 'none';
    document.getElementById('pop_up2').style.display = 'none';
    document.getElementById('pop_up3').style.display = 'none';
    document.getElementById('background').style.display = 'none';})
