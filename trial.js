let hands = ['rock', 'paper', 'scissors']

function getRandom(){
    let randomHand = Math.floor(Math.random() * hands.length)

    return hands[randomHand]

   
}

console.log(getRandom())