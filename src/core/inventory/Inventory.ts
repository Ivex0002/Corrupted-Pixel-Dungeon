import { Bag } from "../items/bag/Bag";
import { Item } from "../items/Item";
import { Constructor } from "../util/Constructor";
import { generalize } from "../util/generalize";

export class Inventory {
  readonly bags: Bag[] = [];

  private readonly bagIndex = new Map<Constructor<Item>, Bag[]>();

  constructor(baseBags: readonly Bag[]) {
    for (const bag of baseBags) {
      this.addBag(bag);
    }
  }

  private sortBags(bags: Bag[]): void {
    bags.sort((a, b) => b.config.priority - a.config.priority);
  }

  private indexBag(bag: Bag): void {
    for (const type of bag.config.acceptedTypes) {
      const bags = this.bagIndex.get(type);

      if (bags) {
        bags.push(bag);
        this.sortBags(bags);
      } else {
        this.bagIndex.set(type, [bag]);
      }
    }
  }

  public addBag(bag: Bag): void {
    this.bags.push(bag);
    this.sortBags(this.bags);
    this.indexBag(bag);
  }

  public addItem(item: Item): boolean {
    for (const type of generalize(item)) {
      const bags = this.bagIndex.get(type);

      if (!bags) {
        continue;
      }

      for (const bag of bags) {
        if (bag.store(item)) {
          return true;
        }
      }
    }

    return false;
  }

  // TODO : 가방간의 아이템 이동 로직 필요
  // 가방 추가시 호출해서 아이템 정리 한번 해야됨
  // > 그냥 전체 아이템 플랫하게 두고 다시 재분배?
  // > 동일 type 다른 가방 사이의 아이템 분배도 신경써야함

  // world 혹은 game 등의 총괄 메서드에서 이동 로직 구현
  // > 여기서 ownerId 신규 등록까지 관리 ?

  // move(item: Item, to: number): boolean {
  //   const bag = this.bags.find((b) => b.id === item.ownerId);

  //   if (!bag) return false;

  //   if (bag.remove(item)) {
  //     item.ownerId = to;
  //     return true;
  //   }

  //   return false;
  // }
}
