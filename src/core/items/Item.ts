import { Ownable } from "../Entity";
import { DEFAULT_ITEM_ACTIONS } from "./DEFAULT_ITEM_ACTIONS";
import { ItemActions } from "./ItemAction";

export abstract class Item extends Ownable {
  abstract img: string;

  get actions(): ItemActions {
    return DEFAULT_ITEM_ACTIONS;
  }
}
