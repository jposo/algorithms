import { assertEquals } from "@std/assert";
import knapsack from '../practice/20_knapsack_problem.ts';

Deno.test('knapsack', function addTest() {
  assertEquals(knapsack(3, 4, [1,2,3], [4,5,1]), 3);
  assertEquals(knapsack(3, 3, [1,2,3], [4,5,6]), 0);
});