//Input: s = "egg", t = "add"
//Output: true

let arr = [7, 5, 2, 1, 0, 2, 3];

//Output should be [7,5,2,2,1,0,0,2,2,3]

const duplicates = (arr) => {
  const map = new Map();
  const result = arr.some((item) => {
    if (map.has(item)) {
      return true;
    }
    map.set(item, true);
  });

  if (result) return result;
  return false;
};

console.log(duplicates(arr));
