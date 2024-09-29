import { instruments } from "./utils/instruments.js";

const rightHalfPage = document.querySelector("#right");

const showInstruments = () => {
  instruments.forEach(({ name, imgSrc, sound, key }) => {
    const createImageWrapper = document.createElement("div");
    createImageWrapper.classList.add("box");

    const nameBoxId = name + "box";
    createImageWrapper.id = nameBoxId;

    const createImage = document.createElement("img");
    createImage.src = imgSrc;
    createImage.id = name;

    rightHalfPage.appendChild(createImageWrapper).appendChild(createImage);

    // Event delegation
    rightHalfPage.addEventListener("click", (e) => {
      if (e.target.id === name || e.target.id === nameBoxId) {
        playSound(sound);
      }
    });

    document.addEventListener("keydown", (e) =>
      playSoundOnKeyPress(e, sound, key, nameBoxId)
    );
  });
};

const playSound = (sound) => {
  const audio = new Audio(sound);
  audio.play();
};

const playSoundOnKeyPress = (e, sound, key, nameBoxId) => {
  if (e.key === key) {
    playSound(sound);
    displayPressedKey(e, nameBoxId);
  }
};

const displayPressedKey = (e, nameBoxId) => {
  const createKeyDiv = document.createElement("div");
  createKeyDiv.innerText = e.key;
  createKeyDiv.classList.add("key");

  const imageWrapper = document.querySelector(`#${nameBoxId}`);

  imageWrapper.appendChild(createKeyDiv);
  imageWrapper.classList.add("keypressBox");

  setTimeout(() => {
    createKeyDiv.remove();
    imageWrapper.classList.remove("keypressBox");
  }, 1500);
};

showInstruments();
