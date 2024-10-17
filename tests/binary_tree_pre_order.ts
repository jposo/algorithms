import { assertEquals } from "@std/assert";
import { tree } from "./tree.ts";
import pre_order from '../practice/12_binary_tree_pre_order.ts'

Deno.test("binary_tree_pre_order", function addTest() {
  assertEquals(pre_order(tree), [
    20,
    10,
    5,
    7,
    15,
    50,
    30,
    29,
    45,
    100,
  ])
});