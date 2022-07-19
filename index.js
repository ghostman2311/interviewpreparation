const arr = [1, 2, 3];

const findPivotIndex = (arr) => {
  let lhs = 0;
  let rhs = arr.reduce((acc, curr) => {
    return curr + acc;
  });

  let i = 0;

  while (i < arr.length) {
    lhs += arr[i];
    if (lhs === rhs) {
      return i;
    }

    rhs -= arr[i];
    i++;
  }

  return -1;
};

console.log(findPivotIndex(arr));
