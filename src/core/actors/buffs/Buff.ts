import { Actor } from "../Actor";

export class Buff extends Actor {
  public act(): boolean {
    this.timer.diactivate();
    return true;
  }
}
