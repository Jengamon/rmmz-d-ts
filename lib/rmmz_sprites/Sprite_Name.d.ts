/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Game_Battler, Sprite } from "..";

declare class Sprite_Name extends Sprite {
  protected _battler: Game_Battler;
  protected _name: string;
  protected _textColor: string;

  constructor();

  public initialize(): void;
  public initMembers(): void;
  public destroy(options: any): void;
  public createBitmap(): void;
  public bitmapWidth(): number;
  public bitmapHeight(): number;
  public fontFace(): string;
  public fontSize(): number;
  public setup(battler: Game_Battler): void;
  public update(): void;
  public updateBitmap(): void;
  // public name(): string; // HELP: defined as property in interface of DisplayObject within PIXI code.
  public textColor(): string;
  public outlineColor(): string;
  public outlineWidth(): number;
  public redraw(): void;
  public setupFont(): void;
}

export { Sprite_Name };