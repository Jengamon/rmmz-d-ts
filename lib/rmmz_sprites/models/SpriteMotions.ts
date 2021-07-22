import { SpriteMotion } from "..";

class SpriteMotions {
  public static readonly walk: SpriteMotion = new SpriteMotion(0, true);
  public static readonly wait: SpriteMotion = new SpriteMotion(1, true);
  public static readonly chant: SpriteMotion = new SpriteMotion(2, true);
  public static readonly guard: SpriteMotion = new SpriteMotion(3, true);
  public static readonly damage: SpriteMotion = new SpriteMotion(4, false);
  public static readonly evade: SpriteMotion = new SpriteMotion(5, false);
  public static readonly thrust: SpriteMotion = new SpriteMotion(6, false);
  public static readonly swing: SpriteMotion = new SpriteMotion(7, false);
  public static readonly missile: SpriteMotion = new SpriteMotion(8, false);
  public static readonly skill: SpriteMotion = new SpriteMotion(9, false);
  public static readonly spell: SpriteMotion = new SpriteMotion(10, false);
  public static readonly item: SpriteMotion = new SpriteMotion(11, false);
  public static readonly escape: SpriteMotion = new SpriteMotion(12, true);
  public static readonly victory: SpriteMotion = new SpriteMotion(13, true);
  public static readonly dying: SpriteMotion = new SpriteMotion(14, true);
  public static readonly abnormal: SpriteMotion = new SpriteMotion(15, true);
  public static readonly sleep: SpriteMotion = new SpriteMotion(16, true);
  public static readonly dead: SpriteMotion = new SpriteMotion(17, true);
}

export { SpriteMotions };