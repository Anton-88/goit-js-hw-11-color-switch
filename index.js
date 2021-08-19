import { bgColors } from './src/bg-colors.js';

const refs = {
    startBtnRef: document.querySelector('button[data-action="start"]'),
    stopBtnRef: document.querySelector('button[data-action="stop"]'),
    bodyBgColor: document.body,
};
const DelayTime = 1000;
let intervalID = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function setRandomBGColor() {
    const randomNum = randomIntegerFromInterval(0, bgColors.length - 1);
    refs.bodyBgColor.setAttribute('style', `background-color:${bgColors[randomNum]}`);
};

function colorChange() {
    intervalID = setInterval(() => {
        setRandomBGColor()
    }, DelayTime);

    if (intervalID) {
        refs.startBtnRef.setAttribute('disabled', true);
    }

    console.log('intervalID :>> ', intervalID);
};

function stopColorChange() {
    clearInterval(intervalID);
    refs.startBtnRef.removeAttribute('disabled');
};

refs.startBtnRef.addEventListener('click', colorChange);
refs.stopBtnRef.addEventListener('click', stopColorChange);
// console.log('bgColors :>> ', bgColors);