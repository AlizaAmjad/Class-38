class Game {
    constructor(){}

    //reads the gameState value from the database
    getState(){
        database.ref("gameState").on("value",(data)=>{
            gameState = data.val()
        })
    }

    //writes the gameState value in the database
    updateState(count){
        database.ref("/").update({
            gameState :count
        })
    }

    //start screen
    start() {
        if(gameState === 0) {
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
        car1 = createSprite(100,200)
        car2 = createSprite(300,200)
        car3 = createSprite(500,200)
        car4 = createSprite(700,200)
        cars=[car1,car2,car3,car4]
    }

    // !== : not equal to
    //play screen
    play() {
        form.hidden()
        Player.getPlayersInfo()
        if(players!==undefined) {
           var index=0
           var x=0
           var y
           for(var i in players) {
               index=index+1
               x=x+200
               y=height-players[i].distance
               cars[index-1].x=x 
               cars[index-1].y=y
               if(index===player.index){
                   cars[index-1].shapeColor="green"
                   
                   camera.position.y=cars[index-1].y
               }
           }
        }
        if(keyDown("up") && player.index !== null) {
         player.distance=player.distance+10
         player.updateInfo()   
        }
        drawSprites()
    }
    
}