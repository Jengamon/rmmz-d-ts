import { Game_Character } from ".";
import { Game_Actor } from "./Game_Actor";

declare class Game_Follower extends Game_Character {
  constructor();
  
  public initialize(memberIndex?: number): void;
  public refresh(): void;
  public actor(): Game_Actor;
  public isVisible(): boolean;
  public isGathered(): boolean;
  public update(): void;
  public chaseCharacter(characterToChase: Game_Character): void;
}

export { Game_Follower };