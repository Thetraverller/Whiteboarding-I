function reverseHyphenString(string) {
        let copy = string.split("-")
        let revArr = []

        for(let i = 0; i < copy.length; i++) {
            let el = copy[i]
            revArr.unshift(el)
        }
        return revArr.join("-")
}


console.log(reverseHyphenString("Go-to-the-store")) // => "store-the-to-Go"
console.log(reverseHyphenString("Jump,-jump-for-joy")) // => "joy-for-jump-Jump,"
