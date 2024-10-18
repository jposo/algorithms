// now, dynamic programming
// problems from now on can be solved with recursion, or with dp
// you can solve it first with recursion, but implement a dp approach as well
// dynamic programming can be done with two approaches
// top-down and bottom down
// in top down, usually with memoization, we cache the results after they have been calculated
// can be down with a map or an array
// this is useful to avoid recalculating operations we already have calculated, which makes an algorithm so much faster
// you can test it, getting 100th fibonacci number with recursion alone takes forever
// with memoization, it is instant
// in bottom down, ...
// i still dont understand it xd
// you can research it, but basically we tabulate each result starting from the bottom to the top
// for example, in fibonacci with memoization, you start with n, then n - 1 + n - 2, then (n-1) - 1 + (n-1) - 2, etc..
// but with tabulation (bottom-down), we start with 0, then 1, then 1, then 2, then 3, etc., until the nth number

// Get the nth number fron the fibonacci sequence using dynamic programming (memoization or tabulation, both for extra practice)
export default function fibonacci_dp(n: number): number {

}