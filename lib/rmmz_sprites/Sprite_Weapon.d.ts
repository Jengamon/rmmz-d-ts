import { Sprite } from "..";

declare class Sprite_Weapon extends Sprite {
  protected _weaponImageId: number;
  protected _animationCount: number;
  protected _pattern: number;

  constructor();

  public initialize(): void;
  public initMembers(): void;
  public setup(weaponImageId: number): void;
  public update(): void;
  public animationWait(): number;
  public updatePattern(): void;
  public loadBitmap(): void;
  public updateFrame(): void;
  public isPlaying(): boolean;
}

export { Sprite_Weapon };