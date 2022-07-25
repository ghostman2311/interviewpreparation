//Input: s = "egg", t = "add"
//Output: true

let strs = ["flower", "flow", "flight"];

//Output should be [7,5,2,2,1,0,0,2,2,3]

const longestCommon = (strs) => {
  if (strs.length === 0 || strs == null) {
    return "";
  }
  strs.sort();
  let i = 0;
  while (i < strs[0].length) {
    if (strs[0][i] !== strs[strs.length - 1][i]) {
      return strs[0].substring(0, i);
    }

    i++;
  }

  return strs[0];
};

console.log(longestCommon(strs));
