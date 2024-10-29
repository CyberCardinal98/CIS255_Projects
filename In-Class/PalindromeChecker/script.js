let input = document.getElementById("input")

document.getElementById("button").addEventListener('click', palindromeCheck);

function palindromeCheck(input){
    console.log("blah")
    for(let index = 0; index < (input.length/2); index++){
        for(let indexReverse = input.length; indexReverse < (index.length/2); indexReverse--){
            if(input[index] == input[indexReverse]){
                document.getElementById("results").textContent = "Yes, it is a palindrome!";
            } else {
                document.getElementById("results").textContent = "No, it is not a palindrome!";
            }
        }
    }
}