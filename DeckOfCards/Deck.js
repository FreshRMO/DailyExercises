//Deck class to more easily call later
class Deck {
  constructor() {
    this.deck = [];
    this.reset();
    this.shuffle()
  }

  //Deck reset function to return the deck to 50 cards
  reset(){
  this.deck = [];
    const suits = ['Hearts', "Spades", "Clubs", "Diamonds"]
    const values =["Ace",2,3,4,5,6,7,8,9,10,'Jack', 'Queen', 'King']

    for(let suit in suits){
      for (let value in values){
        this.deck.push(`${values[value]} of ${suits[suit]}`)
      }
    }
  }

  //Randomizes deck
  shuffle(){
    const { deck } = this
    let cardCount = deck.length, i
    while (cardCount) {
      i=Math.floor(Math.random()* cardCount--);

      [deck[cardCount], deck[i]]=[deck[i], deck[cardCount]]
    }

    return this
  }
  //Returns two random cards from the deck
  deal(){
    let hand = []
    let card1 =this.deck.shift()
    let card2 = this.deck.shift()
    return hand=[card1,card2]
  }
}

const deck1 =new Deck()
console.log(deck1.deck)
deck1.reset()
console.log(deck1.deck)
deck1.shuffle()
console.log(deck1.deck);
deck1.deal()
console.log(deck1.deal());
