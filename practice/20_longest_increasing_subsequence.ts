// this problem is a little harder than the previous (just a little)
// return the length of the longest increasing subsequence of the given array
// example: input: [10,9,2,5,3,7,101,18] output: 4
// why? examples of lis in sequence: [2,3,7,101], [2,5,7,101], [2,3,7,18]
// first we need variable that will keep track of the max LIS count (set it to one, because [1] technically is incresing one time)
// then, begin at the end of the array, call it i
// then compare if any previous values in the array, indexed j, before i are smaller (we are increasing)
// recurse, setting i to be j
// we set the return value + 1 (because we already compared that it is smaller) to max if it 
// .. is bigger than what we already have stored
// what would be the base case? if the are at the end (or beginning) of the array 
export default function lis(sequence: number[]): number {

}