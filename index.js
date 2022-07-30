//Input: s = "egg", t = "add"
//Output: true

let nums = [1, 4, 5, 4, 4, 6, 2, 3, 1];
let pivot = 4;

function swap(a, i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

const dutchNationalFlag = (nums, pivot) => {
  let lowBoundary = 0;
  let highBoundary = nums.length - 1;
  let i = 0;
  while (i <= highBoundary) {
    if (nums[i] < pivot) {
      swap(nums, i, lowBoundary);
      lowBoundary++;
      i++;
    } else if (nums[i] > pivot) {
      swap(nums, i, highBoundary);
      highBoundary--;
    } else {
      i++;
    }
  }
  console.log(nums);
};

console.log(dutchNationalFlag(nums, pivot));
