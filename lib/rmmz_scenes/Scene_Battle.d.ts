import { Scene_Message } from '.';
import { Rectangle } from '../rmmz_core';

/**
 * A class that orchestrates battles as a separate scene.
 */
declare class Scene_Battle extends Scene_Message {
  constructor(...arguments: never[]);

  public initialize(): void;
  public create(): void;
  public start(): void;
  public update(): void;
  public updateVisibility(): void;
  public updateBattleProcess(): void;
  public isTimeActive(): boolean;
  public isAnyInputWindowActive(): boolean;
  public changeInputWindow(): void;
  public stop(): void;
  public terminate(): void;
  public shouldAutosave(): boolean;
  public needsSlowFadeOut(): boolean;
  public updateLogWindowVisibility(): void;
  public updateStatusWindowVisibility(): void;
  public shouldOpenStatusWindow(): boolean;
  public updateStatusWindowPosition(): void;
  public statusWindowX(): number;
  public updateInputWindowVisibility(): void;
  public needsInputWindowChange(): boolean;
  public updateCancelButton(): void;
  public createDisplayObjects(): void;
  public createSpriteset(): void;
  public createAllWindows(): void;
  public createLogWindow(): void;
  public logWindowRect(): Rectangle;
  public createStatusWindow(): void;
  public statusWindowRect(): Rectangle;
  public createPartyCommandWindow(): void;
  public partyCommandWindowRect(): Rectangle;
  public createActorCommandWindow(): void;
  public actorCommandWindowRect(): Rectangle;
  public createHelpWindow(): void;
  public helpWindowRect(): Rectangle;
  public createSkillWindow(): void;
  public skillWindowRect(): Rectangle;
  public createItemWindow(): void;
  public itemWindowRect(): Rectangle;
  public createActorWindow(): void;
  public actorWindowRect(): Rectangle;
  public createEnemyWindow(): void;
  public enemyWindowRect(): Rectangle;
  public helpAreaTop(): number;
  public helpAreaBottom(): number;
  public helpAreaHeight(): number;
  public buttonAreaTop(): number;
  public windowAreaHeight(): number;
  public createButtons(): void;
  public createCancelButton(): void;
  public closeCommandWindows(): void;
  public hideSubInputWindows(): void;
  public startPartyCommandSelection(): void;
  public commandFight(): void;
  public commandEscape(): void;
  public startActorCommandSelection(): void;
  public commandAttack(): void;
  public commandSkill(): void;
  public commandGuard(): void;
  public commandItem(): void;
  public commandCancel(): void;
  public selectNextCommand(): void;
  public selectPreviousCommand(): void;
  public startActorSelection(): void;
  public onActorOk(): void;
  public onActorCancel(): void;
  public startEnemySelection(): void;
  public onEnemyOk(): void;
  public onEnemyCancel(): void;
  public onSkillOk(): void;
  public onSkillCancel(): void;
  public onItemOk(): void;
  public onItemCancel(): void;
  public onSelectAction(): void;
  public endCommandSelection(): void;
}

export { Scene_Battle };