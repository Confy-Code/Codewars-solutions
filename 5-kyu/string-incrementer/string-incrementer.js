let leading_zeros = /^(?<zeros>0+)(?<non_zeros>\d+)$/
​
function handle_leading_zeros(digits){
    const match_zeros = digits.match(leading_zeros);
​
    const zeros = match_zeros.groups.zeros
    const non_zeros = match_zeros.groups.non_zeros
    
    return [zeros, non_zeros]
}
​
function incrementString (strng) {
    const regex = /^(?<chars>[A-Za-z0-9]+[A-Za-z]+)(?<digits>\d+)$/
​
    if (regex.test(strng)){
        const match = strng.match(regex)
        let chars = match.groups.chars
        let digits = match.groups.digits;
​
        if (leading_zeros.test(digits)){
            let [zeros, _] = handle_leading_zeros(digits)
            let leading_digits  = zeros + (Number(digits) + 1);
​
            if (digits.length !== leading_digits.length){
                let number_of_zeros = zeros.length - 1
                zeros = "0".repeat(number_of_zeros)
            }
​
            return chars + zeros + (Number(digits) + 1)    
        }
​
        else{
            return chars + (Number(digits) + 1)
        }
    }
    
    else if (leading_zeros.test(strng)){
        let [zeros, non_zeros] = handle_leading_zeros(strng)
        let leading_digits  = zeros + (Number(non_zeros) + 1);
        
        if (strng.length !== leading_digits.length){
            let number_of_zeros = zeros.length - 1
            zeros = "0".repeat(number_of_zeros)
        }
​
        return zeros + (Number(non_zeros) + 1)
        
    }
​
    else if (!isNaN(Number(strng))){ return (Number(strng) + 1).toString() }
    else { return (strng + 1) }
}