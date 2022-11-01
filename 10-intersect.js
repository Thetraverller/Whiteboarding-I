function intersect(arr1, arr2) {
        let int = []

        for(let i = 0; i < arr2.length; i++) {
            let el1 = arr2[i]
            for(let j = 0; j < arr1.length; j++) {
                let el2 = arr1[j]
                if (el1 === el2) {
                    int.push(el1)
                }
            }
        }
        return console.log(int)
}


intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) // => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) // => []
