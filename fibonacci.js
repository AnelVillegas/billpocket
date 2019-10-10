function fibonacci(n) {
    let num = [0, 1];
    for (let i=2; i<n; i++) {
        num.push(num[i-2] + num[i-1])
    }
    return num
}
console.log (fibonacci(8))