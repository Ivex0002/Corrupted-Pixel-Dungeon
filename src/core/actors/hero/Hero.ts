import { Char } from "../char/Char";
import { Inventory } from "./inventory";

export class Hero extends Char {
  readonly inventory = new Inventory();
}
