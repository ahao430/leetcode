/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */
/**
 * @param {number} num
 * @return {string[]}
 */
// var readBinaryWatch = function (num) {
//   if (num === 0) return ['0:00'];

//   let h = 0;
//   let m = 0;
//   let arr = [];
//   for (let i = 0; i <= num && i <= 4; i++) {
//     let harr = getArr(4, i);
//     let marr = getArr(6, num - i);
//     for (let i = 0; i < harr.length; i++) {
//       for (let j = 0; j < marr.length; j++) {
//         let fh = Number.parseInt(harr[i], 2);
//         let fm = Number.parseInt(marr[j], 2);
//         if (fh < 12 && fm < 60) {
//           arr.push(format(fh, fm));
//         }
//       }
//     }
//   }
//   return arr.sort();

//   function getArr (total, num) {
//     let res = [];
//     if (num === 0) {
//       let str = '0'.repeat(total);
//       res.push(str);
//     } else {
//       for (let i = 0; i < total; i++) {
//         let str = '0'.repeat(i) + '1';
//         res.push(...getArr(total - 1 - i, num - 1).map(item => str + item));
//       }
//     }
//     return res;
//   }

//   function format (h, m) {
//     return h + ':' + m.toString().padStart(2, '0');
//   }
// };

var readBinaryWatch = function (num) {
  let res = [];
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      if (getOneCount(i, j) === num) {
        res.push(i + ':' + j.toString().padStart(2, '0'));
      }
    }
  }
  return res;

  function getOneCount (i, j) {
    let str = i.toString(2) + j.toString(2);
    return str.replace(/[^1]/g, '').length;
  }
};
