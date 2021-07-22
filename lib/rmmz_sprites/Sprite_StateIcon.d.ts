import { Game_Battler, Sprite } from "..";

declare class Sprite_StateIcon extends Sprite {
  protected _battler: Game_Battler;
  protected _iconIndex: number;
  protected _animationCount: number;
  protected _animationIndex: number;

  constructor();

  public initialize(): void;
  public initMembers(): void;
  public loadBitmap(): void;
  public setup(battler: Game_Battler): void;
  public update(): void;
  public animationWait(): number;
  public updateIcon(): void;
  public shouldDisplay(): boolean;
  public updateFrame(): void;
}

export { Sprite_StateIcon };