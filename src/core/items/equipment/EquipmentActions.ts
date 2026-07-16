import { TEXT_ITEM } from "../../i18n/TEXT_ITEM";
import { ItemActions } from "../ItemAction";
import { Equipment } from "./Equipment";

// { label: "", enabled(ctx) {}, execute(ctx) {} },
export const EQUIPMENT_ACTIONS = {
  equip: {
    translationKey: TEXT_ITEM.EQUIPMENT.EQUIP,
    enabled(ctx) {
      return true;
    },
    execute(ctx) {
      const { hero, item } = ctx;
      item.ownerId = hero.id;
    },
  },

  unequip: {
    translationKey: TEXT_ITEM.EQUIPMENT.UNEQUIP,
    enabled(ctx) {
      return true;
    },
    execute(ctx) {
      const { hero, item } = ctx;
      //   item.ownerId = hero.inventory.id;
    },
  },
} satisfies ItemActions<Equipment>;
