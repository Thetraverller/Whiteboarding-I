function isPassing(assessments) {
    let avg = null

    for(let assess of assessments) {
        for (let key in assess) {
        let value = assess[key]
        avg += value
        }
    }
    return console.log(70 <= (avg / assessments.length))
}

const assessments1 = [
    { number: 1, score: 60 },
    { number: 2, score: 90 },
    { number: 3, score: 80 },
    { number: 4, score: 100 },
    { number: 5, score: 85 }
  ];

  isPassing(assessments1) // => true


  const assessments2 = [
    { number: 1, score: 60 },
    { number: 2, score: 20 },
    { number: 3, score: 45 }
  ];

  isPassing(assessments2) // => false


// Write a function isPassing(assessments) that takes in an array of assessment objects.
// The function should return true if the average assessment score is at least 70.
// #It should return false otherwise.
