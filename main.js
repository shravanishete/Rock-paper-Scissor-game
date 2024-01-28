let userscore = 0;
let compscore = 0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#compscore");

const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx]; // create random number
    //rock,paper,scissor pick one
}

const drawgame =() => {
    console.log("game was draw");
    msg.innerText = "game was Draw, Play again!!"
}

const showwinner = (userwin, userchoice, compchoice) =>{
    if(userwin){
        userscore ++;
        userScorePara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        console.log("you win");
    }
    else{
        compscore ++;
        compScorePara.innerText = compscore;
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
        console.log("you lose");
    }
}
const playgame = (userchoice) => {
    console.log("user choice =",userchoice);
    //generate modulator which divides function
    const compchoice = gencompchoice();
    console.log("comp choice =",compchoice);


    if(userchoice === compchoice){
        drawgame();//draw
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            //scissor,paper
            userwin = compchoice ==="paper" ? false : true;
        }
        else if(userchoice === "paper"){
           //rock,scissor
           userwin = compchoice === "scissors" ? false: true;
        }
        else{
            //rock.paper
            userwin = compchoice === "rock" ? false: true;
        }
        showwinner(userwin);
    }
    }

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id")
        console.log("choice was clicked",userchoice);
        playgame(userchoice);
    })
})