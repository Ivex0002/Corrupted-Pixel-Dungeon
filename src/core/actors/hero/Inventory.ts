import { Bag } from "../../items/bag/Bag";
import { Item } from "../../items/Item";
import { Backpack } from "./Backpack";

// TODO : bags 우선순위 로직 구현 > 추후에 가방 추가될때 유연하게 대처 가능하게.
export class Inventory {
  readonly backpack = new Backpack();

  readonly bags: Bag[] = [];

  constructor() {
    this.bags.push(this.backpack);
  }

  // 단순하게 배열만으로 아이템 넣는 우선순위를 구현
  // UI 쪽은 따로 설정 ?
  addBag(bag: Bag) {
    this.bags.unshift(bag);
  }

  addItem(item: Item): boolean {
    for (const bag of this.bags) {
      if (!bag.canHold(item)) continue;

      if (bag.store(item)) return true;
    }

    return false;
  }

  remove(item: Item): boolean;

  contains(item: Item): boolean;

  find<T extends Item>(): T[];

  getAllItems(): readonly Item[];
}
