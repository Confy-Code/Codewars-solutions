export function isValidIP(str: string): boolean {
  let arr: string[] = str.split(".");
​
  let padding_zeros_regex: RegExp = /^0+\d+/ 
  let space_regex: RegExp = /^\s+|\s+$/
  let exponential_regex: RegExp = /e/
​
  if (arr.length != 4){
    return false
  }
  
  for (let idx in arr){
    if (
        padding_zeros_regex.test(arr[idx]) ||
        space_regex.test(arr[idx]) ||
        exponential_regex.test(arr[idx]) ||
      
        arr[idx] == "" ||
      
        isNaN(Number(arr[idx])) || 
        Number(arr[idx]) > 255 || 
        Number(arr[idx]) < 0 || arr[idx] == '-0'
        ){
      return false
    }
  }
  
  return true
}