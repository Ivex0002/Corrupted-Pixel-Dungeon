import { PRIORITY } from "./PRIORITY";
import { Timer } from "./Timer";

// TODO : Actor 생성 시점부터 id를 부여하고
// ActorScheduler 는 id를 참조만 할뿐 등록 책임은 안지도록 변경
export abstract class Actor {
  public static readonly TICK = 1;

  private _id: number = 0;
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

  public id(): number {
    return this._id;
  }

  public assignId(id: number): void {
    this._id = id;
  }
}
