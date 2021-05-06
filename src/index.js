// import './sass/main.scss';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

let min = 0;
let max = colors.length - 1;
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const BtnStartEl = document.querySelector('[data-action="start"]');
const BtnStopEl = document.querySelector('[data-action="stop"]');

BtnStartEl.addEventListener('click', ChengeBodyColor);
BtnStopEl.addEventListener('click', StopChengeBodyColor);

console.log(BtnStopEl);

function ChengeBodyColor() {
    BtnStartEl.disabled = true;
    intervalId = setInterval(() => {
        const SelectedColor = colors[randomIntegerFromInterval(min, max)];
        document.body.style.backgroundColor = SelectedColor;
        console.log(SelectedColor)
    }, 1000);

};


function StopChengeBodyColor() {
    BtnStartEl.disabled = false;
    clearInterval(intervalId);

}
// ChengeBodyColor();

