class SwitchButton {
    turnOn() {
        return '<img src="https://www.w3schools.com/js/pic_bulbon.gif">'
    }

    turnOff() {
        return '<img src="https://www.w3schools.com/js/pic_bulboff.gif">'
    }

}

let lamp = new SwitchButton();
document.getElementById('light').innerHTML=lamp.turnOff();

function onLight() {
    document.getElementById('light').innerHTML= lamp.turnOn();
}

function offLight() {
    document.getElementById('light').innerHTML = lamp.turnOff();
}

function inp() {
    document.getElementById('on').style.background = 'yellow';
}

function outp() {
    document.getElementById('on').style.background = 'lightgrey';
}

function input() {
    document.getElementById('off').style.background = 'yellow';
}

function output() {
    document.getElementById('off').style.background = 'lightgrey';
}