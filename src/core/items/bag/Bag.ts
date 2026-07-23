import { Constructor } from "../../util/Constructor";
import { generalize } from "../../util/generalize";
import { Item } from "../Item";

export type BagConfig = {
  capacity: number;
  acceptedTypes: readonly Constructor<Item>[];
  priority: number;
};

export abstract class Bag extends Item {
  private readonly bucket = new Map<Constructor<Item>, Item[]>();

  private itemCount = 0;

  constructor(readonly config: BagConfig) {
    super();

    for (const type of config.acceptedTypes) {
      this.bucket.set(type, []);
    }
  }

  // private findAcceptedType(item: Item): Constructor<Item> | undefined {
  //   for (const type of generalize(item)) {
  //     if (this.storage.has(type)) {
  //       return type;
  //     }
  //   }
  // }

  private findBucket(item: Item): Item[] | undefined {
    for (const type of generalize(item)) {
      const items = this.bucket.get(type);

      if (items) return items;
    }

    return undefined;
  }

  public canHold(item: Item): boolean {
    return this.findBucket(item) !== undefined;
  }

  public store(item: Item): boolean {
    if (this.itemCount >= this.config.capacity) return false;

    const items = this.findBucket(item);

    if (!items) return false;

    items.push(item);
    this.itemCount++;
    item.ownerId = this.id;

    return true;
  }

  public remove(item: Item): boolean {
    if (item.ownerId !== this.id) return false;

    const items = this.findBucket(item);

    if (!items) return false;

    const index = items.indexOf(item);

    if (index === -1) return false;

    items.splice(index, 1);
    this.itemCount--;

    return true;
  }

  public *items(): Generator<Item> {
    for (const items of this.bucket.values()) {
      yield* items;
    }
  }

  public *itemsOf(type: Constructor<Item>): Generator<Item> {
    const items = this.bucket.get(type);

    if (!items) {
      return;
    }

    yield* items;
  }
}
