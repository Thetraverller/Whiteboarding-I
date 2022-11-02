function valueConcat(array, obj) {
    let arr = []


    for (let i = 0; i < array.length; i++) {
        if (!obj[array[i]]) {
            arr.push(array[i])
        }

        for( let key in obj){
            let value = obj[key]
            if (array[i] === key) {
                arr.push(key + value)
            }
        }

    }

    return console.log(arr)
}


const arr = ['alex', 'maurice', 'meagan', 'ali'];
const obj = { alex: 'bronca', ali: 'harris' }
valueConcat(arr, obj) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

valueConcat(['a', 'b', 'c'], { b: 2, c: 3 }) // => [ 'a', 'b2', 'c3' ]

// Write a function valueConcat(array, obj) that takes in an array
// and object The function should return a new array
// where each element is concatenated with it's corresponding value from the object.
