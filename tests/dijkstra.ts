import { assertEquals } from "@std/assert";
import dijkstra from "../practice/18_dijkstra.ts";
import { list1 } from "./graph.ts";

Deno.test("dijkstra via adj list", function () {
    /// waht?
    // what..
    // what...
    assertEquals(dijkstra(0, 6, list1), [0, 1, 4, 5, 6]);
});
