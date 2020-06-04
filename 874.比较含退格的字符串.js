/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 比较含退格的字符串
 */
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  let x = 0;
  let y = 0;
  let direction = 'N';
  let max = 0;
  let book = {};

  for (let i = 0; i < obstacles.length; i++) {
    book[obstacles[i].join(',')] = 1;
  }

  commands.forEach(command => {
    walk(command);
  });

  return max;

  function walk (command) {
    if (command === -2) {
      // 左转
      console.log('左转');
      switch (direction) {
        case 'N':
          direction = 'W';
          return false;
        case 'S':
          direction = 'E';
          return false;
        case 'W':
          direction = 'S';
          return false;
        case 'E':
          direction = 'N';
          return false;
      }
    } else if (command === -1) {
      // 右转
      console.log('右转');
      switch (direction) {
        case 'N':
          direction = 'E';
          return false; ;
        case 'S':
          direction = 'W';
          return false; ;
        case 'W':
          direction = 'N';
          return false; ;
        case 'E':
          direction = 'S';
          return false;
      }
    } else if (command >= 1 && command <= 9) {
      // 前进
      switch (direction) {
        case 'N':
          while (command--) {
            if (isObstacle(x, y + 1)) {
              getMaxDistance();
              return false; ;
            } else {
              y++;
            }
          }
          getMaxDistance();
          return false; ;
        case 'S':
          while (command--) {
            if (isObstacle(x, y - 1)) {
              getMaxDistance();
              return false; ;
            } else {
              y--;
            }
          }
          getMaxDistance();
          return false; ;
        case 'W':
          while (command--) {
            if (isObstacle(x - 1, y)) {
              getMaxDistance();
              return false; ;
            } else {
              x--;
            }
          }
          getMaxDistance();
          return false;
        case 'E':
          while (command--) {
            if (isObstacle(x + 1, y)) {
              getMaxDistance();
              return false; ;
            } else {
              x++;
            }
          }
          getMaxDistance();
          return false;
      }
    }
  }

  function isObstacle (x, y) {
    return book[`${x},${y}`] === 1;
  }

  function getMaxDistance () {
    let dd = x ** 2 + y ** 2;
    if (dd > max) {
      max = dd;
    }
  }
};
