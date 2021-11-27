import * as PIXI from "pixi.js";

declare class Point extends PIXI.Point {
    constructor(x: number, y: number);
}

declare global {
    interface Window {
        Point: new (x: number, y: number) => Point;
    }
}

export { Point };
