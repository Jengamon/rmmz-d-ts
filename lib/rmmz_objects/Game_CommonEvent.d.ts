import { Game_Event, Game_Interpreter } from "..";
import { RPG } from "../RPG";

declare class Game_CommonEvent {
  protected _commonEventId: number;
  protected _interpreter: Game_Interpreter;

  constructor(...arguments: never[]);

  public initialize(commonEventId: number): void;
  public event(): Game_Event;
  public list(): RPG.DataCommonEventList;
  public refresh(): void;
  public isActive(): boolean;
  public update(): void;
}

export { Game_CommonEvent };