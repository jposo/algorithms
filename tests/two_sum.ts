import { assertEquals } from "@std/assert";
import two_sum from '../practice/5_two_sum.ts';

Deno.test('two_sum', function addTest() {
  assertEquals(two_sum([2,7,11,15], 9), [0, 1])
  assertEquals(two_sum([3,2,4], 6), [1, 2])
});