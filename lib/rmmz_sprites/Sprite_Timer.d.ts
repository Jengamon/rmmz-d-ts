/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Sprite } from "..";

declare class Sprite_Timer extends Sprite {
  protected _seconds: number;

  constructor();

  public initialize(): void;
  public destroy(options: any): void;
  public createBitmap(): void;
  public fontFace(): string;
  public fontSize(): number;
  public update(): void;
  public updateBitmap(): void;
  public redraw(): void;
  public timerText(): string;
  public updatePosition(): void;
  public updateVisibility(): void;
}

export { Sprite_Timer };