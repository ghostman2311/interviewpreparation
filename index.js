// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

function runningSum(arr) {
  let sum = 0;
  const results = arr.map((item) => {
    sum = sum + item;
    return sum;
  });

  return results;
}

const arr = [1, 2, 3, 4];

console.log(runningSum(arr));
