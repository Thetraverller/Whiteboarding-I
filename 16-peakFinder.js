function peakFinder(array) {
    let arr = []

    for(let i = 0; i < array.length; i++){
        let num = array[i]
        let prev = array[i -1]
        let next = array[i +1]
        if (num > prev && num > next) {
            arr.push(i)
            }

                    if(!prev) {
                        if (num > next) {
                            arr.push(i)
                    }
                }
                if(!next) {
                    if (num > prev) {
                        arr.push(i)
                    }
                }
            }
        return arr
}


console.log(peakFinder([1, 2, 3, 2, 1])); // => [2]
console.log(peakFinder([2, 1, 2, 3, 4, 5])); // => [0, 5]
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // => [2, 6, 8]

// Write a function peakFinder(array) that takes in an array of numbers.
// It should return an array containing the indices of all the peaks.
// A peak is an element that is greater than both of its neighbors.
// If it is the first or last element, it is a peak if it is greater than its one neighbor.
// Assume the array has a length of at least 2.
