class BlackJackGame {
    constructor(deckSize = 8) {
        this.players = [];
        this.dealer = new Player('dealer', strategy1);
        this.deck = new Deck(deckSize);
    }

    addPlayer(player) {
        this.players.push(player)
    }
    
    playRound() {
        this._initializeRound();

        for (const currentPlayer of this.players) {
            while (
                !currentPlayer.hand.isBusted() && 
                !currentPlayer.hand.has21() && 
                currentPlayer.hitOrStand(this.dealer.hand)
            ) {
                currentPlayer.addCardToHand(this.deck.drawCard());
            }
        }

        this._playDealer();
        this._compareWinningsToDealer();
        this._clearHands();
    }

   _initializeRound() {
        this._clearHands();
        // Pass out 2 cards to each player
        for (let i = 0 ; i < 2; i++) {
            for (const player of this.players) {
                player.addCardToHand(this.deck.drawCard())
            }
            this.dealer.addCardToHand(this.deck.drawCard())
        }
   }

   _playDealer() {
        while (
            !this.dealer.hand.isBusted() && 
            !this.dealer.hand.has21() && 
            this.dealer.hitOrStand()
        ) {
            this.dealer.addCardToHand(this.deck.drawCard());
        }
   }

   _compareWinningsToDealer() {
        this.dealer.printHand();
    
        this.players.forEach(player => {
            player.printHand();
            
            if (player.hand.isBusted()) {
                player.lose();
            } else if (this.dealer.hand.isBusted() && !player.hand.isBusted()) {
                player.win();
            } else if (this.dealer.hand.maxNonBustedValue() < player.hand.maxNonBustedValue()) {
                player.win();
            } else if (this.dealer.hand.maxNonBustedValue() === player.hand.maxNonBustedValue()) {
                player.tieGame();
            } else {
                player.lose();
            }
        })

   }

   _clearHands() {
        for (const player of this.players) {
            player.discardHand();
        }

        this.dealer.discardHand();
   }
}

class Deck {
    constructor(deckSize = 8) {
        this.deckSize = deckSize;
        this.deck = this.generateNewShuffledDeck(deckSize);
    }

    generateNewShuffledDeck(deckSize) {
        const suits = [
            "♠️", "❤️", "♣️", "♦️"
        ]
        
        const values = [
            {label: "A", value: 1},
            {label: "2", value: 2},
            {label: "3", value: 3},
            {label: "4", value: 4},
            {label: "5", value: 5},
            {label: "6", value: 6},
            {label: "7", value: 7},
            {label: "8", value: 8},
            {label: "9", value: 9},
            {label: "10", value: 10},
            {label: "J", value: 10},
            {label: "Q", value: 10},
            {label: "K", value: 10},
        ];
        
        const deck = [];
    
        for (let i = 0; i < deckSize; i++) {
            for (const suit of suits) {
                for (const {label, value} of values) {            
                    deck.push({label, value, suit});
                }
            }
        }
    
        return this._shuffleDeck(deck);
    }

    drawCard() {
        if (this.deck.length < 2) {
            this.deck = this.generateNewShuffledDeck(this.deckSize)
        }
        return this.deck.pop();
    }

    _shuffleDeck(deck) {
        deck.forEach((card, idx) => {
            const randomIdx = Math.floor(Math.random() * deck.length);
            const currentCard = deck[idx];
            const randomCard = deck[randomIdx];
            deck[idx] = randomCard;
            deck[randomIdx] = currentCard;
        });

        return deck;
    }
}

class Player {
    constructor(name, hitStrategy = strategy0) {
        this.name = name
        this.hand = new Hand();
        this.balance = Infinity;
        this.winCount = 0;
        this.loseCount = 0;
        this.tieGameCount = 0;
        this.hitStrategy = hitStrategy;
    }

    join(game) {
        game.addPlayer(this);
    }

    addCardToHand(card) {
        this.hand.addCard(card);
    }

    discardHand() {
        this.hand.discardHand();
    }

    hitOrStand(dealerHand) {
        return this.hitStrategy(this.hand, dealerHand);
    }

    win() {
        this.winCount++;
        debugPrint && console.log(`${this.name} won`)
    }

    lose() {
        this.loseCount++;
        debugPrint && console.log(`${this.name} lost`)
    }
    
    tieGame() {
        this.tieGameCount++;
        debugPrint && console.log(`${this.name} tied`)
    }

    printHand() {
        if (!debugPrint) return;

        console.table({
            name: this.name,
            hand: this.hand.printHand(),
            bestValue: this.hand.maxNonBustedValue()
        })
    }

    printStats() {
        console.table({
            strategy: this.hitStrategy.name,
            // name: this.name,
            winCount: this.winCount,
            loseCount: this.loseCount,
            tieGameCount: this.tieGameCount,
            totalGamesPlayed: this.winCount + this.loseCount + this.tieGameCount,
            "Win %": ((100 * this.winCount) / (this.winCount + this.loseCount + this.tieGameCount)).toFixed(2)
        })
    }
}

class Hand {
    constructor() {
        this.hand = [];
        this.values = [];
    }

    addCard(card) {
        this.hand.push(card);
        this.computeHandValues();
    }

    computeHandValues() {
        let values = [0];

        for (const card of this.hand) {
            const newValues = [];
            const potentialNewValues = [card.value];

            if (card.label === "A") potentialNewValues.push(11);

            for (const value of values) {
                for (const potentialNewValue of potentialNewValues) {
                    newValues.push(value + potentialNewValue)
                }
            }
            values = newValues
        }

        this.values = values;
    }

    discardHand() {
        this.hand = [];
    }

    has21() {
        return this.values.includes(21);
    }

    isBusted() {
        return this.values.every(value => value > 21);
    }

    maxNonBustedValue() {
        const nonBustedValues = this.values.filter(value => value <= 21);
        return Math.max(...nonBustedValues);
    }

    printHand() {
        return this.hand.map(hand => `${hand.label}${hand.suit}`).join(", ")
    }

    firstCardGreaterThan(value = 6) {
        return this.hand[0].value > value || this.hand[0].label === "A";
    }

    numCards () {
        return this.hand.length;
    }
}

function simulateGame(playerStrategy, rounds = 1000) {
    const myBlackJackGame = new BlackJackGame();
    const player = new Player("Player 1", playerStrategy)
    player.join(myBlackJackGame);

    for (let round = 0; round < rounds; round++) {
        debugPrint && console.log(`Round ${round + 1}`)
        myBlackJackGame.playRound();
        debugPrint && console.log();
        debugPrint && console.log();
    }

    player.printStats();
}






// PARAMS and STRATEGIES
const debugPrint = false;
const rounds = 100;

// Random 50/50
const strategy0 = () => Math.random() > 0.50;

// Hit if less than 17
const strategy1 = (playerHand) => playerHand.maxNonBustedValue < 17;

// Strategy 2
const strategy2 = (playerHand, dealerHand) => {
    if (
        dealerHand.firstCardGreaterThan(6) && 
        playerHand.numCards() === 2 && 
        playerHand.maxNonBustedValue >= 12 &&
        playerHand.maxNonBustedValue <= 16
    ) return true;
    
    if (playerHand.maxNonBustedValue < 12) return true;

    return false;
};

// Strategy 3
const strategy3 = (playerHand, dealerHand) => {
    if (
        dealerHand.firstCardGreaterThan(8) && 
        playerHand.numCards() === 2 && 
        (playerHand.hand[0].label === "A" && playerHand.hand[1].label === "7") &&
        (playerHand.hand[0].label === "7" && playerHand.hand[1].label === "A")
    ) return true;

    if (strategy2(playerHand, dealerHand)) return true;

    return false;
};






simulateGame(strategy0, rounds);
simulateGame(strategy1, rounds);
simulateGame(strategy2, rounds);
simulateGame(strategy3, rounds);