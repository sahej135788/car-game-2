class Form{
constructor(){

}
display(){
var title =createElement('h2')
title.html("CAR RACING GAME")
title.position(130,0)
var input =createInput("name")
input.position(150,160)
var button =createButton('play')
button.position(200,200)

button.mousePressed(function(){
input.hide()
button.hide()
var name = input.value()
playerCount+=1
player.update(name)
player.updateCount(playerCount)
var greeting =createElement('h3')
greeting.html("hello " + name)
greeting.position(190,160)
})
}
}