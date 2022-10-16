let nums = [2, 4, 1, 0, 3];

function replaceEven(nums) {
  let i = nums.length - 1;
  let res = [...nums, -1, -1, -1];
  let j = res.length;

  while (i >= 0) {
    if (nums[i] % 2 === 0) {
      res[--j] = nums[i];
      res[--j] = nums[i];
    } else {
      j--;
      res[j] = nums[i];
    }
    i--;
  }

  return res;
}

console.log(replaceEven(nums));
