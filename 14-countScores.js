function countScores(people) {
    // Your code here
    // let obj = {};
    // people.forEach((person) => {
    //   let name = person.name;
    //   let score = person.score;   //accessing k-v pair in a variable

    //   if (obj[name] === undefined) {  //if not in obj then add current k-v pair
    //     obj[name] = score;
    //   } else {
    //     obj[name] += score;         // if in obj then add to score(i.e the value) of k-v pair
    //   }
    // });
    // return obj;
    let obj = {}
    for (let i = 0; i < people.length; i++) {
        let person = people[i]  //obj
        let name = person.name;
        let score = person.score;

        if(!obj[name]) {
            obj[name] = score    //adds current k-v pair
        } else {
            obj[name] += score   //adds score value
        }
    }
    return obj
  }

// Example 1:
const ppl = [
    { name: "Anthony", score: 10 },
    { name: "Fred", score : 10 },
    { name: "Anthony", score: -8 },
    { name: "Winnie", score: 12 }
  ];
  console.log(countScores(ppl)); // => { Anthony: 2, Fred: 10, Winnie: 12 }

  // Example 2
  const peeps = [
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 }
  ];

  console.log(countScores(peeps)); // => { Anthony: 4, Fred: 4, Winnie: 6 }
// Write a function countScores(people) that takes in an array of score objects, people, as its input.
// A score object, people, has two key-value pairs: a name (string) and a score (number).
// countScores(people) should return an object that has key-value pairs where each name is a key and the value is their total score.
