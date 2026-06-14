import { Entity } from "../classes/Entity";

export interface StatusDefinition {
  icon?: string;

  displayName: string;

  description?: string;

  maxStack?: number;

  defaultDuration?: number;

  tags?: string[];
}

export interface StatusEffect extends Entity {
  targetId: number;

  sourceId?: number;

  type: string;

  duration: number;

  stack: number;
}
