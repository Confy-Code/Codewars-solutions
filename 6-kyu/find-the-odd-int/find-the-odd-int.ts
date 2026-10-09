export const findOdd = (xs: number[]): number => {
  if(xs.length == 1){  // if the length is 1, it is always at the odd position
    return xs[0]
  }
​
  type obj = {[key: string] : number}   // specify the type of the object to avoid compile errors
​
  let counter: obj = {}
  
  for(let element of xs){    // O(n) move
    counter[element] >= 1 ? counter[element] += 1 : counter[element] = 1;
  }
​
  for (let key in counter){  // Another O(n) move
    if (counter[key] % 2 !== 0){         // O(1) move - Arithmetic check
        return Number(key);}  // converting it to Number as the functions returns a number type (not a string)
  }
   
  return 0;
};
​