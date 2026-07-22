function comp(array1, array2){
  //your code here
  if(!array1 || !array2){
    return false
  }
  
  const my_array = array1.map(num => num * num)
  
  my_array.sort((a, b) => a-b)
  array2.sort((a, b) => a-b)
  
  return my_array.toString() === array2.toString()
}