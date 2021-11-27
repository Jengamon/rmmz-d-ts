import { TilingSprite, Bitmap } from "../rmmz_core";

declare class Sprite_Battleback extends TilingSprite {
    constructor(type: number);

    public adjustPosition(): void;
    public battleback1Bitmap(): Bitmap;
    public battleback2Bitmap(): Bitmap;
    public battleback1Name(): string;
    public battleback2Name(): string;
    public overworldBattleback1Name(): string;
    public overworldBattleback2Name(): string;
    public normalBattleback1Name(): string;
    public normalBattleback2Name(): string;
    // TODO Input specific values, rather than just "number"
    public terrainBattleback1Name(type: number): string;
    // TODO Ditto
    public terrainBattleback2Name(type: number): string;
    public defaultBattleback1Name(): string;
    public defaultBattleback2Name(): string;
    public shipBattleback1Name(): string;
    public shipBattleback2Name(): string;
    // Actually returns a TileId?
    public autotileType(z: number): number;
}

export { Sprite_Battleback };