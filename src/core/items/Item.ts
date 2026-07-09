import { Ownable } from "../Entity";
import { DEFAULT_ITEM_ACTIONS } from "./DEFAULT_ITEM_ACTIONS";
import { ItemActions } from "./ItemAction";

export class Item extends Ownable {
  get actions(): ItemActions {
    return DEFAULT_ITEM_ACTIONS;
  }
}
