let nums = [-2, -3, 4, -1, -2, 1, 5, -1];

const maxSubArraySum = (nums) => {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let total = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      total = total + nums[j];
    }
    if (total > max) {
      max = total;
    }
  }

  return max;
};

console.log(maxSubArraySum(nums));
