let nums = [-2, -3, 4, -1, -2, 1, 5, -1];

function max(i, j) {
  if (i > j) {
    return i;
  }

  return j;
}

const kadaneAlgo = (nums) => {
  let result = nums[0];
  let maxEndingHere = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = max(nums[i], maxEndingHere + nums[i]);
    if (result < maxEndingHere) {
      result = maxEndingHere;
    }
  }
  return result;
};

console.log(kadaneAlgo(nums));
