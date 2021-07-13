
var database
var gameState = 0;
var playerCount,players;

var database;

var form, player, game,car1,car2,car3,car4,cars;


function setup(){
    createCanvas(windowWidth-40,windowHeight-40);

    //initiating the database
    database = firebase.database()
    game = new Game() 
    game.getState()
    game.start()
}

function draw(){
 if(playerCount ===4) {
     game.updateState(1)
 }
 if(gameState===1) {
     clear()
     game.play()
 }
}
