// Your Code Here.

//console.log(words[5].split('').sort().join(''));

//the html elements
const userInput = document.getElementById('textBox')
const submit = document.getElementById('submitButton')
const results = document.getElementById('anagrams')

const findAnagramInWords = (word) => { //function that finds anagrams from a given word
    let anagramArray = [] //holds the words that are anagrams

    words.map((anaWord) => { //goes through all the words and finds the anagrams
        if(anaWord.split('').sort().join('') === word.split('').sort().join('')) { //taking the string and converting it into an array so it can be sorted to find the anagrams, i thought strings were already arrays, but i guess not
            anagramArray.push(anaWord);
        }
    })
    console.log(anagramArray);
    return anagramArray.join(', '); //turns the array into a string that can be written on the page
}

const findAnagram = (input) => { //puts the anagrams into the results div
    let result = findAnagramInWords(input)
    results.innerText = '' //resets the results div when a new submission is made
    results.append(result)
}

submit.addEventListener('click', () => { //gets the input from the text box and runs the anagram function
    let lowerWord = userInput.value
    let input = lowerWord.toLowerCase() // all the words are in lowercase
    findAnagram(input)
})
