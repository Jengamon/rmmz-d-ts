import * as PIXI from "pixi.js";

declare class Rectangle extends PIXI.Rectangle {
    constructor(x: number, y: number, width: number, height: number);
}

declare global {
    interface Window {
        Rectangle: new (x: number, y: number, width: number, height: number) => Rectangle;
    }
}

export { Rectangle };