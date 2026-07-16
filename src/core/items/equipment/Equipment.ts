import { Item } from "../Item";
import { ItemActions } from "../ItemAction";
import { EQUIPMENT_ACTIONS } from "./EquipmentActions";

export abstract class Equipment extends Item {
  override get actions(): ItemActions {
    return {
      ...super.actions,
      ...EQUIPMENT_ACTIONS,
    };
  }
}
