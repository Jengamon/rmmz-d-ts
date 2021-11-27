/**
 * @author Brandt (Masked)
 */

import { Filter } from 'pixi.js';
import { Spriteset_Base, Sprite_Battler } from '.';
import { Sprite } from '..';

import { Game_Battler } from "../rmmz_objects";

declare interface Spriteset_Battle extends Spriteset_Base<Game_Battler, Sprite_Battler> {
    _backgroundFilter: Filter;
    _backgroundSprite: Sprite;
    _back1Sprite: Sprite;
    _back2Sprite: Sprite;

    initialize: () => void;

    createBackground: () => void;
    createBattleback: () => void;
    createBattleField: () => void;

    battleFieldOffsetY: () => number;

    updateBattleback: () => void;

    createEnemies: () => void;
    compareEnemySprite: (a: Sprite_Battler, b: Sprite_Battler) => number;

    createActors: () => void;
    updateActors: () => void;

    battlerSprites: () => Sprite_Battler[];

    isEffecting: () => boolean;
    isAnyoneMoving: () => boolean;
    isBusy: () => boolean;
}

declare let Spriteset_Battle: Spriteset_Battle;

export { Spriteset_Battle };
