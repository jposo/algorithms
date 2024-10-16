import { assertEquals } from "@std/assert";
import edit_distance from '../practice/22_edit_distance.ts';

Deno.test('coin_change', function addTest() {
  assertEquals(edit_distance('geek', 'gesek'), 1);
});
