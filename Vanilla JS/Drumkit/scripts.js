import { instruments } from "./utils/instruments.js";

const rightHalfPage = document.querySelector("#right");


const showInstruments = () => {
    instruments.forEach(({name, imgSrc, sound, key}) => {
        const createImageWrapper = document.createElement("div");
        createImageWrapper.classList.add("box")

        const createImage = document.createElement("img");
        createImage.src = imgSrc;

        rightHalfPage.appendChild(createImageWrapper).appendChild(createImage)

        createImage.addEventListener("click", () => playSound(imgSrc, sound, key))
        
    })
}

const playSound = (sound, key) => {
    const audio = new Audio(sound);
    audio.play();
}

const playSoundOnKeyPress = (e) => {// error
    console.log(e.key);

}

window.addEventListener("onKeyDown", (e) => playSoundOnKeyPress(e))

showInstruments();
