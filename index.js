//Input: s = "egg", t = "add"
//Output: true

let nums = [1, 7, 3, 6, 5, 6];
//Output should be [7,5,2,2,1,0,0,2,2,3]

const pivotIndex = (nums) => {
  let lhs = 0;
  let rhs = nums.reduce((acc, curr) => acc + curr);

  let i = 0;
  for (; i < nums.length; i++) {
    lhs = lhs + nums[i];
    if (lhs === rhs) {
      return i;
    }

    rhs = rhs - nums[i];
  }

  return -1;
};

console.log(pivotIndex(nums));
