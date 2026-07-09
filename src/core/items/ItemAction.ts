import { ActionContext } from "../actions/ActionContext";

export interface ItemAction {
  label: string;
  enabled(ctx: ActionContext): boolean;
  execute(ctx: ActionContext): void;
}
