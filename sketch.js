var database,form,game,player
var gamestate=0
var playercount

function setup(){
    createCanvas(400,400);
    database = firebase.database();
    game=new Game()
    game.getstate()
    game.start()
}