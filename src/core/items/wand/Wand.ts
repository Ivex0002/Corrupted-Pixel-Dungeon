import { DEFAULT_ITEM_ACTIONS } from "../DEFAULT_ITEM_ACTIONS";
import { Item } from "../Item";
import { ItemActions } from "../ItemAction";
import { WAND_ACTIONS } from "./WAND_ACTIONS";

const WAND_ITEM_ACTIONS = {
  ...DEFAULT_ITEM_ACTIONS,
  ...WAND_ACTIONS,
};

export abstract class Wand extends Item {
  override get actions(): ItemActions {
    return WAND_ITEM_ACTIONS;
  }

  private _charge = 3;

  get charge() {
    return this._charge;
  }

  consume(charge: number = 1) {
    this._charge = Math.max(0, this._charge - charge);
  }
}
