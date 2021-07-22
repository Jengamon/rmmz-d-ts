/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Game_Character } from ".";
import VehicleType from "./models/VehicleType";

declare class Game_Player extends Game_Character {
  protected _vehicleType: string;
  protected _vehicleGettingOn: boolean;
  protected _vehicleGettingOff: boolean;
  protected _dashing: boolean;
  protected _needsMapReload: boolean;
  protected _transferring: boolean;
  protected _newMapId: number;
  protected _newX: number;
  protected _newY: number;
  protected _newDirection: number;
  protected _fadeType: number;
  protected _followers: any; //Game_Followers;
  protected _encounterCount: number;

  constructor();

  public initialize(): void;
  public initMembers(): void;
  public clearTransferInfo(): void;
  public followers(): any; //Game_Followers;
  public refresh(): void;
  public isStopping(): boolean;
  public reserveTransfer(
    mapId: number,
    x: number,
    y: number,
    d: number,
    fadeType: number): void;
  public setupForNewGame(): void;
  public requestMapReload(): void;
  public isTransferring(): boolean;
  public newMapId(): number;
  public fadeType(): number;
  public performTransfer(): void;
  public isMapPassable(targetX: number, targetY: number, direction: number): boolean;
  public vehicle(): VehicleType;
  public isInBoat(): boolean;
  public isInShip(): boolean;
  public isInAirship(): boolean;
  public isInVehicle(): boolean;
  public isNormal(): boolean;
  public isDashing(): boolean;
  public isDebugThrough(): boolean;
  public isCollided(x: number, y: number): boolean;
  public centerX(): number;
  public centerY(): number;
  public center(x: number, y: number): any;
  public locate(x: number, y: number): void;
  public increaseSteps(): void;
  public makeEncounterCount(): void;
  public makeEncounterTroopId(): number;
  public meetsEncounterConditions(encounter: any): boolean; // TODO: figure out encounter
  public executeEncounter(): boolean;
  public startMapEvent(x: number, y: number, triggers: number[], normal: number): void;
  public moveByInput(): void;
  public canMove(): boolean;
  public getInputDirection(): number;
  public executeMove(direction: number): void;
  public override update(isSceneActive?: boolean): void;
  public updateDashing(): void;
  public isDashButtonPressed(): boolean;
  public updateScroll(lastScrolledX: number, lastScrolledY: number): void;
  public updateVehicle(): void;
  public updateVehicleGetOn(): void;
  public updateVehicleGetOff(): void;
  public updateNonmoving(wasMoving: boolean, isSceneActive: boolean): void;
  public triggerAction(): boolean;
  public triggerButtonAction(): boolean;
  public triggerTouchAction(): boolean;
  public triggerTouchActionD1(x: number, y: number): boolean;
  public triggerTouchActionD2(x: number, y: number): boolean;
  public triggerTouchActionD3(x: number, y: number): boolean;
  public updateEncounterCount(): void;
  public canEncounter(): boolean;
  public encounterProgressValue(): number;
  public checkEventTriggerHere(triggers: any[]): void;
  public checkEventTriggerThere(triggers: any[]): void;
  public checkEventTriggerTouch(x: number, y: number): void;
  public canStartLocalEvents(): boolean;
  public getOnOffVehicle(): boolean;
  public getOnVehicle(): boolean;
  public getOffVehicle(): boolean;
  public forceMoveForward(): void;
  public isOnDamageFloor(): boolean;
  public moveStraight(direction: number): void;
  public moveDiagonally(compositeHorz: number, compositeVert: number): void;
  public jump(xModifier: number, yModifier: number): void;
  public showFollowers(): void;
  public hideFollowers(): void;
  public gatherFollowers(): void;
  public areFollowersGathering(): boolean;
  public areFollowersGathered(): boolean;
}

export { Game_Player };