function getComputerChoice(){
    let pick=Math.floor(Math.random()*3);
    if (pick===0){
        return "rock"
    }
    if (pick===1){
        return "paper"
    }
    if (pick===2){
        return "scissor"
    }
}
function getUserChoice(){
    let pick =prompt("Enter pick")
    return pick.trim().toLowerCase()
}
let playerScore=0
let computerScore=0

const userChoice=getUserChoice()
const computerChoice=getComputerChoice()
function playRound(userChoice,computerChoice){
    if(userChoice=="rock" && computerChoice=="scissor"){
        playerScore+=1
        console.log("Player win")
        return
    }
    if(userChoice=="scissor" && computerChoice=="paper"){
        playerScore+=1
        console.log("Player win")
        return 
    }
    if(userChoice=="paper" && computerChoice=="rock"){
        playerScore+=1
        console.log("Player win")
        return
    }
    if(userChoice=="rock" && computerChoice=="paper"){
        computerScore+=1
        console.log("Computer win")
        return
    }
    if(userChoice=="scissor" && computerChoice=="rock"){
        computerScore+=1
        console.log("Computer win")
        return 
    }
    if(userChoice=="paper" && computerChoice=="scissor"){
        computerScore+=1
        console.log("Computer win")
        return
    }
    console.log("Tie")
   
}
while(playerScore<5 && computerScore<5){
    playRound(getUserChoice(),getComputerChoice())
}
if (playerScore==5){
    console.log("Player Wins overall")
}
else{
    console.log("Computer Win overall")
}