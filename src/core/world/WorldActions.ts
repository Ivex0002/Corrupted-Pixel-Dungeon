import { Actor } from "../actors/Actor";
import { Item } from "../items/Item";
import { World } from "./world";

export class WorldActions {
  constructor(world: World) {}

  public throw(actor: Actor, item: Item, cell: number) {}

  public pickUp(actor: Actor, item: Item) {}
}
