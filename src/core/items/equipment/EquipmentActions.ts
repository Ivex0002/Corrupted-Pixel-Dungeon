import { ItemActions } from "../ItemAction";

// { label: "", enabled(ctx) {}, execute(ctx) {} },
export const EQUIPMENT_ACTIONS = {
  equip: {
    label: "equip",
    enabled(ctx) {
      return true;
    },
    execute(ctx) {
      const { hero, item } = ctx;
      item.ownerId = hero.id;
    },
  },

  unequip: {
    label: "unequip",
    enabled(ctx) {
      return true;
    },
    execute(ctx) {
      const { hero, item } = ctx;
      //   item.ownerId = hero.inventory.id;
    },
  },
} satisfies ItemActions;
