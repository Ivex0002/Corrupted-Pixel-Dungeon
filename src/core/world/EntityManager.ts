import { Actor } from "../actors/Actor";

export class EntityManager {
  private _ids = new Map<number, Actor>();
  private _nextID = 1;

  register(actor: Actor) {
    if (actor.id === 0) {
      actor.assignId(this._nextID++);
    }

    this._ids.set(actor.id, actor);
  }

  unregister(actor: Actor) {
    this._ids.delete(actor.id);
  }

  get(id: number) {
    return this._ids.get(id);
  }
}
