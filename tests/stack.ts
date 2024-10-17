import { assertEquals } from "@std/assert";
import stack from "../practice/7_stack.ts";

Deno.test('stack', function addTest() {
  const s = new stack();
  assertEquals(s.peek(), undefined, "empty stack peek should be undefined");
  s.push(3);
  s.push(5);
  s.push(7);
  assertEquals(s.length, 3, "length should be 3");
  assertEquals(s.peek(), 7);
  assertEquals(s.pop(), 7);
  assertEquals(s.pop(), 5);
  assertEquals(s.pop(), 3);
  assertEquals(s.pop(), undefined);
});