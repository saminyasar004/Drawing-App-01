// selection all elements

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const btns = document.querySelectorAll(".btn");
const sizeEl = document.querySelector(".size");
const colorEl = document.querySelector(".color");

// variables

let size = 5;
let color = "#000";
let isPressed = false;
let x = undefined;
let y = undefined;
sizeEl.innerText = size;

// addeventlistener

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const moveX = e.offsetX;
    const moveY = e.offsetY;
    drawCircle(x, y);
    connectDots(x, y, moveX, moveY);
    x = moveX;
    y = moveY;
  }
});

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let operatorName = e.target.innerText;
    if (operatorName === "+") {
      increaseSize();
    } else if (operatorName === "-") {
      decreaseSize();
    }
  });
});

// functionality

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function connectDots(x, y, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function increaseSize() {
  size += 5;
  if (size > 50) {
    size = 50;
  }
  updateSize();
}

function decreaseSize() {
  size -= 5;
  if (size < 5) {
    size = 5;
  }
  updateSize();
}

function updateSize() {
  sizeEl.innerText = size;
}
