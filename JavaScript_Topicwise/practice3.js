let gameNum = 25;

let num = prompt("Guess a number");

while(gameNum!=num){
    num = prompt("Wrong Guess. Try Again!");
}
console.log("Congratulations");