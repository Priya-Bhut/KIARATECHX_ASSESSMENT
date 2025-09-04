/* Find the longestConsecutive number */

function longestConsecutive(nums) {
  const numbers = new Set(nums);
  let longestValue = 0;

  for (let num of numbers) {
    //only check sequence start
    if (!numbers.has(num - 1)) {
      let length = 1;
      while (numbers.has(num + length)) {
        length++;
      }
      longestValue = Math.max(longestValue, length);
    }
  }
  return longestValue;
}

console.log(
  "The Longest Consecutive Sequence:- ",
  longestConsecutive([100, 4, 200, 1, 3, 2, 5])
);
