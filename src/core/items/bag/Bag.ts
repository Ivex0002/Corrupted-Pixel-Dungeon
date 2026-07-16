import { Constructor } from "../../util/Constructor";
import { Item } from "../Item";

type BagConfig = {
  capacity: number;
  acceptedTypes: readonly Constructor<Item>[];
};

// TODO : 세부가방에서의 분류 로직 완성
export abstract class Bag extends Item {
  protected items: Item[] = [];

  constructor(readonly config: BagConfig) {
    super();
  }

  canHold(item: Item) {
    return this.config.acceptedTypes.some((type) => item instanceof type);
  }

  store(item: Item): boolean {
    if (!this.canHold(item) || this.items.length >= this.config.capacity) {
      return false;
    }

    this.items.push(item);
    item.ownerId = this.id;

    return true;
  }
}
