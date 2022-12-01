import { Color } from "../components/Tag/types/types";

const arrayWithColors = [
    Color.Blue, 
    Color.Red, 
    Color.Green, 
    Color.Pink, 
    Color.Red
]

export const randomColorName = (): Color => {
    return arrayWithColors[Math.floor(Math.random() * arrayWithColors.length)];
}