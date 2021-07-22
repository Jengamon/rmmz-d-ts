/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Sprite } from "..";

declare class Sprite_Destination extends Sprite {
  protected _frameCount: number;

  constructor();

  public initialize(): void;
  public destroy(options: any): void;
  public update(): void;
  public createBitmap(): void;
  public updatePosition(): void;
  public updateAnimation(): void;
}

export { Sprite_Destination };