
var holes = document.getElementsByClassName("grid-box");
const scores = document.getElementById('timer');
const moles = document.getElementsByClassName('mole')
var buttonval = document.getElementsByClassName('myButton');
var timerVal= document.getElementById('timer');
console.log(holes);
console.log(scores);
console.log(moles);
console.log(buttonval);
console.log(timerVal);
var scoreval=0;
var time;
var checkVal=0;
var hole = 0;
var StartGame;

function startWhack() {
    buttonval[0].style.display='none';
    var randomHoleNo =  Math.ceil(Math.random() * 8);
    if(time!=20){
        hole.classList.remove('up');
    }
    checkVal = parseInt(randomHoleNo)
    hole = holes[checkVal];
    hole.classList.add('up');
    if(time<=0)
    {   
        clearInterval(StartGame)
        hole.classList.remove('up');
                }
     time--;
            }

function startTime() {

    console.log()
    time = 20;
   StartGame = setInterval(startWhack,1000);

}
var a;

function score(a){
    console.log("clicked");
    console.log(a)
    console.log(checkVal)
    if(a-1 == checkVal ){
        scoreval++;
        console.log(scoreval);
        timer.innerText = scoreval;
    }
}

function caScore(){
    alert("clicked");
}

for(var i=0; i<moles.length ;i++){
    moles[i].addEventListener(onclick,caScore(i))
}