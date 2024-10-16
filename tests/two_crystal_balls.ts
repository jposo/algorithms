import { assertEquals } from "@std/assert";
import two_crystal_balls from "../practice/4_two_crystal_balls.ts";

Deno.test("two_crystal_balls", function addTest() {
  const N = 1000; // floors
  const floors: boolean[] = new Array(N);
  floors.fill(false, 0, N);
  const BP = 600; // breakpoint
  floors.fill(true, BP, N);
  assertEquals(two_crystal_balls(floors), BP);
});