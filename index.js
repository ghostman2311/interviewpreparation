// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

let nums = [1, 7, 3, 6, 5, 6];
function pivtotIndex() {
  let left = 0;
  let currentWeight;
  let right = nums.reduce((acc, curr) => acc + curr),
    i = 0;
  while (i < nums.length) {
    currentWeight = nums[i];
    right = right - currentWeight;
    if (left === right) {
      return i;
    }

    left = left + currentWeight;
    i++;
  }

  return -1;
}

console.log(pivtotIndex());
