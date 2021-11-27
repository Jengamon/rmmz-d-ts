import * as PIXI from "pixi.js";

import { Point } from ".";

declare class Weather extends PIXI.Container {

    public origin: Point;
    public power: number;
    public type: string;

    constructor();

    public update(): void;
    public destroy(): void;
}

declare global {
    interface Window {
        Weather: new () => Weather;
    }
}

export { Weather };