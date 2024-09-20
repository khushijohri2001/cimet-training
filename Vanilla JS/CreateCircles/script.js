const resetBtn = document.querySelector(".reset-btn");
const undoBtn = document.querySelector(".undo-btn");
const redoBtn = document.querySelector(".redo-btn");

let storedCircles = [];
let removedCircles = [];

document.addEventListener("click", (e) => storedCircleHandler(e));

resetBtn.addEventListener("click", () => resetHandler());
undoBtn.addEventListener("click", () => undoHandler());
resetBtn.addEventListener("click", () => redoHandler());

const storedCircleHandler = (e) => {
    storedCircles.push(e);
    
    storedCircles.forEach(() => createCircle(e))
}

const createCircle = (e) => {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    document.body.append(circle);

    let x = e.clientX;
    let y = e.clientY;
    
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    
}

const undoHandler = () => {
   let undoCircle = storedCircles.pop();
   removedCircles.push(undoCircle);
   console.log(removedCircles);
   
}
const redoHandler = () => {}

const resetHandler = () => {
storedCircles=[];
removedCircles=[];
}




