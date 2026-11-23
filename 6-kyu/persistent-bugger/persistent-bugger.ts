export function persistence(num: number): number {
    let count: number = 0;
​
    function helper(num: number): number{
        let num_string = num.toString()
        let arr = num_string.split("")
        
        if (arr.length == 1){
            return count
        }
​
        else{
            count += 1;
            let product = arr.map((str) => Number(str)).reduce(
                (accumulator, currentValue) => {
                    return accumulator * currentValue
                }, 1)
                
            helper(product)
        }
        return count;
    }
​
    return helper(num)
}