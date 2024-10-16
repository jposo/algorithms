import { assertEquals } from "@std/assert";
import fibonacci from '../practice/18_fibonacci.ts';

Deno.test('fibonacci', function addTest() {
  assertEquals(fibonacci(11), 89);
  assertEquals(fibonacci(1), 1);
  assertEquals(fibonacci(0), 0);
});