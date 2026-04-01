function isPrime(number) {
  if(number < 2){
    return false;
  }
  
  if(number % 2 == 0){
    return number === 2;
  }
  
  for(let divisor = 3; divisor * divisor <= number; divisor += 2){
    if(number % divisor == 0){
      return false;
    }
    
  }
​
  return true
}
​
function getPrimes(start, finish) {
  start_point = Math.min(start, finish);
  finish_point = Math.max(start, finish);