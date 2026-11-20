function order(words){
    if (words == ""){return ""}
    let regex = /(?<digit>\d)/
​
    let words_arr = words.split(" ")
    let result_arr = []
    
    words_arr.map((word) => {
        let regexObj = word.match(regex)
        let digit = regexObj.groups.digit
        result_arr[Number(digit) - 1] = word
    })
​
    return result_arr.join(" ")
}