import { assertEquals } from "@std/assert";
import bfs from "../practice/11_binary_tree_bfs.ts";
import { tree } from "./tree.ts";

Deno.test("binary_tree_bfs", function addTest() {
  assertEquals(bfs(tree, 45), true);
  assertEquals(bfs(tree, 7), true);
  assertEquals(bfs(tree, 69), false);
});