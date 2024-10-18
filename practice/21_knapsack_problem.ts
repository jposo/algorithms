// given the capacity of a knapsack, and the profits and weights of the items, calculate the maximum sum of profits
// .. that can be put in the bag
// first tip of DP: most problems are going to be take and skip an item
// first, identify the base cases, when will the recursion stop?
// what conditions need to made to stop (aka, not returing any profit)?
// what happens if the current item exceeds our capacity? we should maybe skip it, no?
// how many options are there? take the profit, or skip it.
// out of these options, we should return the one that gives the best profits
export default function knapsack_problem(item_count: number, capacity: number, profits: number[], weights: number[]): number {

}
