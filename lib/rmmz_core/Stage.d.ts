import * as PIXI from "pixi.js";

declare class Stage extends PIXI.Container {
    constructor();

    public destroy(): void;
}

declare global {
    interface Window {
        Stage: new () => Stage;
    }
}

export { Stage };
