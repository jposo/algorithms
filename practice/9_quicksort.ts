// do quicksort
// steps of quicksort:
// 1. select a pivot index by partitioning the array so that the numbers left of a pivot (you can chose last number of the partition) are smaller or equal to it, and the right numbers are bigger
// 2. using this pivot index as the center of the partition, call quicksort twice for each side of the array [lo, partidx - 1] [partidx + 1, hi]
// 2. step 1 until you can no longer partition the array
// this algorithms works a lot like binary search, it has a low and high variables
function qs(arr: number[], lo: number, hi: number) {
  if (lo >= hi) {
    return;
  }
  const pivotIdx = partition(arr, lo, hi);

  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];
  let idx = lo - 1;
  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }
  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;
  return idx;
}

export default function quicksort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}