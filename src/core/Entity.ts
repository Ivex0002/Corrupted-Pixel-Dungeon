abstract class Entity {
  private _id?: number;
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
