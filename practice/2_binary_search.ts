// an important questions to ask in a problem is if the given array is sorted
// if it is, we can use binary search instead of linearly searching for a faster search
// in binary search, we have a low and high variables, indicating the start and end of an subarray
// (important: make sure you keep in mind whether your high is inclusive or exclusive)
// we than take the midpoint between the two points and see if this value is the value we are looking for
// if not, we can set the low and high to the side we are now searching in
// the loop ends until the low is now higher than high, indicating that the value was not found
export default function binary_search(haystack: number[], needle: number): boolean {

}