function printReverse(min, max) {
    let arr =[]
    for(let i = max - 1; i > min; i--) {
        arr.push(i)
    }
    return console.log(arr)
}

printReverse(13, 18) // => [17, 16, 15, 14]
printReverse(90, 94) // => [93, 92, 91]
