let gameseq = [];
let userseq = [];

let maxscore = [];

let started = false;
let level = 0;

let h2  = document.querySelector('h2');
document.addEventListener("keypress", ()=>{
   if(started == false){
     console.log("game started");   
     started = true;
     levelup();
    }
});
function btnflash(box){
    let color = box.style.backgroundColor;
    setTimeout(()=>{
      box.style.backgroundColor = "white";
    },0)
    setTimeout(()=>{
        box.style.backgroundColor = `${color}`; 
    },250);
}
function userflash(box){
    let color = box.style.backgroundColor;
    setTimeout(()=>{
      box.style.backgroundColor = "lightgreen";
    },0)
    setTimeout(()=>{
        box.style.backgroundColor = `${color}`; 
    },250);
    

}
function dangerflash(box){
    let color = box.style.backgroundColor;
    setTimeout(()=>{
      box.style.backgroundColor = "red";
    },0)
    setTimeout(()=>{
        box.style.backgroundColor = `${color}`; 
    },250);
}


function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let color = ["red" , "purple" , "blue" , "yellow"];
    let random = Math.floor(Math.random()*4);
    gameseq.push(color[random]);
    let box = document.querySelector(`.${color[random]}`);
    btnflash(box);
}

function checkAns(idx){
    // let idx = level - 1;
    if(userseq[idx] == gameseq[idx]){
          if(userseq.length == gameseq.length){
            setTimeout(levelup, 1000);
          }
    }else{
        console.log(userseq);
        console.log(gameseq);
        dangerflash(document.body);
        maxscore.push(level);
        
        h2.innerHTML = `Game Over!<br><b>Your score is ${level}</b><br> <b> Highest score was ${highest(maxscore)} </b><br> Press any key to start`;
        reset();
    }
}

function btnpress(){
    // let color = this.style.backgroundColor;
    // userseq.push(color);
    userflash(this); 
    let col = this.getAttribute('id');
    console.log(col );
    userseq.push(col);
    checkAns(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){

    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}

function highest(maxscore){
    let largest  = 0;
    for(max of maxscore){
        if(largest < max){
            largest = max;
        }
    }
    return largest;
}