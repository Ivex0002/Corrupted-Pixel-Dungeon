import { Buff } from "./Buff";

export class BuffComponent implements Iterable<Buff> {
  private readonly buffs = new Set<Buff>();

  [Symbol.iterator](): IterableIterator<Buff> {
    return this.buffs.values();
  }

  add(buff: Buff): void {
    this.buffs.add(buff);
  }

  remove(buff: Buff): void {
    this.buffs.delete(buff);
  }

  clear(): void {
    this.buffs.clear();
  }

  has(buff: Buff): boolean {
    return this.buffs.has(buff);
  }
}
