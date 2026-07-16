import { Wand } from "../../wand/Wand";
import { Bag } from "../Bag";

export class MagicalHolster extends Bag {
  public img = "NO_IMG";

  constructor() {
    super({ capacity: 20, acceptedTypes: [Wand] });
  }
}
