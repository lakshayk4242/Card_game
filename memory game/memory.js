const cards = document.querySelectorAll('.card');

let jingle=false;
let lockscreen=false;
let a,b;

var count_empty=0;
var count_filled=0;
document.getElementById('show').innerHTML='Moves:'+count_empty;
document.getElementById('show1').innerHTML='Score:'+count_filled;

function cardflip(){
    if(lockscreen)
    return;
    if(this===a)
    return;
    console.log('card is flipped');
    this.classList.add('yash');
    if(!jingle){
        jingle=true;
        a=this;

        return ;
    }
     jingle=false;
     b=this;

     iscardmatch();
}


function iscardmatch() {
    if(a.dataset.framework===b.dataset.framework){
        cardsdisable();
        count_filled++;
        count_empty++;
        document.getElementById('show').innerHTML='Moves:'+count_empty;
        document.getElementById('show1').innerHTML='Score:'+count_filled;
    }
    else{
        unflip();
        count_empty++;
        document.getElementById('show').innerHTML='Moves:'+count_empty;
    }
}
function cardsdisable(){
    a.removeEventListener('click', cardflip);
        b.removeEventListener('click', cardflip);
        setTimeout(()=>{
            a.innerHTML=null;
            b.innerHTML=null;
            a.classList.remove("card");
            b.classList.remove("card");
            a.classList.add("remove");
            b.classList.add("remove");
            resetboard();
        },1000);
        
}
function unflip(){
    lockscreen=true;

    setTimeout(()=> {
        a.classList.remove('yash');
        b.classList.remove('yash');
        lockscreen=false;
        resetboard();
    },1200);

}
function resetboard(){
    [jingle,lockscreen]=[false,false];
    [a,b]=[null,null];
}

(function shuffle(){
    cards.forEach(x =>{
        let pos =Math.floor(Math.random() * 12);
        x.style.order=pos;
    });
})();

cards.forEach(x => x.addEventListener('click', cardflip) 
    
);