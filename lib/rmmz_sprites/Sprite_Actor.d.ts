/* eslint-disable @typescript-eslint/no-explicit-any */
import { MotionType, SpriteMotion, SpriteMotions, Sprite_Battler } from ".";
import { Game_Actor, Game_Battler, Sprite } from "..";

declare class Sprite_Actor extends Sprite_Battler {
  public static MOTIONS: SpriteMotions;
  protected _battlerName: string;
  protected _motion: SpriteMotion;
  protected _motionCount: number;
  protected _pattern: number;
  protected _mainSprite: Sprite
  protected _shadowSprite: Sprite;
  protected _weaponSprite: Sprite;
  protected _stateSprite: Sprite;
  protected _actor: Game_Actor;

  constructor();

  public initialize(battler: Game_Battler): void;
  public initMembers(): void;
  public mainSprite(): Sprite_Actor;
  public createMainSprite(): void;
  public createShadowSprite(): void;
  public createWeaponSprite(): void;
  public createStateSprite(): void;
  public setBattler(battler: Game_Battler): void;
  public moveToStartPosition(): void;
  public setActorHome(index: number): void;
  public update(): void;
  public updateShadow(): void;
  public updateMain(): void;
  public setupMotion(): void;
  public setupWeaponAnimation(): void;
  public startMotion(motionType: MotionType): void;
  public updateTargetPosition(): void;
  public shouldStepForward(): boolean;
  public updateBitmap(): void;
  public updateFrame(): void;
  public updateMove(): void;
  public updateMotion(): void;
  public updateMotionCount(): void;
  public motionSpeed(): number;
  public refreshMotion(): void;
  public startEntryMotion(): void;
  public stepForward(): void;
  public stepBack(): void;
  public retreat(): void;
  public onMoveEnd(): void;
  public damageOffsetX(): number;
  public damageOffsetY(): number;
}

export { Sprite_Actor };