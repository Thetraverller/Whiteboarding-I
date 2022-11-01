function abbreviate(sentence) {
        let vowels = `aeiou`
        let copy = sentence.split("")
        let revArr = []

        for(let i = 0; i < copy.length; i++) {
            let char = copy[i]

            if (!vowels.includes(char)){
                revArr.push(char)
            }
        }
        return console.log(revArr.join(""))

}

//did remove vowels instead

abbreviate('the bootcamp is fun'); // => 'the btcmp is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
