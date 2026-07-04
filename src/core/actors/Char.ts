import { Actor } from "./Actor";
import { Buff } from "./buffs/Buff";
import { BuffComponent } from "./buffs/BuffComponent";

export abstract class Char extends Actor {
  public pos = 0;

  // TODO : 애니메이션 관련 > 간소화
  // public CharSprite sprite;

  public HT!: number;
  public HP!: number;

  private baseSpeed = 1;
  // 경로찾기 > 일단 나중에
  // protected PathFinder.Path path;

  public buffs = new BuffComponent();

  public override clearTime(now: number): void {
    super.clearTime(now);

    for (const buff of this.buffs) {
      buff.clearTime(now);
    }
  }
}
