let nums = [1, 1, 1, 1, 1];

function runningSum() {
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + sum;
    sum = nums[i];
  }
  return nums;
}

console.log(runningSum());
