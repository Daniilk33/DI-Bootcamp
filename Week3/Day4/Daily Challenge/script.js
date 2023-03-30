const sentence =  " The movie is not that bad, I like it"
const wordNot = sentence.search("not")
const wordBad = sentence.search("bad")

if (wordNot===-1) {
 console.log(sentence)
} else if(wordNot<wordBad){
console.log('wordBad:', wordBad)
console.log('wordNot:', wordNot)

const firstPart=sentence.slice(0,wordNot)
const secondpart= sentence.slice(wordBad+3)
console.log(firstPart+"good" + secondpart)
} 

else { console.log(sentence)
}