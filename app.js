let boxes = document.querySelectorAll(".box");
let rb = document.querySelector("#reset-btn");
let nb = document.querySelector("#new-btn");
let mc = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let t=true;

const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    t = true;
    enableBoxes();
    mc.classList.add("hide");

}
boxes.forEach((b)=>{
    b.addEventListener("click",()=>{
        if(t){
            b.innerText = "O";
            t=false;
        } else {
            b.innerText = "X";
            t=true;
        }
        b.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () =>{
    for( let b of boxes ){
        b.disabled=true;
    }
};

const enableBoxes = () =>{
    for( let b of boxes ){
        b.disabled=false;
        b.innerText="";
    }
};

const showWinner = (w) =>{
    msg.innerText = `Congratulations, Winner is ${w}`;
    mc.classList.remove("hide");
    disableBoxes();
};

const checkWinner= () =>{
    for( p of win){
        let p1 = boxes[p[0]].innerText;
        let p2 = boxes[p[1]].innerText;
        let p3 = boxes[p[2]].innerText;

        if(p1 != "" && p2 !="" && p3!=""){
            if(p1 === p2 && p2 ===p3){
                showWinner(p1);
            }
        }
    }
};

nb.addEventListener("click",resetGame);
rb.addEventListener("click",resetGame);