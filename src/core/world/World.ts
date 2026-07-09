import { Actor } from "../actors/Actor";
import { Char } from "../actors/char/Char";
import { EntityManager } from "./EntityManager";
import { Scheduler } from "./Scheduler";

export class World {
  readonly entities = new EntityManager();
  readonly scheduler = new Scheduler();

  public add(actor: Actor) {
    this.addInternal(actor, this.scheduler.now);
  }

  public addDelayed(actor: Actor, delay: number) {
    this.addInternal(actor, this.scheduler.now + Math.max(delay, 0));
  }

  private addInternal(actor: Actor, time: number) {
    this.entities.register(actor);

    this.scheduler.add(actor, time);

    actor.onAdd();

    if (actor instanceof Char) {
      for (const buff of actor.buffs) {
        this.add(buff);
      }
    }
  }
}
