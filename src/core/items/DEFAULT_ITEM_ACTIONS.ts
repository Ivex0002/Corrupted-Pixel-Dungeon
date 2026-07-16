import { TEXT_ITEM } from "../i18n/TEXT_ITEM";
import { ItemActions } from "./ItemAction";

// { label: "", enabled(ctx) {}, execute(ctx) {} },
export const DEFAULT_ITEM_ACTIONS = {
  drop: {
    translationKey: TEXT_ITEM.DROP,
    enabled(ctx) {
      return true;
    },
    execute(ctx) {
      const { hero, item } = ctx;
      hero.timer.spend(1);
      item.ownerId = hero.pos;
    },
  },

  throw: {
    translationKey: TEXT_ITEM.THROW,
    enabled(ctx) {
      return true;
    },
    execute(ctx) {
      const { targetPos, item, hero } = ctx;
      hero.timer.spend(1);
      item.ownerId = targetPos;
    },
  },

  pickUp: {
    translationKey: TEXT_ITEM.PICK_UP,
    enabled(ctx) {
      return true;
    },
    execute(ctx) {
      const { item, hero } = ctx;
      // TODO : 인벤토리 구현 및 예외 상황 대응
      //   item.ownerId = hero.inventory.id
    },
  },
} satisfies ItemActions;
