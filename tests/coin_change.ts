import { assertEquals } from "@std/assert";
import coin_change from '../practice/22_coin_change.ts';

Deno.test('coin_change', function addTest() {
  assertEquals(coin_change(4, [1,2,3]), 4);
  assertEquals(coin_change(10, [2,5,3,6]), 5);
  assertEquals(coin_change(10, [10]), 1);
  assertEquals(coin_change(5, [4]), 0);
});
