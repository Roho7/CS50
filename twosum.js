var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        console.log([i, j]);
      }
    }
  }
};
twoSum([1, 2, 3, 4, 5, 6, 7], 12);
