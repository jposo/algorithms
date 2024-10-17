import { assertEquals } from "@std/assert";
import { tree } from "./tree.ts";
import in_order from '../practice/13_binary_tree_in_order.ts'

Deno.test("binary_tree_pre_order", function addTest() {
  assertEquals(in_order(tree), [
    5,
    7,
    10,
    15,
    20,
    29,
    30,
    45,
    50,
    100,
  ])
});