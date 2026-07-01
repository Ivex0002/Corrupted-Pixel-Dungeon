import { PRIORITY } from "./PRIORITY";
import { Timer } from "./Timer";

export abstract class Actor extends Entity {
  public static readonly TICK = 1;

  public readonly timer = new Timer();

  protected _priority = PRIORITY.DEFAULT;

  public get priority(): number {
    return this._priority;
  }

  public abstract act(): boolean;

  public clearTime(now: number): void {
    this.timer.clearTime(now);
  }

  /**
   * Scheduler only
   */
  public onAdd(): void {}

  /**
   * Scheduler only
   */
  public onRemove(): void {}
}
