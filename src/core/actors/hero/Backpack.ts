import { Bag } from "../../items/bag/Bag";
import { Item } from "../../items/Item";

export class Backpack extends Bag {
  public img = "NO_IMG";

  constructor() {
    super({ capacity: 20, acceptedTypes: [Item] });
  }
}
