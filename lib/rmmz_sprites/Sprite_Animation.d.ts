/* eslint-disable @typescript-eslint/no-explicit-any */
import * as PIXI from "pixi.js";
import { Sprite_AnimationMV, Sprite_Character } from ".";
import { Game_Battler, Point, RGBA, RPG, Sprite } from "..";

declare class Sprite_Animation extends Sprite {
  protected _targets: Sprite_Character[];
  protected _animation: RPG.DataAnimation;
  protected _mirror: boolean;
  protected _delay: number;
  protected _previous: RPG.DataAnimation;
  protected _effect: any;
  protected _handle: any;
  protected _playing: boolean;
  protected _started: boolean;
  protected _frameIndex: number;
  protected _maxTimingFrames: number;
  protected _flashColor: RGBA;
  protected _flashDuration: number;
  protected _viewportSize: number;
  protected _originalViewport: any;

  constructor();

  public initialize(): void;
  public initMembers(): void;
  public setup(
    targets: Game_Battler[],
    animation: RPG.DataAnimation,
    mirror: boolean,
    delay: number,
    previous: Sprite_Animation | Sprite_AnimationMV
  ): void;
  public canStart(): boolean;
  public shouldWaitForPrevious(): boolean;
  public updateEffectGeometry(): void;
  public updateMain(): void;
  public processSoundTimings(): void;
  public processFlashTimings(): void;
  public checkEnd(): void;
  public updateFlash(): void;
  public isPlaying(): boolean;
  public setRotation(x: number, y: number, z: number): void;
  public setProjectionMatrix(renderer: PIXI.Renderer): void;
  public setCameraMatrix(renderer: PIXI.Renderer): void;
  public setViewport(renderer: PIXI.Renderer): void;
  public targetPosition(renderer: PIXI.Renderer): Point;
  public targetSpritePosition(sprite: Sprite): Point;
  public saveViewport(renderer: PIXI.Renderer): void;
  public resetViewport(renderer: PIXI.Renderer): void;
  public onBeforeRender(renderer: PIXI.Renderer): void;
  public onAfterRender(renderer: PIXI.Renderer): void;
}

export { Sprite_Animation };
