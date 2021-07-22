/* eslint-disable @typescript-eslint/no-explicit-any */
import { EffectType, Sprite_Battler } from ".";
import { Game_Battler, Sprite } from "..";

declare class Sprite_Enemy extends Sprite_Battler {
  protected _enemy: Game_Battler;
  protected _appeared: boolean;
  protected _battlerName: string;
  protected _battlerHue: number;
  protected _effectType: any;
  protected _effectDuration: number;
  protected _shake: number;
  protected _stateIconSprite: Sprite;

  constructor();

  public initialize(battler?: Game_Battler): void;
  public initMembers(): void;
  public createStateIconSprite(): void;
  public setBattler(battler: Game_Battler): void;
  public update(): void;
  public updateBitmap(): void;
  public loadBitmap(name: string): void;
  public setHue(newHue: number): void;
  public updateFrame(): void;
  public updatePosition(): void;
  public updateStateSprite(): void;
  public initVisibility(): void;
  public setupEffect(): void;
  public startEffect(effectType: EffectType): void;
  public startAppear(): void;
  public startDisappear(): void;
  public startWhiten(): void;
  public startBlink(): void;
  public startCollapse(): void;
  public startBossCollapse(): void;
  public startInstantCollapse(): void;
  public updateEffect(): void;
  public isEffecting(): boolean;
  public revertToNormal(): void;
  public updateWhiten(): void;
  public updateBlink(): void;
  public updateAppear(): void;
  public updateDisappear(): void;
  public updateCollapse(): void;
  public updateBossCollapse(): void;
  public updateInstantCollapse(): void;
  public damageOffsetX(): number;
  public damageOffsetY(): number;
}

export { Sprite_Enemy };