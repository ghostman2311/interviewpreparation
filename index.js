let nums = [-9, 2, 1, -4, 2, 3, -1, 2];
function prefixSum() {
  let sum = 0;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === 0) {
      return [0, i];
    } else if (map.has(sum)) {
      return [map.get(sum) + 1, i];
    } else {
      map.set(sum, i);
    }
  }

  return null;
}

console.log(prefixSum());
