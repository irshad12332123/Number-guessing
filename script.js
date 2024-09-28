const userGuess = document.querySelector("#user-guess");
console.log(userGuess.value);

const score = document.querySelector("#fin-score");

const enter = document.querySelector("#guess");
const num =Math.floor((Math.random()*100)+1);

const res = document.querySelector("#res");

let tries = 0;

enter.addEventListener("click",(e)=>{

    tries++

    console.log(num);
    if(userGuess.value>num){
        console.log(userGuess.value)
        html = `<p>High! guess smaller</p>`;
        res.innerHTML=html;
    }
    else if(userGuess.value<num){
        console.log(userGuess.value)
        html = `<p>Low! guess higher</p>`;
        res.innerHTML=html;
    }
    else if(userGuess.value==num){
        console.log(userGuess.value)
        html = `<p>Yayy! you guessed it</p>`;
        res.innerHTML=html;
        console.log(tries);
        reshtml = `Your score is ${100-tries}`;
        score.innerText = reshtml;
    }

})