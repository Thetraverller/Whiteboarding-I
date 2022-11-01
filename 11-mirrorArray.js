function mirrorArray(array) {
    let copy = [...array]
    return array.concat(copy.reverse())

}

console.log(mirrorArray([1,2,3]));
  // => [ 1, 2, 3, 3, 2, 1 ]
  console.log(mirrorArray(['a', 'b', 'c', 'd']));
  // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
