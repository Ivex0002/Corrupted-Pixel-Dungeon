import { Actor } from "../actors/Actor";
import { Char } from "../actors/Char";
import { PRIORITY } from "../actors/PRIORITY";

export class Scheduler {
  private _all = new Set<Actor>();
  private _chars = new Set<Char>();

  private _current: Actor | null = null;

  private _now = 0;

  public get now(): number {
    return this._now;
  }

  public next(actor: Actor): void {
    if (this._current === actor) {
      this._current = null;
    }
  }

  public processing(): boolean {
    return this._current != null;
  }

  public curActorPriority(): number {
    return this._current != null ? this._current.priority : PRIORITY.HERO_PRIO;
  }

  public process() {
    let earliest = Number.MAX_VALUE;

    this._current = null;

    for (const actor of this._all) {
      if (
        actor.timer.time < earliest ||
        (actor.timer.time == earliest &&
          (this._current == null || actor.priority > this._current.priority))
      ) {
        earliest = actor.timer.time;
        this._current = actor;
      }
    }

    if (!this._current) {
      return false;
    }

    this._now = this._current.timer.time;

    let doNext = this._current.act();

    // TODO : Hero 구현 후 복원
    // if (doNext && (!Dungeon.hero || !Dungeon.hero.isAlive())) {
    //   doNext = false;
    //   Actor.current = null;
    // }

    return doNext;
  }

  add(actor: Actor, startTime: number) {
    if (this._all.has(actor)) return;

    this._all.add(actor);

    actor.timer.spend(startTime);
  }

  remove(actor: Actor) {
    this._all.delete(actor);
  }

  public clear() {
    this._now = 0;

    this._all.clear();
    this._chars.clear();
  }

  public fixTime() {
    if (this._all.size === 0) return;

    let min = Number.MAX_VALUE;
    for (const a of this._all) {
      if (a.timer.time < min) {
        min = a.timer.time;
      }
    }

    min = Math.trunc(min);

    for (const a of this._all) {
      a.timer.spend(-min);
    }
    // TODO : 던전 선언 후 형식 맞추기

    // if (
    //   Dungeon.hero != null &&
    //   all.contains(Dungeon.hero) &&
    //   !(Dungeon.level instanceof VaultLevel)
    // ) {
    //   Statistics.duration += min;
    // }
    this._now -= min;
  }
}
