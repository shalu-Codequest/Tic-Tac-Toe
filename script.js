let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; 

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
    [3,4,5],
    [3,4,6],

];

const resetGame = () => {
    turnO =true;
    enableboxes();
    msgContainer.classList.add("hide");
    resetbtn.classList.remove("hide");
    for(let box of boxes){
        box.classList.remove("hide");
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X"; 
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        checkDraw();
    })
});

const disableBoxes = () => {
 
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    resetbtn.classList.add("hide");
    for(let box of boxes){
        box.classList.add("hide");
    }

}

const checkWinner = () => {
    for(let pattern of winPatterns){
       let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText;
       let pos3 =  boxes[pattern[2]].innerText;
    

    if(pos1!="" && pos2!="" && pos3!="" ){
        if(pos1==pos2 &&  pos2 == pos3){
            console.log("winner");
            showWinner(pos1);
        }
    }
}
}

enableboxes =() => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
}
}

const checkDraw = () => {
    let isDraw = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            isDraw = false;  // There's still an empty box, so no draw
            break;
        }
    }

    if (isDraw) {
        msg.innerText = "It's a Draw!";
        msgContainer.classList.remove("hide");
        resetbtn.classList.add("hide");
        for(let box of boxes){
            box.classList.add("hide");
        }    
    }
};


newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);




