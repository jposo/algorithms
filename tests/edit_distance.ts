import { assertEquals } from "@std/assert";
import edit_distance from '../practice/23_edit_distance.ts';

Deno.test('coin_change', function addTest() {
  assertEquals(edit_distance('geek', 'gesek'), 1);
  assertEquals(edit_distance('cat', 'cut'), 1);
  assertEquals(edit_distance('sunday', 'saturday'), 3);
});
