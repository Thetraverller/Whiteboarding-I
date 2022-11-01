function maxValue(array) {
    let max = null
    for (let i = 0 ; i < array.length; i++) {
        if (i > max || max === null) {
            max = i
        }
    }
    return console.log(max)

}


maxValue([12, 6, 43, 2]);  // => 43
maxValue([]);  // => null
maxValue([-4, -10, 0.43]);  // => 0.43
