import { gameData } from "./gameData"

const duplicateData = (data) => [...data, ...data]

export const shuffleData = () => {
    const data = duplicateData(gameData);
    
    for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }

      return data
    
}
