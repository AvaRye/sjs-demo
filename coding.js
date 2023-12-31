const merge1 = (nums1, m, nums2, n) => {
  // 最简单的思路，遍历第二个数组，当值不大于第一个数组的值时插入并进行下一次比对
  for (let i = 0; i < n; i++) { // 第二个数组
    for (let j = 0; j < nums1.length; j++) { // 第一个数组
      if (nums2[i] <= nums1[j]) {
        nums1.splice(j, 0, nums2[i]); // 不大于时插入
        break;
      }
      if (j === nums1.length - 1) { // 如果到达了第一个数组最后一个还没有插入就push到最后
        nums1.push(nums2[i]);
        break;
      }
    }
  }
};

const merge2 = (nums1, m, nums2, n) => {
  // 优化流程，使用temp记录最新插入位置，避免重复对比
  let temp = 0;
  for (let i = 0; i < n; i++) { // 第二个数组
    for (let j = temp; j < nums1.length; j++) { // 第一个数组
      if (nums2[i] <= nums1[j]) {
        nums1.splice(j, 0, nums2[i]); // 不大于时插入
        temp = j;
        break;
      }
      if (j === nums1.length - 1) { // 如果到达了第一个数组最后一个还没有插入就push到最后
        nums1.push(nums2[i]);
        break;
      }
    }
  }
};

const merge3 = (nums1, m, nums2, n) => {
  // 如果不限制必须严格操作第一个数组的话可以更简单
  let temp = nums1.concat(nums2).sort((a, b) => a - b);
  nums1.splice(0, m, ...temp);
};

// test
let num1 = [1, 2, 3, 5, 7, 7, 7, 7, 8];
let num2 = [0, 2, 3, 3, 4, 4, 5, 9, 10, 11];

merge2(num1, num1.length, num2, num2.length);
console.log('merged num1', num1);
