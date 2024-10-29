let countDownInt;
let timeLeft = 10;

document.querySelector("button").addEventListener("click", countDown)

function countDown(){
    countDownInt = setInterval(() => {
        if(timeLeft > 0){
            timeLeft--;
            document.getElementById("timer").textContent = timeLeft;        
        } else{
            clearInterval(countDownInt);
            document.getElementById("timer").textContent = "Time is up!";
        }
    }, 1000)
}