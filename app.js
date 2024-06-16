document.getElementById('pink').onclick = function() { changeColor('--pink'); };
document.getElementById('blue').onclick = function() { changeColor('--blue'); };
document.getElementById('green').onclick = function() { changeColor('--green'); };
document.getElementById('yellow').onclick = function() { changeColor('--yellow'); };
document.getElementById('purple').onclick = function() { changeColor('--purple'); };

function changeColor(color) {
    document.body.style.backgroundColor = (`var(${color})`);
}