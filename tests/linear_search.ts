import { assertEquals } from "@std/assert";
import linear_search from "../practice/1_linear_search.ts";

Deno.test("linear_search", function addTest() {
  assertEquals(linear_search([2, 8, 9, 10, 18, 5], 5), true);
  assertEquals(linear_search([2, 8, 9, 10, 18, 5], 10), true);
  assertEquals(linear_search([2, 8, 9, 10, 18, 5], 2), true);
  assertEquals(linear_search([2, 8, 9, 10, 18, 5], 18), true);
  assertEquals(linear_search([2, 8, 9, 10, 18, 5], 7), false);
  assertEquals(linear_search([], 1), false);
  assertEquals(linear_search([1, 2, 3, 4, 5], 1), true);
  assertEquals(linear_search([1, 2, 3, 4, 5], 5), true);
  assertEquals(linear_search([1, 2, 3, 4, 5], 6), false);
  assertEquals(linear_search([1, 2, 3, 4, 5], 0), false);
});
