import { assertEquals } from "@std/assert";
import dfs from "../practice/14_binary_tree_dfs.ts";
import { tree } from "./tree.ts";

Deno.test("binary_tree_dfs", function addTest() {
  assertEquals(dfs(tree, 45), true);
  assertEquals(dfs(tree, 7), true);
  assertEquals(dfs(tree, 69), false);
});