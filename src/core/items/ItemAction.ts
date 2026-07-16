import { ActionContext } from "../actions/ActionContext";
import { Item } from "./Item";

export interface ItemAction<T extends Item = Item> {
  translationKey: string;
  enabled(ctx: ActionContext<T>): boolean;
  execute(ctx: ActionContext<T>): void;
}

export type ItemActions<T extends Item = Item> = Record<string, ItemAction<T>>;
