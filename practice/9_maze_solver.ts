// recursion
// calling a function within itself until it reaches a base case
// under the hood, it acts as a stack
// you usually want to use recursion in another function
// there are 4 steps in recursion
// base cases: defines when the recursion will end (always assume calls are correct)
// pre (recursion): prepare before a recursion call
// recurse: call the function itself with a smaller version of its current call (to avoid infinite calls)
// post: do any job after a recursion (eg. return the value)

// given an array of strings, where the wall string represents a wall in a maze, calculate the path to find the end point fron the start point
// take into account that accessing the maze is backwards, so maze[y][x]
// (Point = {x: number, y: number})
const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function explore(maze: string[], wall: string, end: Point, curr: Point, path: Point[], seen: boolean[][]): boolean {
  // base cases
  if (curr.x < 0 || curr.x >= maze[0].length) {
    return false;
  }
  if (curr.y < 0 || curr.y >= maze.length) {
    return false;
  }
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }
  if (seen[curr.y][curr.x]) {
    return false;
  }
  if (curr.x === end.x && curr.y === end.y) {
    path.push(curr);
    return true;
  }
  // pre
  path.push(curr);
  seen[curr.y][curr.x] = true;
  // recurse
  for (let i = 0; i < dirs.length; i++) {
    const [x, y] = dirs[i];
    if (explore(maze, wall, end, {
      x: curr.x + x, 
      y: curr.y + y,
    }, path, seen)) {
      return true;
    }
  }
  // post
  path.pop();
  return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const path: Point[] = [];
  const seen: boolean[][] = [];
  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }
  explore(maze, wall, end, start, path, seen);
  return path;
}