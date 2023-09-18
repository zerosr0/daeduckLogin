const frame = document.querySelector("#frame");
const panel = frame.querySelectorAll(".panel li");

const len = panel.length - 1;
const interval = 4000;
let panelNum = 0;
let timer = null;


window.onload = () => {
  starRolling();
};

slideBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    activation(idx);
  });
});

function activation(index) {
  for (const el of panel) el.classList.remove('on');
  panel[index].classList.add('on');
  panelNum = index;
}

function rolling() {
  panelNum < len ? panelNum++ : (panelNum = 0);
  activation(panelNum);
}

function starRolling() {
  activation(panelNum);
  timer = setInterval(rolling, interval)
}