/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Game_Battler, RGBA, Sprite } from "..";
import { StatusType } from '.';

declare class Sprite_Gauge extends Sprite {
  protected _battler: Game_Battler;
  protected _statusType: StatusType;
  protected _value: number;
  protected _maxValue: number;
  protected _targetValue: number;
  protected _targetMaxValue: number;
  protected _duration: number;
  protected _flashingCount: number;

  constructor();

  public initialize(): void;
  public initMembers(): void;
  public destroy(options: any): void;
  public createBitmap(): void;
  public bitmapWidth(): number;
  public bitmapHeight(): number;
  public gaugeHeight(): number;
  public gaugeX(): number;
  public labelY(): number;
  public labelFontFace(): string;
  public labelFontSize(): number;
  public valueFontFace(): string;
  public valueFontSize(): number;
  public setup(battler: Game_Battler, statusType: StatusType): void;
  public update(): void;
  public updateBitmap(): void;
  public updateTargetValue(value: number, maxValue: number): void;
  public smoothness(): number;
  public updateGaugeAnimation(): void;
  public updateFlashing(): void;
  public flashingColor1(): RGBA;
  public flashingColor2(): RGBA;
  public isValid(): boolean;
  public currentValue(): number;
  public currentMaxValue(): number;
  public label(): string;
  public gaugeBackColor(): string; // actually hex color.
  public gaugeColor1(): string; // actually hex color.
  public gaugeColor2(): string; // actually hex color.
  public labelColor(): string; // actually hex color.
  public labelOutlineColor(): string; // actually hex color.
  public labelOutlineWidth(): number;
  public valueColor(): string; // actually hex color.
  public valueOutlineColor(): string; // actually a stringified RGBA color.
  public valueOutlineWidth(): number;
  public redraw(): void;
  public drawGauge(): void;
  public drawGaugeRect(x: number, y: number, width: number, height: number): void;
  public gaugeRate(): number;
  public drawLabel(): void;
  public setupLabelFont(): void;
  public measureLabelWidth(): number;
  public labelOpacity(): number;
  public drawValue(): void;
  public setupValueFont(): void;
}

export { Sprite_Gauge };