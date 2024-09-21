import { colors } from "./utils/colors.js";

const resetBtn = document.querySelector(".reset-btn");
const undoBtn = document.querySelector(".undo-btn");
const redoBtn = document.querySelector(".redo-btn");

let storedCircles = [];
let removedCircles = [];
let circleCount = 1;

document.addEventListener("click", (e) => storingCircles(e));
resetBtn.addEventListener("click", (e) => resetHandler(e));
undoBtn.addEventListener("click", (e) => undoHandler(e));
redoBtn.addEventListener("click", (e) => redoHandler(e));
window.addEventListener("load", () => {
  if (storedCircles.length <= 0) {
    resetBtn.disabled = true;
    undoBtn.disabled = true;
    redoBtn.disabled = true;
  }
});

const storingCircles = (e) => {
  resetBtn.disabled = false;
  undoBtn.disabled = false;

  createCircle(e);
};

const createCircle = (e) => {
  const circle = document.createElement("div");
  circle.setAttribute("id", "circle" + circleCount);
  circle.classList.add("circle");
  circle.style.backgroundColor = randomColorGenerator(0, colors.length);
  document.body.append(circle);

  let x = e.clientX;
  let y = e.clientY;

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  storedCircles.push(circle);

  circleCount++;
};

const deleteCircles = () => {
  const lastCircleId = storedCircles[storedCircles.length - 1].id;
  const lastCircle = document.querySelector(`#${lastCircleId}`);

  lastCircle.remove();
  circleCount--;
  return storedCircles.pop();
};

const undoHandler = (e) => {
  e.stopPropagation();

  if (storedCircles.length > 0) {
    let undoCircle = deleteCircles();
    removedCircles.push(undoCircle);
    redoBtn.disabled = false;

    if (undoCircle.id === "circle1") {
      undoBtn.disabled = true;
    }
  }
};

const redoHandler = (e) => {
  e.stopPropagation();

  if (removedCircles.length > 0) {
    let redoCircle = removedCircles.pop();
    storedCircles.push(redoCircle);
    document.body.append(redoCircle);
    undoBtn.disabled = false;

    if (removedCircles.length === 0) {
      redoBtn.disabled = true;
    }
  }
};

const resetHandler = (e) => {
  e.stopPropagation();

  while (storedCircles.length > 0) {
    deleteCircles();
  }

  removedCircles = [];

  resetBtn.disabled = true;
  undoBtn.disabled = true;
  redoBtn.disabled = true;
};

const randomColorGenerator = (min, max) => {
  const randomIndex = Math.floor(Math.random() * (max - min) + min);
  return colors[randomIndex];
};
