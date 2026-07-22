import { Char } from "../char/Char";
import { HeroBackpack } from "./HeroBackpack";
import { Inventory } from "./Inventory";

export class Hero extends Char {
  readonly inventory = new Inventory([new HeroBackpack()]);
}
