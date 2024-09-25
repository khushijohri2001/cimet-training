import { colors } from "./colors"

export const randomColorGenerator = () => {
    const min = 0;
    const max = colors.length
   const randomIndex = Math.floor(Math.random() * (max - min) + min);
   return randomIndex
}