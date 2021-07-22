import { Game_Character } from ".";
import { RPG } from '..';

declare class Game_Event extends Game_Character {
  protected _mapId: number;
  protected _eventId: number;
  protected _moveType: number;
  protected _trigger: number;
  protected _starting: boolean;
  protected _erased: boolean;
  protected _pageIndex: number;
  protected _originalPattern: number;
  protected _originalDirection: number;
  protected _prelockDirection: number;
  protected _locked: boolean;

  constructor();

  public initialize(): void;
  public initMembers(): void;
  public eventId(): number;
  public event(): RPG.Event;
  public page(): RPG.Page;
  public list(): RPG.List;
  public isCollidedWithCharacters(x: number, y: number): boolean;
  public isCollidedWithEvents(x: number, y: number): boolean;
  public isCollidedWithPlayerCharacters(x: number, y: number): boolean;
  public lock(): void;
  public unlock(): void;
  public updateStop(): void;
  public updateSelfMovement(): void;
  public stopCountThreshold(): number;
  public moveTypeRandom(): void;
  public moveTypeTowardPlayer(): void;
  public isNearThePlayer(): boolean;
  public moveTypeCustom(): void;
  public isStarting(): boolean;
  public clearStartingFlag(): void;
  public isTriggerIn(triggers: number[]): boolean;
  public start(): void;
  public erase(): void;
  public refresh(): void;
  public findProperPageIndex(): number;
  public meetsConditions(page: RPG.Page): boolean;
  public setupPage(): void;
  public clearPageSettings(): void;
  public setupPageSettings(): void;
  public isOriginalPattern(): boolean;
  public resetPattern(): void;
  public checkEventTriggerTouch(x: number, y: number): void;
  public checkEventTriggerAuto(): void;
  public update(): void;
  public updateParallel(): void;
  public locate(x: number, y: number): void;
  public forceMoveRoute(moveRoute: RPG.MoveRoute): void;
}

export { Game_Event };