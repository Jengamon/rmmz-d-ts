import * as PIXI from "pixi.js";

declare class WindowLayer extends PIXI.Container {

    constructor();
    
    public render(renderer: PIXI.Renderer): void;
    public update(): void;

}

declare global {
    interface Window {
        WindowLayer: new () => WindowLayer;
    }
}

export { WindowLayer };
