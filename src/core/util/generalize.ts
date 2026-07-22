import { Item } from "../items/Item";
import { Constructor } from "./Constructor";

// 현재 로직상 Item만 소비되므로 Item으로 명시함
// 추후 다른 타입 필요시 수정 필요
export function* generalize(item: Item): Generator<Constructor<Item>> {
  let prototype = Object.getPrototypeOf(item);

  while (prototype.constructor !== Object) {
    yield prototype.constructor;

    prototype = Object.getPrototypeOf(prototype);
  }
}
