import React from 'react'

export default function AnagramsComponent() {
    const[word, setWord] = React.useState('')
    
const findAnagramInWords = (word) => {
    let anagramArray = []
    for(let anaWord of words) {
        if(anaWord.split('').sort().join('') === word.split('').sort().join('')) {
            anagramArray.push(anaWord)
        }
    }
    // words.map((anaWord) => {
    //     if(anaWord.sort() === word.sort()) {
    //         anagramArray.push(anaWord);
    //     } else {
    //         console.log(anaWord)
    //     }
    // })
    console.log(anagramArray);
    return anagramArray;
}


const findAnagram = (input) => {
    let textInput = input.split('').sort().join('')
    let result = findAnagramInWords(textInput)
    console.log(result)
    results.append(result)
}

    return (
        <div>
            <input type="text" placeholder="Type word here" value={word} onChange={(e) => setWord(e.target.value)} />
            <p></p>
        </div>
    )
}