import { Actor } from "./actor";
import { Char } from "./Char";
import { PRIORITY } from "./PRIORITY";

export class ActorScheduler {
  private _all = new Set<Actor>();
  private _chars = new Set<Char>();
  private _current: Actor | null = null;

  private _ids = new Map<number, Actor>();
  private _nextID = 1;

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

  // public static keepActorThreadAlive = true;

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

  public add(actor: Actor) {
    this.addInternal(actor, this.now);
  }

  public addDelayed(actor: Actor, delay: number) {
    this.addInternal(actor, this.now + Math.max(delay, 0));
  }

  private addInternal(actor: Actor, time: number) {
    if (this._all.has(actor)) {
      return;
    }

    if (actor.id() === 0) {
      actor.assignId(this._nextID++);
    }

    this._ids.set(actor.id(), actor);

    this._all.add(actor);
    actor.timer.spend(time);
    actor.onAdd();

    if (actor instanceof Char) {
      const char = actor as Char;
      this._chars.add(char);

      for (const buff of char.buffs()) {
        this.add(buff);
      }
    }
  }

  public clear() {
    this._now = 0;

    this._all.clear();
    this._chars.clear();

    this._ids.clear();
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
