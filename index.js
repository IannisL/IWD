const answer = Math.floor(Math.random() * 10000 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function guessFeild() {
    let guess = document.getElementById("guessFeild").value
    guesses+=1;
    
    if(guess == answer){
        alert(`${answer} is the #. It took you  ${guesses} guesses`);
    }
    else if(guess < answer){
       alert("too small!");
    }
else{
    alert("Too Large!");
}

}



