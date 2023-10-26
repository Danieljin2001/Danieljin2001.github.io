let PLAYERS;
let INTERVAL;
let PLAYER_PLAYING_INDEX;
let PLAYER_WON;

const Type = {
    Defense: "defense",
    Attack: "attack"
}



class Card {
    constructor(image, level, type){
        this.type = type;
        this.frontImage = image;
        this.backImage;
        this.level = level;
        if(type == Type.Attack){
            this.backImage = "../card-images/red_back.png";
        } else {
            this.backImage = "../card-images/blue_back.png";
        }
    }

    getLevel(){
        return this.level;
    }

    getInfo(){
        return "<p><b>Type:</b> " + this.type + "</p>" +"<p><b>Level:</b> " + this.level + "</p>" + "<p><b>Info:</b> " + "</p>";
    }
    
    
}

class Deck {
    constructor(type){
        this.type = type;
        this.cards = [];
        this.setupDeck();
    }
    setupDeck() {
        for(let i = 1; i <= 10; i++){
            let name ="../card-images/"+ i +"_of_";
            if(this.type == Type.Attack){
                name = name + "hearts.png";
            } else {
                name = name + "spades.png";
            }
            this.cards.push(new Card(name, i, this.type));
        }
        this.shuffle();
    }
    resetDeck() {
        this.cards = [];
        this.setupDeck();
    }

    addWinningDeck(winnningDeck){
        if(this.isEmpty){
            this.cards = winnningDeck;
            this.shuffle();

        } else {
            throw new Error("Dont add winnning deck since current deck is not empty.");
        }
    }

    drawCard() {
        return this.cards.pop();
    }

    getType() {
        return this.type;
    }

    shuffle(){
        this.cards = this.cards.sort((a, b) => 0.5 - Math.random());
        this.cards = this.cards.sort((a, b) => 0.5 - Math.random());
        this.cards = this.cards.sort((a, b) => 0.5 - Math.random());
        this.cards = this.cards.sort((a, b) => 0.5 - Math.random());
    }

    isEmpty(){
        return !this.cards.length;
    }

    getSize(){
        return this.cards.length;
    }
    
}

class Player {
    constructor(name, deck){
        this.wins = 0;
        this.type = deck.getType();
        this.name = name;
        this.played = false;
        this.deck = deck;
        this.card = null;
        this.wonDeck = [];
    }
    newRound(){
        this.played = false;
    }

    getWinningDeckSize(){
        return this.wonDeck.length;
    }

    addWonCard(card){
        this.wonDeck.push(card);
    }

    addWonDeck(){
        this.deck.addWinningDeck(this.wonDeck);
        this.wonDeck = [];
    }

    playedRound(){
        return this.played;
    }

    getType(){
        return this.type;
    }

    drawCard(){
        this.played = true;
        this.card = this.deck.drawCard();
        return this.card;
    }

    getCard() {
        return this.card;
    }

    getName(){
        return this.name;
    }

    getDeck() {
        return this.deck;
    }
}

function setup(){
    PLAYERS = [];
    let attackDeck = new Deck(Type.Attack);
    let defenseDeck = new Deck(Type.Defense);
    let player1 = new Player("Player 1", attackDeck);
    let player2 = new Player("Player 2", defenseDeck);
    PLAYERS.push(player1);
    PLAYERS.push(player2);
    
    
    document.getElementById("attack-name").innerHTML = player1.getName() + " (Attacker)";
    document.getElementById("defense-name").innerHTML = player2.getName() + " (Defender)";
    document.getElementById("attack-card-count").innerHTML = "Card count: " + player1.getDeck().getSize();
    document.getElementById("defense-card-count").innerHTML = "Card count: " + player2.getDeck().getSize();
    document.getElementById("attack-cards-won-count").innerHTML = "Cards won: " + player1.getWinningDeckSize();
    document.getElementById("defense-cards-won-count").innerHTML = "Cards won: " + player2.getWinningDeckSize();

    PLAYER_PLAYING_INDEX = 0;

    if(getPlayerPlaying().getType() == Type.Attack){
        document.getElementById("defense-draw-btn").disabled = true;
        document.getElementById("attack-draw-btn").disabled = false;
    } else {
        document.getElementById("attack-draw-btn").disabled = true;
        document.getElementById("defense-draw-btn").disabled = false;
    }
    
}

function drawAttackCardButton(){
    let btn = document.getElementById("attack-draw-btn");
    let cardImg = document.getElementById("attack-card");
    let player = getPlayerPlaying();
        
     
    btn.onclick = () => {
        let card = player.drawCard();
        cardImg.src = card.frontImage;
        document.getElementById("attack-card-overlay").style.visibility = "visible";
        document.getElementById("attack-card-info").innerHTML = card.getInfo();
        addToLog(player.getName() + " drew a card!");

        document.getElementById("defense-card").src = "../card-images/placeholder.png";//?
        document.getElementById("defense-card-overlay").style.visibility = "hidden";

        //addWinningCards(player);
        nextTurn();
    }
}

function drawDefenseCardButton(){
    let btn = document.getElementById("defense-draw-btn");
    let cardImg = document.getElementById("defense-card");
    let player = getPlayerPlaying();
        
     
    btn.onclick = () => {
        let card = player.drawCard();
        cardImg.src = card.frontImage;
        document.getElementById("defense-card-overlay").style.visibility = "visible";
        document.getElementById("defense-card-info").innerHTML = card.getInfo();
        addToLog(player.getName() + " drew a card!");
        //addWinningCards(player);
        nextTurn();
    }
}

function addToLog(text){
    let textarea = document.getElementById("game-log-textArea");
    textarea.value += "\n" + text;
    textarea.scrollTop = textarea.scrollHeight;

}

function addWinningCards(){
    for(let i = 0; i < PLAYERS.length; i++){
        if(PLAYERS[i].getDeck().isEmpty() && PLAYERS[i].getWinningDeckSize() > 0) {
            addToLog(PLAYERS[i].getName() + " adds "+ PLAYERS[i].getWinningDeckSize() +" cards they won into their deck!");
            PLAYERS[i].addWonDeck();
        }
    }
    
}

function endGame(){
    if(everyonePlayed()){
        if(PLAYERS[0].getDeck().isEmpty() && PLAYERS[0].getWinningDeckSize() == 0){
            addToLog(PLAYERS[1].getName() + " won the game!");
            PLAYER_WON = PLAYERS[1];
            document.getElementById("attack-draw-btn").disabled = true;
            document.getElementById("defense-draw-btn").disabled = true;
            return true;
        } else if (PLAYERS[1].getDeck().isEmpty() && PLAYERS[1].getWinningDeckSize() == 0) {
            addToLog(PLAYERS[0].getName() + " won the game!");
            PLAYER_WON = PLAYERS[0];
            document.getElementById("attack-draw-btn").disabled = true;
            document.getElementById("defense-draw-btn").disabled = true;
            return true;
        }else {
            return false;
        }
    } else {
        return false;
    }
    
}

function startGame(){
    setup();
    INTERVAL = setInterval(function() {
        drawDefenseCardButton();
        drawAttackCardButton();
        updateCardCount();
        addWinningCards();
        

        if(checkWin()){
            displayCrown();
            clearInterval(INTERVAL); //stop this interval
        }
        //resetRound();
        
    }, 30);
    
    
}

function displayCrown(){
    if(PLAYER_WON.getType() == Type.Attack){
        document.getElementById("attack-crown").style.visibility = "visible";
    } else {
        document.getElementById("defense-crown").style.visibility = "visible";
    }
}

function checkWin(){
    if(everyonePlayed()){
        
        let player1 = PLAYERS[0];
        let player2 = PLAYERS[1];
        let player1Card = player1.getCard();
        let player2Card = player2.getCard();
    
        if(player1Card.getLevel() > player2Card.getLevel()) {
            addToLog(player1.getName() + "'s card (level " + player1Card.getLevel() + ") beat " + player2.getName() + "'s card (level " + player2Card.getLevel() + ")");
            addToLog(player1.getName() + " wins this round and win their card back!\n");
            player1.addWonCard(player1Card);
            
    
        } else if(player1Card.getLevel() < player2Card.getLevel()) {
            addToLog(player2.getName() + "'s card (level " + player2Card.getLevel() + ") beat " + player1.getName() + "'s card (level " + player1Card.getLevel() + ")");
            addToLog(player2.getName() + " wins this round and win their card back!\n");
            player2.addWonCard(player2Card);
        } else {
            addToLog(player1.getName() + "'s card (level " + player1Card.getLevel() + ") is equal to " + player2.getName() + "'s card (level " + player2Card.getLevel() + ")");
            addToLog("WAR!!!");
        }

        if(endGame()){
            return true;
        } else{
            resetRound();
            return false;
        }

        

    } 
    
}

function everyonePlayed(){
    if(PLAYERS[0].playedRound() && PLAYERS[1].playedRound()){
        return true;
    } else {
        return false;
    }
}

function resetRound(){
    PLAYERS[0].newRound();
    PLAYERS[1].newRound();
}

function updateCardCount(){
    for(let i = 0; i < PLAYERS.length; i++){
        if(PLAYERS[i].getType() == Type.Attack){
            document.getElementById("attack-card-count").innerHTML = "Card count: " + PLAYERS[i].getDeck().getSize();
            document.getElementById("attack-cards-won-count").innerHTML = "Cards won: " + PLAYERS[i].getWinningDeckSize();
        } else {
            document.getElementById("defense-card-count").innerHTML = "Card count: " + PLAYERS[i].getDeck().getSize();
            document.getElementById("defense-cards-won-count").innerHTML = "Cards won: " + PLAYERS[i].getWinningDeckSize();
        }
    }
}

function nextTurn(){
    if(PLAYER_PLAYING_INDEX == 1){
        PLAYER_PLAYING_INDEX = 0;
    } else {
        PLAYER_PLAYING_INDEX = 1;
    }

    if(getPlayerPlaying().getType() == Type.Attack){
        document.getElementById("defense-draw-btn").disabled = true;
        document.getElementById("attack-draw-btn").disabled = false;
    } else {
        document.getElementById("attack-draw-btn").disabled = true;
        document.getElementById("defense-draw-btn").disabled = false;
    }
}

function getPlayerPlaying(){
    return PLAYERS[PLAYER_PLAYING_INDEX];
}

startGame();

