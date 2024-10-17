import { assertEquals } from "@std/assert";
import minheap from "../practice/17_minheap.ts";

Deno.test("minheap", function addTest() {
  const heap = new minheap();

  assertEquals(heap.length, 0);

  heap.insert(5);
  heap.insert(3);
  heap.insert(69);
  heap.insert(420);
  heap.insert(4);
  heap.insert(1);
  heap.insert(8);
  heap.insert(7);

  assertEquals(heap.length, 8);
  assertEquals(heap.delete(), 1);
  assertEquals(heap.delete(), 3);
  assertEquals(heap.delete(), 4);
  assertEquals(heap.delete(), 5);
  assertEquals(heap.length, 4);
  assertEquals(heap.delete(), 7);
  assertEquals(heap.delete(), 8);
  assertEquals(heap.delete(), 69);
  assertEquals(heap.delete(), 420);
  assertEquals(heap.length, 0);
});