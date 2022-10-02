// Assignment 1 (fibonacci sequence)

function fibs(n) {
  let array = [0, 1];
  if (n <= 2) {
    console.log("n should be at least 3");
    return;
  }
  for(let i = 2; i < n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array;
}

function fibsRec(n) {
  let array = [];

  function fibo(n) {
    if (n < 2) return n;
    else return fibo(n - 1) + fibo(n - 2);
  }

  for(let i = 0; i < n; i++) {
    array.push(fibo(i));
  }
  return array;
}

// Assignment 2 (merge sort)

let unsortedArray = [789, 5, 2, 15, 3, 6, 4];

function mergeTwoSorted(arr1, arr2) {
  let merged = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    if (arr1[leftIndex] < arr2[rightIndex]) {
      merged.push(arr1[leftIndex]);
      leftIndex++;
    } else {
      merged.push(arr2[rightIndex]);
      rightIndex++;
    }
  }

  return merged.concat(arr1.slice(leftIndex), arr2.slice(rightIndex));
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const firstArr = arr.slice(0, midIndex);
  const secondArr = arr.slice(midIndex);

  return mergeTwoSorted(mergeSort(firstArr), mergeSort(secondArr));
}

console.log("unsorted array: ", unsortedArray);
console.log("sorted array: ", mergeSort(unsortedArray));