function amIWilson(p){
  
  // In case we meet Big intergers like 563!
 // if we don't, our code will be limited to 64-bit numbers, which will cause malfunctioning.
    let P = BigInt(p)
​
    function factorial(num){
      // we use 1n ... to express Big integers in JS
        if(num <= 1n){return 1n;}
      
        let fact = 1n;
      
      // we use for ... loop instead of a simple recursion process, as recursing big integers can lead to 'Maximum stack depth reached' error
        for(let n = 2n; n <= num; n++){
            fact *= n;
        }
        return fact
    }
​
    const factorial_test = factorial(P - 1n) + 1n;
  
  // unlike normal numbers, Big integers doesn't support division. So we instead use the Modulo.
    const prime_test = factorial_test % (P *P);
​
    return prime_test === 0n;
}
​