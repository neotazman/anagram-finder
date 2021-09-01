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
    return anagramArray
}

const findAnagram = (input) => { //puts the anagrams into the results div
    let result = findAnagramInWords(input).join(', '); //turns the array into a string that can be written on the page
    results.innerText = '' //resets the results div when a new submission is made
    results.append(result)
}

submit.addEventListener('click', () => { //gets the input from the text box and runs the anagram function
    let lowerWord = userInput.value
    let input = lowerWord.toLowerCase() // all the words are in lowercase
    findAnagram(input)
})

const findMultipleAnagrams = () => { //it's not complete, but it want to get to a point where i can check if it's working
    let outsideArray = [] //declaring the array so it doesn't have to be declared multiple times
    let successArray = [] //the array of the succeeding anagrams
    for (let i = 0; i < words.length; i++) {
        let currentWord = findAnagramInWords(words[i])
        if(currentWord.length >= 5) {
            successArray.push(currentWord.join(', '))
        }
    //     outsideArray = [words[i]] //resets the temporary array //makes sure the current word is added to the temporary array
    //     for(let j = i + 1; j < words.length; j++) {
    //         if(words[i].split('').sort() === words[j].split('').sort()) { //compares each word to each subsequent word
    //             outsideArray.push(words[j])
    //         }
    //     }
    //     if(outsideArray.length >= 5) { //if the temporary array has 5 or more values, it turns it into a string and adds it to the success array
    //         successArray.push(outsideArray.join(', '))
    //         console.log(successArray)
    //     }
    }
    return successArray//returns the success array, but somehow it acts like an infinite loop before it gets to this point
}
