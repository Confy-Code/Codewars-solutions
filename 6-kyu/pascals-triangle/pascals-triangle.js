function pascalsTriangle(n) {
  //return a flat array representing the values of Pascal's Triangle to the n-th level
  
  let result = []
  
  function helper(n){
    if (n == 0){
      return [1]
    }
​
    let previous_row = helper(n - 1)
    result.push(...previous_row)
​
    
    let current_row = [1]
​
    for (let idx = 1; idx < n; idx ++){
      current_row.push(previous_row[idx - 1] + previous_row[idx])
    }
​
    current_row.push(1)
    
    return current_row
  }
  
  helper(n)
  return result
  
}
​
console.log(pascalsTriangle(4))