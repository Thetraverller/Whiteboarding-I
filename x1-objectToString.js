function objectToString(count) {
    let str = "-"

    for(let key in count) {
        let value = count[key]
        for (let i = 0; i < value; i++){
        str += key
        }
    }
    return console.log(str)
}


objectToString({ a : 2, b: 4, c: 1 }) // => 'aabbbbc'
objectToString({ b: 1, o: 2, t: 1 }) // => 'boot'
// Write a function objectToString(count) that takes in a char count object
// and returns a string representing the counts of each character.
