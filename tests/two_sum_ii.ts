import { assertEquals } from "@std/assert";
import two_sum from '../practice/5.5_two_sum_ii.ts';

Deno.test('two_sum', function addTest() {
  assertEquals(two_sum([2,7,11,15], 9), [0, 1])
  assertEquals(two_sum([4, 7, 11, 14, 15, 21], 21), [1, 3])
});