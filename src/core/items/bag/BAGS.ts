import { Item } from "../Item";
import { Wand } from "../wand/Wand";
import { BagConfig } from "./Bag";

// { acceptedTypes: [], capacity: 20, priority: 1 }
export const BAGS = {
  backpack: { acceptedTypes: [Item], capacity: 20, priority: 1 },
  magicalHolster: { acceptedTypes: [Wand], capacity: 20, priority: 60 },
} satisfies Record<string, BagConfig>;
