import { Ownable } from "../Entity";
import { ItemAction } from "./ItemAction";

export class Item extends Ownable {
  actions: ItemAction[] = [];
}
