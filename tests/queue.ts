import { assertEquals } from "@std/assert";
import queue from "../practice/8_queue.ts";

Deno.test('queue', function addTest() {
  const q = new queue();
  assertEquals(q.peek(), undefined, "empty queue peek should be undefined");
  q.enqueue(3);
  q.enqueue(5);
  q.enqueue(7);
  assertEquals(q.length, 3, "length should be 3");
  assertEquals(q.peek(), 3);
  assertEquals(q.deque(), 3);
  assertEquals(q.deque(), 5);
  assertEquals(q.deque(), 7);
  assertEquals(q.deque(), undefined);
});