function fizzBuzz(n) {
    let arr =[]
    for(let i = 1; i < n; i++) {
        if((i % 3 === 0 || i % 5 === 0 ) && !(i % 3 === 0 && i % 5 === 0)){
            arr.push(i)
        }
    }
    return console.log(arr)
}

fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18]

// Define a function fizzBuzz(max) that takes a number and returns an array of every number from 0 to max that is divisible by either 3 or 5,
//  but not both.
