/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sprite_Character, Spriteset_Base, Sprite_Destination, IBalloonRequest } from ".";
import { Game_Character, RPG, Sprite, Tilemap, TilingSprite, Weather } from "..";

declare class Spriteset_Map extends Spriteset_Base<Game_Character, Sprite_Character> {
  protected _balloonSprites: Sprite[];
  protected _parallax: TilingSprite;
  protected _parallaxName: string;
  protected _baseSprite: Sprite;
  protected _characterSprites: Sprite_Character[];
  protected _effectsContainer: Tilemap;
  protected _tilemap: Tilemap;
  protected _tileset: RPG.DataTileset;
  protected _shadowSprite: Sprite;
  protected _destinationSprite: Sprite_Destination;
  protected _weather: Weather;

  constructor();

  public initialize(): void;
  public destroy(options: any): void;
  public loadSystemImages(): void;
  public createLowerLayer(): void;
  public update(): void;
  public hideCharacters(): void;
  public createParallax(): void;
  public createTilemap(): void;
  public loadTileset(): void;
  public createCharacters(): void;
  public createShadow(): void;
  public createDestination(): void;
  public createWeather(): void;
  public updateTileset(): void;
  public updateParallax(): void;
  public updateTilemap(): void;
  public updateShadow(): void;
  public updateWeather(): void;
  public updateBalloons(): void;
  public processBalloonRequests(): void;
  public createBalloon(request: IBalloonRequest): void;
  public removeBalloon(sprite: Sprite): void
  public removeAllBalloons(): void;
  public findTargetSprite(target: Game_Character): Sprite_Character;
  public animationBaseDelay(): number;
}

export { Spriteset_Map };