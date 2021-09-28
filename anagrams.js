// Your Code Here.
//create an object with the anagram solutions

//console.log(words[5].split('').sort().join(''));

//the html elements
const userInput = document.getElementById('textBox')
const submit = document.getElementById('submitButton')
const results = document.getElementById('anagrams')
const setsOfFive = document.getElementById('fiveAnagrams')
const fivePlusResults = document.getElementById('allSetsOfFive')
let anagramObject = {}

const submitInput = () => { //makes a function to submit the input so i can put it on the submit button and pressing enter on the keyboard
    let lowerWord = userInput.value
    let input = lowerWord.toLowerCase() // all the words are in lowercase
    findAnagram(input)
}

const findAnagramInWords = (word) => { //function that finds anagrams from a given word !!!!RETURNS AN OBJECT NOW!!!!
    //let anagramArray = [] //holds the words that are anagrams
    if(!anagramObject[word.split('').sort().join('')]) { // so the map function doesn't run if the anagram already exists on the object
        words.map((anaWord) => { //goes through all the words and finds the anagrams
            if(anaWord.split('').sort().join('') === word.split('').sort().join('')) { //taking the string and converting it into an array so it can be sorted to find the anagrams, i thought strings were already arrays, but i guess not
                if(anagramObject[anaWord.split('').sort().join('')]) { //creating an object to store the anagrams so a new array doesn't have to be created every time the function runs
                    anagramObject[anaWord.split('').sort().join('')].push(anaWord) //if the key exists, add the value to the array
                } else {
                    anagramObject = { [anaWord.split('').sort().join('')]: [anaWord] } //if the key doesn't exist, it creates a key value pair
                }
            }
        })
    }

    return anagramObject[word.split('').sort().join('')]

}

const findAnagram = (input) => { //puts the anagrams into the results div
    let result = findAnagramInWords(input).join(', '); //turns the array on the object into a string that can be written on the page
    results.innerText = '' //resets the results div when a new submission is made
    results.append(result)
}

submit.addEventListener('click', () => { //gets the input from the text box and runs the anagram function
    submitInput()
})

userInput.addEventListener('keydown', e => { //so pressing enter in the text box will submit the word
    if (e.keyCode === 13) {
        submitInput()
    }
})

const findMultipleAnagrams = () => { //it works, but it takes 15 minutes to complete
    let successArray = [] //the array of the succeeding anagrams

    for (let i = 0; i < words.length; i++) {
        if(words[i].length > 3 && !anagramObject[words[i].split('').sort().join('')]) { // this conditional should make it run much faster
            let currentWord = findAnagramInWords(words[i])//[words[i].split('').join('')] //gets an array of all anagrams of the current word
            if(currentWord.length >= 5 && !successArray.includes(currentWord.join(', '))) { //only add to the success array if it's at least five words and it doesn't match another array in the success array
                successArray.push(currentWord.join(', ')) //makes each array one value so it's easier to read
                console.log(currentWord)
            }
        }

    }
    
    return successArray//returns the success array
}

setsOfFive.addEventListener('click', () => { //what happens when the button for the intermediate challenge is clicked
    console.log('started successfully')
    let container = document.createElement('p') //creates an element to put it in
    let result = findMultipleAnagrams() //runs the function, currently running too slowly
    
    container.innerText = result //i don't think i need to stringify it if i'm setting it as inner text, but i might be wrong
    console.log(container) //just in case the above line doesn't run
    allSetsOfFive.append(container)
})