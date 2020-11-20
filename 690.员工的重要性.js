/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
  let employee = employees.find(item => item.id === id)
  console.log(employee)
  let res = employee.importance
  employee.subordinates.forEach(id => {
    res += GetImportance(employees, id)
  })
  return res
};
// @lc code=end

