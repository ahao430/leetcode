/*
 * @lc app=leetcode.cn id=762 lang=javascript
 *
 * [762] Prime Number of Set Bits in Binary Representation
 */
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
  let count = 0;
  for (let num = L; num <= R; num++) {
    let ones = getOnes(num);
    if (isPrime(ones)) {
      count++;
    }
  }
  return count;
};

function getOnes (num) {
  let count = 0;
  while (num) {
    count += num & 1;
    num = num >> 1;
  }
  console.log(count);
  return count;
}

function isPrime (num) {
  // 输入限制在100，000的范围内，而2的20次方为1048576，所以只需要考虑20以内的质数。
  switch (num) {
    case 2:
    case 3:
    case 5:
    case 7:
    case 11:
    case 13:
    case 17:
    case 19:
      return true;
    default:
      return false;
  }
  // if (num <= 1) return false;
  // if (num === 2) return true;
  // if (num % 2 === 0) return false;

  // let book = {
  //   1: false,
  //   2: true,
  //   3: true,
  // };

  // if (book[num] != null) {
  //   return book[num];
  // }

  // let index = 3;
  // while (index < num) {
  //   if (num % index === 0) {
  //     book[num] = false;
  //     return false;
  //   }
  //   index += 2;
  //   while (book[index] === false) {
  //     index += 2;
  //   }
  // }
  // book[num] = true;
  // return true;
}
