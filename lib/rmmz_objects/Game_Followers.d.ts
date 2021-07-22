import { Game_Follower } from ".";

declare class Game_Followers {
  protected _visible: boolean;
  protected _gathering: boolean;
  protected _data: Game_Follower[];

  constructor();
  public initialize(): void;
  public setup(): void;
  public isVisible(): boolean;
  public show(): void;
  public hide(): void;
  public data(): Game_Follower[];
  public reverseData(): Game_Follower[];
  public follower(index: number): Game_Follower;
  public refresh(): void;
  public update(): void;
  public updateMove(): void;
  public jumpAll(): void;
  public synchronize(x: number, y: number, direction: number): void;
  public gather(): void;
  public areGathering(): boolean;
  public visibleFollowers(): Game_Follower[];
  public areMoving(): boolean;
  public areGathered(): boolean;
  public isSomeoneCollided(x: number, y: number): boolean;
}

export { Game_Followers };