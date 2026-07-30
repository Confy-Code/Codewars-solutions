function toWeirdCase(string) {
  let string_arr = string.split("");
  let left = 0;  // left pointer will move rightwards the given string
  
  for (let idx in string_arr) {
    let char = string_arr[idx];
    
    if (char === ' ') {
      left = 0;
      continue; // we reset the pointer to 0, and break from the loop
    }
    
    if (left % 2 === 0) {
      string_arr[idx] = char.toUpperCase();
    
        
    } else {
      string_arr[idx] = char.toLowerCase();
    }
    
    left++; 
  }
  
  return string_arr.join(""); 
}