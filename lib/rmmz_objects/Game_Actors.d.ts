import { Game_Actor } from "./Game_Actor";

declare class Game_Actors {
  protected _data: Game_Actor[];

  constructor();

  public initialize(): void;
  public actor(actorId: number): Game_Actor | null;
}