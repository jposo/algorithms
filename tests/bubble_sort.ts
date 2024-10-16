import { assertEquals } from "@std/assert";
import bubble_sort from "../practice/3_bubble_sort.ts";

Deno.test("bubble_sort", function addTest() {
  const arr1 = [5, 3, 8, 1, 2];
  bubble_sort(arr1);
  assertEquals(arr1, [1, 2, 3, 5, 8]);

  const arr2 = [1, 2, 3, 4, 5];
  bubble_sort(arr2);
  assertEquals(arr2, [1, 2, 3, 4, 5]);

  const arr3 = [5, 4, 3, 2, 1];
  bubble_sort(arr3);
  assertEquals(arr3, [1, 2, 3, 4, 5]);

  const arr4: number[] = [];
  bubble_sort(arr4);
  assertEquals(arr4, []);

  const arr5 = [3];
  bubble_sort(arr5);
  assertEquals(arr5, [3]);

  const arr6 = [2, 1];
  bubble_sort(arr6);
  assertEquals(arr6, [1, 2]);
});