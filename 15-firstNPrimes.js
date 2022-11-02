function firstNPrimes(n) {
       let arr = []
       for(let i = 0; n > arr.length; i++) {
            if (isPrime(i)===true)
            arr.push(i)
       }
       return console.log(arr)
}

let isPrime = function(n) {
    if (n < 2) {
        return false
    }
    for(let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

firstNPrimes(0);  // => []
firstNPrimes(1);  // => [2]
firstNPrimes(4);  // => [2, 3, 5, 7]
