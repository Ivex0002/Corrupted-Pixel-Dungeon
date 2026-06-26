import { Actor } from "../actor";

export class Buff extends Actor {
  public act(): boolean {
    this.diactivate();
    return true;
  }
}
