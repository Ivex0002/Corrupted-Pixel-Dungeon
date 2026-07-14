import { Constructor } from "../../util/Constructor";
import { Item } from "../Item";

type BagConfig = {
  capacity: number;
  image: string;
  acceptedTypes: readonly Constructor<Item>[];
};

export class Bag extends Item {
  constructor(readonly config: BagConfig) {
    super();
  }

  canHold(item: Item) {
    return this.config.acceptedTypes.some((type) => item instanceof type);
  }
}
