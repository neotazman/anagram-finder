// Your Code Here.

console.log(words[5].split('').sort().join(''));

const userInput = document.getElementById('textBox')
const submit = document.getElementById('submitButton')
const results = document.getElementById('anagrams')

const findAnagramInWords = (word) => {
    let anagramArray = []

    words.map((anaWord) => {
        if(anaWord.split('').sort().join('') === word.split('').sort().join('')) {
            anagramArray.push(anaWord);
        }
    })
    console.log(anagramArray);
    return anagramArray.join(', ');
}


const findAnagram = (input) => {
    let result = findAnagramInWords(input)
    results.innerText = ''
    results.append(result)
}

// findAnagram('lair')

submit.addEventListener('click', () => {
    let lowerWord = userInput.value
    let input = lowerWord.toLowerCase()
    findAnagram(input)
})
