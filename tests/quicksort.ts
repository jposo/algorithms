import { assertEquals } from "@std/assert";
import quicksort from "../practice/9_quicksort.ts";

Deno.test("quicksort", function addTest() {
  const arr1 = [5, 3, 8, 1, 2];
  quicksort(arr1);
  assertEquals(arr1, [1, 2, 3, 5, 8]);

  const arr2 = [1, 2, 3, 4, 5];
  quicksort(arr2);
  assertEquals(arr2, [1, 2, 3, 4, 5]);

  const arr3 = [5, 4, 3, 2, 1];
  quicksort(arr3);
  assertEquals(arr3, [1, 2, 3, 4, 5]);

  const arr4: number[] = [];
  quicksort(arr4);
  assertEquals(arr4, []);

  const arr5 = [3];
  quicksort(arr5);
  assertEquals(arr5, [3]);

  const arr6 = [2, 1];
  quicksort(arr6);
  assertEquals(arr6, [1, 2]);
});