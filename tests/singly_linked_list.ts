import { assertEquals } from "@std/assert";
import singly_linked_list from "../practice/5_singly_linked_list.ts";

Deno.test("singly_linked_list", function addTest() {
  const sll = new singly_linked_list();
  assertEquals(sll.get(0), undefined);
  sll.append(2);
  sll.append(3);
  sll.append(5);
  assertEquals(sll.get(2), 5, "2nd element must be 5");
  sll.prepend(1);
  assertEquals(sll.get(0), 1, "0th item must be 1");
  sll.insertAt(4, 3);
  assertEquals(sll.get(3), 4, "3rd item must be 4");
  sll.remove(2);
  sll.removeAt(0);
  assertEquals(sll.get(0), 3, "0th item must be 3");
  assertEquals(sll.length, 3, "length must be 3");
});