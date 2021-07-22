/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Game_CharacterBase } from ".";
import { RPG } from "..";

declare abstract class Game_Character extends Game_CharacterBase {
  public static ROUTE_END: number;
  public static ROUTE_MOVE_DOWN: number;
  public static ROUTE_MOVE_LEFT: number;
  public static ROUTE_MOVE_RIGHT: number;
  public static ROUTE_MOVE_UP: number;
  public static ROUTE_MOVE_LOWER_L: number;
  public static ROUTE_MOVE_LOWER_R: number;
  public static ROUTE_MOVE_UPPER_L: number;
  public static ROUTE_MOVE_UPPER_R: number;
  public static ROUTE_MOVE_RANDOM: number;
  public static ROUTE_MOVE_TOWARD: number;
  public static ROUTE_MOVE_AWAY: number;
  public static ROUTE_MOVE_FORWARD: number;
  public static ROUTE_MOVE_BACKWARD: number;
  public static ROUTE_JUMP: number;
  public static ROUTE_WAIT: number;
  public static ROUTE_TURN_DOWN: number;
  public static ROUTE_TURN_LEFT: number;
  public static ROUTE_TURN_RIGHT: number;
  public static ROUTE_TURN_UP: number;
  public static ROUTE_TURN_90D_R: number;
  public static ROUTE_TURN_90D_L: number;
  public static ROUTE_TURN_180D: number;
  public static ROUTE_TURN_90D_R_L: number;
  public static ROUTE_TURN_RANDOM: number;
  public static ROUTE_TURN_TOWARD: number;
  public static ROUTE_TURN_AWAY: number;
  public static ROUTE_SWITCH_ON: number;
  public static ROUTE_SWITCH_OFF: number;
  public static ROUTE_CHANGE_SPEED: number;
  public static ROUTE_CHANGE_FREQ: number;
  public static ROUTE_WALK_ANIME_ON: number;
  public static ROUTE_WALK_ANIME_OFF: number;
  public static ROUTE_STEP_ANIME_ON: number;
  public static ROUTE_STEP_ANIME_OFF: number;
  public static ROUTE_DIR_FIX_ON: number;
  public static ROUTE_DIR_FIX_OFF: number;
  public static ROUTE_THROUGH_ON: number;
  public static ROUTE_THROUGH_OFF: number;
  public static ROUTE_TRANSPARENT_ON: number;
  public static ROUTE_TRANSPARENT_OFF: number;
  public static ROUTE_CHANGE_IMAGE: number;
  public static ROUTE_CHANGE_OPACITY: number;
  public static ROUTE_CHANGE_BLEND_MODE: number;
  public static ROUTE_PLAY_SE: number;
  public static ROUTE_SCRIPT: number;

  protected _moveRouteForcing: boolean;
  protected _moveRoute: any;
  protected _moveRouteIndex: number;
  protected _originalMoveRoute: any;
  protected _originalMoveRouteIndex: number;
  protected _waitCount: number;

  constructor();

  public initialize(): void;
  public initMembers(): void;
  public memorizeMoveRoute(): void;
  public restoreMoveRoute(): void;
  public isMoveRouteForcing(): boolean;
  public setMoveRoute(newMoveRoute: any): void;
  public forceMoveRoute(forcedMoveRoute: RPG.MoveRoute): void;
  public updateStop(): void;
  public updateRoutineMove(): void;
  public processMoveCommand(moveCommand: any): void;
  public deltaXFrom(x: number): number;
  public deltaYFrom(y: number): number;
  public moveRandom(): void;
  public moveTowardCharacter(character: Game_Character): void;
  public moveAwayFromCharacter(character: Game_Character): void;
  public turnTowardCharacter(character: Game_Character): void;
  public turnAwayFromCharacter(character: Game_Character): void;
  public turnTowardPlayer(): void;
  public turnAwayFromPlayer(): void;
  public moveTowardPlayer(): void;
  public moveAwayFromPlayer(): void;
  public moveForward(): void;
  public moveBackward(): void;
  public processRouteEnd(): void;
  public advanceMoveRouteIndex(): void;
  public turnRight90(): void;
  public turnLeft90(): void;
  public turn180(): void;
  public turnRightOrLeft90(): void;
  public turnRandom(): void;
  public swap(character: Game_Character): void;
  public findDirectionTo(targetX: number, targetY: number): number;
  public searchLimit(): number;
}

export { Game_Character };