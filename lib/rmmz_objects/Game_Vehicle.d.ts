/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Game_Character } from '.';
import { RPG } from '..';

declare class Game_Vehicle extends Game_Character {
  protected _type: string;
  protected _mapId: number;
  protected _altitude: number;
  protected _driving: boolean;
  protected _bgm: any;

  constructor();

  public initialize(vehicleType?: string): void;
  public initMembers(): void;
  public isBoat(): boolean;
  public isShip(): boolean;
  public isAirship(): boolean;
  public resetDirection(): void;
  public initMoveSpeed(): void;
  public vehicle(): RPG.Vehicle;
  public loadSystemSettings(): void;
  public refresh(): void;
  public setLocation(mapId: number, x: number, y: number): void;
  public pos(x: number, y: number): boolean;
  public isMapPassable(x: number, y: number, direction: number): boolean;
  public getOn(): void;
  public getOff(): void;
  public setBgm(newBgm: any): void;
  public playBgm(): void;
  public syncWithPlayer(): void;
  public screenY(): number;
  public shadowX(): number;
  public shadowY(): number;
  public shadowOpacity(): number;
  public canMove(): boolean;
  public update(): void;
  public updateAirship(): void;
  public updateAirshipAltitude(): void;
  public maxAltitude(): number;
  public isLowest(): boolean;
  public isHighest(): boolean;
  public isTakeoffOk(): boolean;
  public isLandOk(x: number, y: number, direction: number): boolean;
}

export { Game_Vehicle };