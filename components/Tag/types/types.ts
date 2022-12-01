import { ReactNode } from "react";

export enum Size {
    Small = 'small',
    Medium = 'medium',
    Big = 'big'
}

export enum Color {
    Pink = 'pink',
    Green = 'green',
    Blue = 'blue',
    Red = 'red',
    Orange = 'orange'
}

export type ITag = {
    size: Size;
    children: ReactNode
}