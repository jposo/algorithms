// recursion
// calling a function within itself until it reaches a base case
// under the hood, it acts as a stack
// you usually want to use recursion in another function
// there are 4 steps in recursion
// base cases: defines when the recursion will end (always assume calls are correct)
// pre (recursion): prepare before a recursion call
// recurse: call the function itself with a smaller version of its current call (to avoid infinite calls)
// post: do any job after a recursion (eg. return the value)

// given an array of strings, where the wall string represents a wall in a maze, find the path to 
// .. the end of the maze from the starting point
// take into account that accessing the maze is backwards, so maze[y][x]
// (Point = {x: number, y: number})

// (to create an empty array in JS -> new Array(N)
// you can fill it with a value with arr.fill(value);
export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

}