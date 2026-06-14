export interface Entity {
  id: number;
}

export interface Ownable extends Entity {
  ownerId: number;
}

export interface Character extends Entity {
  statusIds: number[];
}
