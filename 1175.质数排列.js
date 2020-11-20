/*
 * @lc app=leetcode.cn id=1175 lang=javascript
 *
 * [1175] 质数排列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
  let primes = []
  for (let i = 1; i <= n; i++) {
    if (checkPrime(i)) primes.push(i)
  }
  const primeCount = primes.length
  const maxPrime = Math.pow(10, 9) + 7
  return multi(An(primeCount), An(n - primeCount))

  function checkPrime (n) {
    if (n === 1) return false
    if (n === 2) return true
    if (n % 2 === 0) return false
    for (let i = 0; i < primes.length; i++) {
      if (n % primes[i] === 0) return false
    }
    return true
  }
  function An(n) {
    if (n === 0) return 1

    let res = 1
    let i = 1
    while (i <= n) {
      res *= i
      res %= maxPrime
      i++
    }
    return res
  }
  function multi(a,b) {
    //将b拆成2部分
    let t=Math.floor(b/100000),
        t2=b % 100000
    let sum=0
    for(let i=0;i<t;i++){
      sum=(sum+100000*a) % maxPrime
    }
    sum=(sum+t2*a)%maxPrime
    return sum
  }
}
// @lc code=end

