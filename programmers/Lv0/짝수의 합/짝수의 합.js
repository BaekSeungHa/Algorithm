function solution(n) {
  let temp = 0;
  for (let i = 2; i <= n; i += 2) temp += i;
  return temp;
}
