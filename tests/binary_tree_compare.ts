import { assertEquals } from "@std/assert";
import compare from "../practice/15_binary_tree_compare.ts";
import { tree, tree2 } from "./tree.ts";

Deno.test("binary_tree_compare", function addTest() {
    assertEquals(compare(tree, tree), true);
    assertEquals(compare(tree, tree2), false)
});