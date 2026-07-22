import { DEFAULT_ITEM_ACTIONS } from "../DEFAULT_ITEM_ACTIONS";
import { Item } from "../Item";
import { ItemActions } from "../ItemAction";
import { EQUIPMENT_ACTIONS } from "./EquipmentActions";

const EQUIPMENT_ITEM_ACTIONS = {
  ...DEFAULT_ITEM_ACTIONS,
  ...EQUIPMENT_ACTIONS,
};

export abstract class Equipment extends Item {
  override get actions(): ItemActions {
    return EQUIPMENT_ITEM_ACTIONS;
  }
}
