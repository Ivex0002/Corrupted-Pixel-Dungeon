import { Buff } from "./Buff";

export class BuffSet implements Iterable<Buff> {
  private readonly buffs = new Set<Buff>();

  [Symbol.iterator](): IterableIterator<Buff> {
    return this.buffs.values();
  }

  add(buff: Buff): void {
    this.buffs.add(buff);
  }

  delete(buff: Buff): void {
    this.buffs.delete(buff);
  }

  clear(): void {
    this.buffs.clear();
  }

  has(buff: Buff): boolean {
    return this.buffs.has(buff);
  }

  get size(): number {
    return this.buffs.size;
  }

  forEach(callback: (buff: Buff) => void): void {
    this.buffs.forEach(callback);
  }

  tick(turn: number = 1): void {
    for (const buff of this) {
      buff.timer.spend(turn);
    }
  }
}
