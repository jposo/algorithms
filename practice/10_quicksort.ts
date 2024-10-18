// do quicksort
// steps of quicksort:
// 1. select a pivot index by partitioning the array so that the numbers left of a pivot 
// .. (you can chose last number of the partition) are smaller or equal to it, and the right numbers are bigger
// 2. using this pivot index as the center of the partition, call quicksort for each 
// .. side of the array [lo, partidx - 1] [partidx + 1, hi]
// 2. step 1 until you can no longer partition the array
// this algorithms works a lot like binary search, it has a low and high (choose exclusive or inclusive) variables
function qs(arr: number[], lo: number, hi: number) {

}

function partition(arr: number[], lo: number, hi: number): number {

}

export default function quicksort(arr: number[]): void {

}