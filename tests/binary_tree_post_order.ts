import { assertEquals } from "@std/assert";
import { tree } from "./tree.ts";
import post_order from '../practice/14_binary_tree_post_order.ts'

Deno.test("binary_tree_pre_order", function addTest() {
  assertEquals(post_order(tree), [
    7,
    5,
    15,
    10,
    29,
    45,
    30,
    100,
    50,
    20,
  ])
});