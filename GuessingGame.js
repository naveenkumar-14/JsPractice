const max=prompt("Enter the maximum range for your game:");
console.log(max);
const random=Math.ceil(Math.random()*max);
let guess=prompt(`Guess your number in range 0 to ${max}:`);
console.log(guess);
while(true){
    if(guess=="quit"){
        alert("You have choosen to quit");
        break;
    }
    if(guess==random){
        console.log("You guess is correct & random number is:"+random);
        break;
    }else if(guess<random){
        console.log("Your guess is smaller than the number,Try again");
        guess=prompt("Your guess is smaller than the number,Try again");
    }else {
        console.log("Your guess is larger than the number,Try again");
        guess=prompt("Your guess is larger than the number,Guess again");
        
    }

}