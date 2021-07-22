/* eslint-disable @typescript-eslint/no-explicit-any */
import { Point } from "../rmmz_core";
import { Game_Actor } from "./";
import { Game_Battler } from "./";
import { Game_Enemy } from "./";
import WaitMode from "./models/WaitMode";

//? TODO: come back to address the "any" types across this file.
//? TODO: come back to address the "commands" for this file.

/**
 * A class responsible for managing the interactions between the RMMZ GUI and the engine.
 */
declare class Game_Interpreter {
  protected _depth: number;
  protected _branch: any;
  protected _indent: number;
  protected _frameCount: number;
  protected _freezeChecker: number;
  protected _mapId: number;
  protected _eventId: number;
  protected _list: any[];
  protected _index: number;
  protected _waitCount: number;
  protected _waitMode: WaitMode;
  protected _comments: string;
  protected _characterId: number;
  protected _childInterpreter: any;

  constructor(...arguments: never[]);

  public initialize(depth: number): void;
  public checkOverflow(): void;
  public clear(): void;
  public setup(list: any[], eventId: number): void;
  public loadImages(): void;
  public eventId(): number;
  public isOnCurrentMap(): boolean;
  public setupReservedCommonEvent(): boolean;
  public isRunning(): boolean;
  public update(): void;
  public updateChild(): boolean;
  public updateWait(): boolean;
  public updateWaitCount(): boolean;
  public updateWaitMode(): void;
  public setWaitMode(newWaitMode: WaitMode): void;
  public wait(waitCount: number): void;
  public fadeSpeed(): number;
  public executeCommand(): boolean;
  public checkFreeze(): boolean;
  public terminate(): void;
  public skipBranch(): void;
  public currentCommand(): any;
  public nextEventCode(): number;
  public iterateActorId(actorId: number, callback: (actor: Game_Actor) => void): void;
  public iterateActorEx(
    oneActor: number,
    actorOrVariableId: number,
    callback: (actor: Game_Actor) => void): void;
  public iterateActorIndex(
    partyIndex: number,
    callback: (actor: Game_Actor) => void): void;
  public iterateEnemyIndex(
    enemyIndex: number,
    callback: (enemy: Game_Enemy) => void): void;
  public iterateBattler(
    forEnemies: number,
    battlerId: number,
    callback: (battler: Game_Battler) => void): void;
  //! TODO: build out game_character and game_characterbase- for this method.
  public character(eventId: number): any;
  public operateValue(operation: number, operandType: number, operand: number): number;
  public changeHp(target: Game_Actor, value: number, allowDeath: boolean): void;

  public command101(params: any[]): boolean;
  public command102(params: any[]): boolean;
  public setupChoices(params: any[]): void;
  public command402(params: any[]): boolean;
  public command403(params: any[]): boolean;
  public command103(params: any[]): boolean;
  public setupNumInput(params: any[]): void;
  public command104(params: any[]): boolean;
  public setupItemChoice(params: any[]): void;
  public command105(params: any[]): boolean;
  public command108(params: any[]): boolean;
  public command111(params: any[]): boolean;
  public command411(): boolean;
  public command112(): boolean;
  public command413(): boolean;
  public command113(): boolean;
  public command115(): boolean;
  public command117(params: any[]): boolean;
  public setupChild(list: any[], eventId: number): void;
  public command118(): boolean;
  public command119(params: any[]): boolean;
  public jumpTo(index: number): void;
  public command121(params: any[]): boolean;
  public command122(params: any[]): boolean;
  public gameDataOperand(type: number, dataId: number, dataValue: number): number;
  public operateVariable(variableId: number, operationType: number, value: number): void;
  public command123(params: any[]): boolean;
  public command124(params: any[]): boolean;
  public command125(params: any[]): boolean;
  public command126(params: any[]): boolean;
  public command127(params: any[]): boolean;
  public command128(params: any[]): boolean;
  public command129(params: any[]): boolean;
  public command132(params: any[]): boolean;
  public command133(params: any[]): boolean;
  public command134(params: any[]): boolean;
  public command135(params: any[]): boolean;
  public command136(params: any[]): boolean;
  public command137(params: any[]): boolean;
  public command138(params: any[]): boolean;
  public command139(params: any[]): boolean;
  public command140(params: any[]): boolean;

  public command201(params: any[]): boolean;
  public command202(params: any[]): boolean;
  public command203(params: any[]): boolean;
  public command204(params: any[]): boolean;
  public command205(params: any[]): boolean;
  public command206(params: any[]): boolean;
  public command211(params: any[]): boolean;
  public command212(params: any[]): boolean;
  public command213(params: any[]): boolean;
  public command214(): boolean;
  public command216(params: any[]): boolean;
  public command217(): boolean;
  public command221(): boolean;
  public command222(): boolean;
  public command223(params: any[]): boolean;
  public command224(params: any[]): boolean;
  public command225(params: any[]): boolean;
  public command230(params: any[]): boolean;
  public command231(params: any[]): boolean;
  public command232(params: any[]): boolean;
  public picturePoint(params: any[]): Point;
  public command233(params: any[]): boolean;
  public command234(params: any[]): boolean;
  public command235(params: any[]): boolean;
  public command236(params: any[]): boolean;
  public command241(params: any[]): boolean;
  public command242(params: any[]): boolean;
  public command243(): boolean;
  public command244(): boolean;
  public command245(params: any[]): boolean;
  public command246(params: any[]): boolean;
  public command249(params: any[]): boolean;
  public command250(params: any[]): boolean;
  public command251(): boolean;
  public command261(params: any[]): boolean;
  public videoFileExt(): string;
  public command281(params: any[]): boolean;
  public command282(params: any[]): boolean;
  public command283(params: any[]): boolean;
  public command284(params: any[]): boolean;
  public command285(params: any[]): boolean;

  public command301(params: any[]): boolean;
  public command601(): boolean;
  public command602(): boolean;
  public command603(): boolean;
  public command302(params: any[]): boolean;
  public command303(params: any[]): boolean;
  public command311(params: any[]): boolean;
  public command312(params: any[]): boolean;
  public command326(params: any[]): boolean;
  public command313(params: any[]): boolean;
  public command314(params: any[]): boolean;
  public command315(params: any[]): boolean;
  public command316(params: any[]): boolean;
  public command317(params: any[]): boolean;
  public command318(params: any[]): boolean;
  public command319(params: any[]): boolean;
  public command320(params: any[]): boolean;
  public command321(params: any[]): boolean;
  public command322(params: any[]): boolean;
  public command323(params: any[]): boolean;
  public command324(params: any[]): boolean;
  public command325(params: any[]): boolean;
  public command331(params: any[]): boolean;
  public command332(params: any[]): boolean;
  public command342(params: any[]): boolean;
  public command333(params: any[]): boolean;
  public command334(params: any[]): boolean;
  public command335(params: any[]): boolean;
  public command336(params: any[]): boolean;
  public command337(params: any[]): boolean;
  public command339(params: any[]): boolean;
  public command340(): boolean;
  public command351(): boolean;
  public command352(): boolean;
  public command353(): boolean;
  public command354(): boolean;
  public command355(): boolean;
  public command356(params: any[]): boolean;
  public pluginCommand(): void;
  public command357(params: any[]): boolean;
}

export { Game_Interpreter };