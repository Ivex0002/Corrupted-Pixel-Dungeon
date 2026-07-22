import { Constructor } from "../../util/Constructor";
import { Item } from "../Item";

export type BagConfig = {
  capacity: number;
  acceptedTypes: readonly Constructor<Item>[];
  priority: number;
};

export abstract class Bag extends Item {
  protected items: Item[] = [];

  constructor(readonly config: BagConfig) {
    super();
  }

  public canHold(item: Item): boolean {
    return this.config.acceptedTypes.some((type) => item instanceof type);
  }

  public store(item: Item): boolean {
    if (!this.canHold(item) || this.items.length >= this.config.capacity) {
      return false;
    }

    this.items.push(item);
    item.ownerId = this.id;

    return true;
  }
}
