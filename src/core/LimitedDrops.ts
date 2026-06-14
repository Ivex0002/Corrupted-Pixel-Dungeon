const LimitedDropNames = [
  "STRENGTH_POTIONS",
  "UPGRADE_SCROLLS",
  "ARCANE_STYLI",
  "ENCH_STONE",
  "INT_STONE",
  "TRINKET_CATA",
  "LAB_ROOM",
  "SWARM_HP",
  "NECRO_HP",
  "BAT_HP",
  "WARLOCK_HP",
  "COOKING_HP",
  "BLANDFRUIT_SEED",
  "SLIME_WEP",
  "SKELE_WEP",
  "THEIF_MISC",
  "GUARD_ARM",
  "SHAMAN_WAND",
  "DM200_EQUIP",
  "GOLEM_EQUIP",
  "VELVET_POUCH",
  "SCROLL_HOLDER",
  "POTION_BANDOLIER",
  "MAGICAL_HOLSTER",
  "LORE_SEWERS",
  "LORE_PRISON",
  "LORE_CAVES",
  "LORE_CITY",
  "LORE_HALLS",
] as const;

type LimitedDropName = (typeof LimitedDropNames)[number];

export type LimitedDropState = {
  count: number;
};

export const limitedDrops: Record<LimitedDropName, LimitedDropState> =
  Object.fromEntries(
    LimitedDropNames.map((name) => [name, { count: 0 }]),
  ) as Record<LimitedDropName, LimitedDropState>;
