import { instruments } from "./utils/instruments.js";

const rightHalfPage = document.querySelector("#right");

const showInstruments = () => {
    instruments.forEach(({ name, imgSrc, sound, key }) => {
        const createImageWrapper = document.createElement("div");
        createImageWrapper.classList.add("box")

        const createImage = document.createElement("img");
        createImage.src = imgSrc;

        rightHalfPage.appendChild(createImageWrapper).appendChild(createImage)

        createImageWrapper.addEventListener("click", () => playSound(sound));
        document.addEventListener("keydown", (e) => playSoundOnKeyPress(e, sound, key, createImageWrapper));


    })
}

const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();

}

const playSoundOnKeyPress = (e, sound, key, createImageWrapper) => {
    if (e.key === key) {
        playSound(sound);
        displayPressedKey(e, createImageWrapper);
    }

}

const displayPressedKey = (e, createImageWrapper) => {
    const createKeyDiv = document.createElement("div");
    createKeyDiv.innerText = e.key;
    createKeyDiv.classList.add("key")
    createImageWrapper.appendChild(createKeyDiv);
    createImageWrapper.classList.add("keypressBox")

    setTimeout(() => {
        createKeyDiv.remove();
        createImageWrapper.classList.remove("keypressBox")
    }, 1500);
}

showInstruments();
