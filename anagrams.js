// Your Code Here.

//console.log(words[5].split('').sort().join(''));

//the html elements
const userInput = document.getElementById('textBox')
const submit = document.getElementById('submitButton')
const results = document.getElementById('anagrams')

const submitInput = () => { //makes a function to submit the input so i can put it on the submit button and pressing enter on the keyboard
    let lowerWord = userInput.value
    let input = lowerWord.toLowerCase() // all the words are in lowercase
    findAnagram(input)
}

const findAnagramInWords = (word) => { //function that finds anagrams from a given word
    let anagramArray = [] //holds the words that are anagrams

    words.map((anaWord) => { //goes through all the words and finds the anagrams
        if(anaWord.split('').sort().join('') === word.split('').sort().join('')) { //taking the string and converting it into an array so it can be sorted to find the anagrams, i thought strings were already arrays, but i guess not
            anagramArray.push(anaWord);
        }
    })
    return anagramArray
}

const findAnagram = (input) => { //puts the anagrams into the results div
    let result = findAnagramInWords(input).join(', '); //turns the array into a string that can be written on the page
    results.innerText = '' //resets the results div when a new submission is made
    results.append(result)
}

submit.addEventListener('click', () => { //gets the input from the text box and runs the anagram function
    submitInput()
})

userInput.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
        submitInput()
    }
})

const findMultipleAnagrams = () => { //it's not complete, but it want to get to a point where i can check if it's working
    let successArray = [] //the array of the succeeding anagrams

    for (let i = 0; i < words.length; i++) {
        let currentWord = findAnagramInWords(words[i]) //gets an array of all anagrams of the current word
        if(currentWord.length >= 5) { //only add to the success array if it's at least five words
            successArray.push(currentWord.join(', ')) //makes each array one value so it's easier to read
        }
    }
    
    return successArray//returns the success array, but somehow it acts like an infinite loop before it gets to this point
}
