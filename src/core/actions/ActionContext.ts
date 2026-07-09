import { Hero } from "../actors/hero/Hero";
import { Dungeon } from "../Dungeon";
import { Item } from "../items/Item";
import { World } from "../world/world";

export interface ActionContext {
  hero: Hero;
  item: Item;

  dungeon: Dungeon;
  world: World;
  targetPos: number;
  targetId: number;
  //   level: Level;

  //   eventBus: EventBus;
  //   scene: Scene;

  //   rng: RNG;
}
