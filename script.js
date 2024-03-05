console.log('js is linked')

var animationIsPlaying = false

function JoinAnimation() {
    console.log('a')
}

var menu=document.getElementById('header__menu')
var menuState=false

function RunMenu() {
    if (menuState) {
        menuState = false
        console.log('Menu is down')
    }else{
        menuState = true
        console.log('Menu is run')
    }
}