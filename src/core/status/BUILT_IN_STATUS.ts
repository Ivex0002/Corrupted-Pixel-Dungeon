import { StatusDefinition } from "./Status";

export const BUILT_IN_STATUS = {
  burning: {
    displayName: "Burning",
    description: "Deals fire damage over time",
    maxStack: 10,
    defaultDuration: 5,
    tags: ["fire", "heat", "light"],
  },

  poison: {
    displayName: "Poison",
    description: "Deals poison damage over time",
    maxStack: 99,
    defaultDuration: 10,
    tags: ["poison"],
  },
} as const satisfies Record<string, StatusDefinition>;

export type BuiltInStatusKey = keyof typeof BUILT_IN_STATUS;
