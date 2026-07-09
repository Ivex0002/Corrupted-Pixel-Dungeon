export abstract class Entity {
  private _id?: number;
  name!: string;
  readonly tags = new Set<string>();

  public get id(): number {
    if (this._id === undefined) {
      throw new Error("Entity has not been spawned yet.");
    }
    return this._id;
  }

  /** EntityManager only */
  public assignId(id: number): void {
    if (this._id !== undefined) {
      throw new Error("Entity already has an id.");
    }

    this._id = id;
  }

  //   public get isSpawned(): boolean {
  //     return this._id !== undefined;
  //   }
}

export abstract class Ownable extends Entity {
  ownerId!: number;
}
