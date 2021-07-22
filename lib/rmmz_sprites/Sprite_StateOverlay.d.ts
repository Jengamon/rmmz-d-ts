import { Game_Battler, Sprite } from "..";

declare class Sprite_StateOverlay extends Sprite {
  protected _battler: Game_Battler;
  protected _overlayIndex: number;
  protected _animationCount: number;
  protected _pattern: number;

  constructor();

  public initialize(): void;
  public initMembers(): void;
  public loadBitmap(): void;
  public setup(battler: Game_Battler): void;
  public update(): void;
  public animationWait(): number;
  public updatePattern(): void;
  public updateFrame(): void;
}

export { Sprite_StateOverlay };