import { Sprite_Clickable, Sprite_Damage } from ".";
import { Sprite, Game_Battler } from "..";

declare class Sprite_Battler extends Sprite_Clickable {
  constructor(battler: Game_Battler);

  public override initialize(battler?: Game_Battler): void;
  public initMembers(): void;
  public setBattler(battler: Game_Battler): void;
  public checkBattler(battler: Game_Battler): boolean;
  public mainSprite(): Sprite;
  public setHome(x: number, y: number): void;
  public updateMain(): void;
  public updateBitmap(): void;
  public updateFrame(): void;
  public updateMove(): void;
  public updatePosition(): void;
  public updateDamagePopup(): void;
  public updateSelectionEffect(): void;
  public setupDamagePopup(): void;
  public createDamageSprite(): void;
  public destroyDamageSprite(sprite: Sprite_Damage): void;
  public damageOffsetX(): number;
  public damageOffsetY(): number;
  public startMove(x: number, y: number, duration: number): void;
  public onMoveEnd(): void;
  public isEffecting(): boolean;
  public isMoving(): boolean;
  public inHomePosition(): boolean;
  public onMouseEnter(): void;
  public onMouseExit(): void;
  public onPress(): void;
  public onClick(): void;
}

export { Sprite_Battler };
