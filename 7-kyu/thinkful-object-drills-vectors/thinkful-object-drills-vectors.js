class Vector{
  // Your code here.
  
  constructor(x, y){
    this.x = x,
    this.y = y
  }
  
  add(subvector){
    let x_result = this.x + subvector.x
    let y_result = this.y + subvector.y
​
    return new Vector(x_result, y_result)
    
  }
}