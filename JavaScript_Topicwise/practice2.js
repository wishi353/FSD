/*const x = prompt("Enter a number");
if(x%5==0){
    console.log("Is a multiple of 5");
}else{
    console.log("Is not a multiple of 5");
}*/
const x = prompt("Enter a score");
if(x>=80 && x<=100){
    console.log("A");
}else if(x>=70 && x<=79){
    console.log("B");
}else if(x>=60 && x<=69){
    console.log("C");
}else if(x<=50 && x<=59){
    console.log("D");
}else{
    console.log("F");
}