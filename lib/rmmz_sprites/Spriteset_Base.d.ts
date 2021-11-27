/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Filter } from "pixi.js";
import { Sprite_Animation, Sprite_AnimationMV, Sprite_Timer } from ".";
import { Game_Battler, RPG, Sprite, Rectangle, ScreenSprite, ColorFilter } from "..";

declare class Spriteset_Base<T, S> extends Sprite {
  protected _animationSprites: Sprite_Animation[] | Sprite_AnimationMV[];
  protected _baseSprite: Sprite;
  protected _blackScreen: ScreenSprite;
  protected _baseColorFilter: ColorFilter;
  protected _pictureContainer: Sprite;
  protected _timerSprite: Sprite_Timer;
  public filters: Filter[];

  constructor();

  public initialize(): void;
  public destroy(options: any): void;
  public loadSystemImages(): void;
  public createLowerLayer(): void;
  public createUpperLayer(): void;
  public update(): void;
  public createBaseSprite(): void;
  public createBaseFilters(): void;
  public createPictures(): void;
  public pictureContainerRect(): Rectangle;
  public createTimer(): void;
  public createOverallFilters(): void;
  public updateBaseFilters(): void;
  public updateOverallFilters(): void;
  public updatePosition(): void;
  public findTargetSprite(target: T): S;
  public updateAnimations(): void;
  public processAnimationRequests(): void;
  public createAnimation(): void;
  public createAnimationSprite(): void;
  public isMVAnimation(animation: RPG.DataAnimation): boolean;
  public makeTargetSprites(targets: T[]): S[];
  public lastAnimationSprite(): Sprite_Animation | Sprite_AnimationMV;
  public isAnimationForEach(animation: RPG.DataAnimation): boolean;
  public animationBaseDelay(): number;
  public animationNextDelay(): number;
  public animationShouldMirror(target: Game_Battler): boolean;
  public removeAnimation(sprite: Sprite_Animation | Sprite_AnimationMV): void;
  public removeAllAnimations(): void;
  public isAnimationPlaying(): boolean;
}

export { Spriteset_Base };