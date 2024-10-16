import { assertEquals } from "@std/assert";
import binary_search from "../practice/2_binary_search.ts";

Deno.test("binary_search", function addTest() {
  assertEquals(binary_search([2, 5, 8, 9, 10, 18], 5), true);
  assertEquals(binary_search([2, 5, 8, 9, 10, 18], 4), false);
});