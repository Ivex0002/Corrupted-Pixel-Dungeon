import { Actor } from "./Actor";
import { Buff } from "./buffs/Buff";

export abstract class Char extends Actor {
  private buffsSet = new Set<Buff>();

  public buffs(): Set<Buff> {
    return new Set(this.buffsSet);
  }

  public override clearTime(now: number): void {
    super.clearTime(now);

    for (const buff of this.buffs()) {
      buff.clearTime(now);
    }
  }
}
