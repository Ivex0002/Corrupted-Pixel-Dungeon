import { TEXT_ITEM } from "../../i18n/TEXT_ITEM";
import { ItemActions } from "../ItemAction";
import { Wand } from "./Wand";

export const WAND_ACTIONS = {
  zap: {
    translationKey: TEXT_ITEM.WAND.ZAP,
    enabled(ctx) {
      return ctx.item.charge > 0;
    },
    execute(ctx) {
      ctx.item.consume();
    },
  },
} satisfies ItemActions<Wand>;
