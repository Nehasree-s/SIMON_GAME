let gameSeq=[];
let userSeq=[];
let btns = ["c1","c2","c3","c4"]
let started = false;
let level = 0;
let allbtns = document.querySelectorAll('.btn');
let h2 = document.querySelector('h2');
document.addEventListener("keypress",function(){
    if(started==false){
        started = true;
    }
    levelup();
})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}
function levelup(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let i = Math.floor(Math.random()*3);
    gameSeq.push(btns[i]);
    let bt = document.querySelector(`.${btns[i]}`);
    btnflash(bt);
}
function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerText = `GAME OVER! Your score was ${level-1} \n Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }

}
function btnpress(){
    let btn = this;
    btnflash(btn);
    userSeq.push(btn.getAttribute("id"));
    checkAns(userSeq.length-1);
}
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}