import { Bag } from "../../items/bag/Bag";
import { BAGS } from "../../items/bag/BAGS";

export class HeroBackpack extends Bag {
  public img = "NO_IMG";

  constructor() {
    super(BAGS.backpack);
  }
}
