import { Actor } from "../Actor";
import { BuffSet } from "../buff/BuffComponent";
import { Alignment } from "./Alignment";

// TODO : Char 의 경우 참조가 매우 많으므로 기반 클래스들 부터 먼저 제작
export abstract class Char extends Actor {
  public pos = 0;

  // TODO : 애니메이션 관련 > 간소화
  // public CharSprite sprite;

  public HT!: number;
  public HP!: number;

  private baseSpeed = 1;
  // 경로찾기 > 일단 나중에
  // protected PathFinder.Path path;

  public buffs = new BuffSet();

  public alignment!: Alignment;

  public viewDistance: number = 8;

  public fieldOfView: boolean[] | null = null;

  public override clearTime(now: number): void {
    super.clearTime(now);

    for (const buff of this.buffs) {
      buff.clearTime(now);
    }
  }

  // private act() {
  //   if (
  //     this.fieldOfView == null ||
  //     this.fieldOfView.length != Dungeon.level.length()
  //   ) {
  //     this.fieldOfView = new boolean[Dungeon.level.length()]();
  //   }
  //   Dungeon.level.updateFieldOfView(this, this.fieldOfView);

  //   //throw any items that are on top of an immovable char
  //   if (properties().contains(Property.IMMOVABLE)) {
  //     throwItems();
  //   }
  //   return false;
  // }

  public act(): boolean {
    return true;
  }

  // 	private  throwItems():void{
  // 	Heap heap = Dungeon.level.heaps.get( pos );
  // 	if (heap != null && heap.type == Heap.Type.HEAP
  // 			&& !(heap.peek() instanceof Tengu.BombAbility.BombItem)
  // 			&& !(heap.peek() instanceof Tengu.ShockerAbility.ShockerItem)) {
  // 		ArrayList<Integer> candidates = new ArrayList<>();
  // 		for (int n : PathFinder.NEIGHBOURS8){
  // 			if (Dungeon.level.passable[pos+n]){
  // 				candidates.add(pos+n);
  // 			}
  // 		}
  // 		if (!candidates.isEmpty()){
  // 			Dungeon.level.drop( heap.pickUp(), Random.element(candidates) ).sprite.drop( pos );
  // 		}
  // 	}
  // }

  // 	public  name():String{
  // 	return Messages.get(this, "name");
  // }
}
