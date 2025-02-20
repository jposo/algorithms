// there are two main algorithms for searching an item or traversing a binary tree, bfs and dfs
// in a binary tree, a node may only have up to two children
// in bfs, it keeps adding the children of the current node to a queue.
// if gets the next node of the queue and does the same until there are no items left in the queue
// in a graph, you need to keep track of the items being visited
// but in trees, we are going from the root to the leaves, so there is no need to do that here

// create a Breadth-first-search (iterative) function to check if a value in a binary tree exists
// use an array instead of a queue for simplicity (use shift() function to get the next element of the queue)
export default function bfs(head: BinaryNode<number>, needle: number): boolean {

}