/**
 * @author Brandt (Masked)
 */

import { Filter } from 'pixi.js';
import { Spriteset_Base, Sprite_Battler } from '.';
import { Sprite } from '..';

import { Game_Battler } from "../rmmz_objects";

declare class Spriteset_BattleClass extends Spriteset_Base<Game_Battler, Sprite_Battler> {
    protected _backgroundFilter: Filter;
    protected _backgroundSprite: Sprite;
    protected _back1Sprite: Sprite;
    protected _back2Sprite: Sprite;

    constructor();

    public createBackground(): void;
    public createBattleback(): void;
    public createBattleField(): void;

    public battleFieldOffsetY(): number;

    public updateBattleback(): void;

    public createEnemies(): void;
    public compareEnemySprite(a: Sprite_Battler, b: Sprite_Battler): number;

    public createActors(): void;
    public updateActors(): void;

    public battlerSprites(): Sprite_Battler[];

    public isEffecting(): boolean;
    public isAnyoneMoving(): boolean;
    public isBusy(): boolean;
}

// eslint-disable-next-line no-var
declare var Spriteset_Battle: Spriteset_BattleClass;

export { Spriteset_Battle, Spriteset_BattleClass };
