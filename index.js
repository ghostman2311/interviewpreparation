let nums = [5, 3, 1, 7, 6, 4, 2, 3];

const slidingWindow = (nums, target) => {
  let sum = nums[0];
  let start = 0;
  let end = 0;

  while (end < nums.length - 1) {
    if (sum < target) {
      sum = sum + nums[++end];
    } else if (sum > target) {
      sum = sum - nums[start++];
    } else return [start, end];

    console.log(sum, start, end);
  }
};

console.log(slidingWindow(nums, 14));
