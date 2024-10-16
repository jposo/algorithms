import { assertEquals } from "@std/assert";
import lis from '../practice/19_longest_increasing_subsequence.ts';

Deno.test('fibonacci', function addTest() {
  assertEquals(lis([10,9,2,5,3,7,101,18]), 4);
  assertEquals(lis([0,1,0,3,2,3]), 4);
  assertEquals(lis([7,7,7,7,7,7,7]), 1);
});