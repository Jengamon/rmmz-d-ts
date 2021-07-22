import { Sprite, Sprite_Character } from "..";

declare class Sprite_Balloon extends Sprite {
  protected _target: Sprite_Character;
  protected _balloonId: number;
  protected _duration: number;

  constructor();

  public initialize(): void;
  public initMembers(): void;
  public loadBitmap(): void;
  public setup(targetSprite: Sprite_Character, balloonId: number): void;
  public update(): void;
  public updatePosition(): void;
  public updateFrame(): void;
  public speed(): number;
  public waitTime(): number;
  public frameIndex(): number;
  public isPlaying(): boolean;
}

export { Sprite_Balloon };