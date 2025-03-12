 // Merge function to combine two sorted arrays
 function merge(left, right) {
    let mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from left and right arrays and merge them
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        mergedArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        mergedArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Concatenate any remaining elements in left and right
    return mergedArray.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  // Merge sort function using recursion
  function mergeSort(array) {
    // Base case: If the array has 1 or fewer elements, it is already sorted
    if (array.length <= 1) {
      return array;
    }
  
    // Calculate the middle index
    const middle = Math.floor(array.length / 2);
  
    // Recursively sort the left and right halves of the array
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));
  
    // Return the merged result of sorting the left and right halves
    return merge(left, right);
  }
  
  // Example usage: Perform merge sort on an array
  const inputArray = [34, 7, 23, 32, 5, 62];
  const sortedArray = mergeSort(inputArray);
  
  // Output the sorted array
  console.log(sortedArray);
  