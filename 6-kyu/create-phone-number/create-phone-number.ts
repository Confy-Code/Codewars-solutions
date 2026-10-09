export function createPhoneNumber(numbers: number[]): string {
    const code = numbers.splice(0, 3).join("");
    
    const middle_phone = numbers.splice(0, 3).join("")
​
    const ending_phone = numbers.join("")
​
    return `(${code}) ${middle_phone}-${ending_phone}`
}
​