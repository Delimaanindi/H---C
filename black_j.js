num1 = 4
num2 = 8
// the list of numbers is called as array 
num = [num1, num2]
num.push(2)
console.log(num)
numCard= document.getElementById("numCard")
console.log(numCard.innerText = "Cards: " + num[0] + " " + num[1] + " " + num[2])

sum = document.getElementById("totCard")
total = num1 + num2
blackjack = false
console.log(sum.innerText = "Sum: " + total)

notify = document.getElementById("win/lose")

// document.getElementById could be replaced with document.querySelector("#idname")

   function start() { if (total <= 21) {
                        console.log(notify.innerText = "Do you want to draw a new card?")
                    } else if (total === 21) {
                        console.log(notify.innerText = "Woohoo! You've got Blackjack!")
                        blackjack = true
                    }
                    else {
                         console.log(notify.innerText = "You're out of the game")
                    }

}

function newc() {
    ncard = Math.floor((Math.random() * 10) + 1);
    total = ncard + total
    document.getElementById("totCard").innerHTML = "Sum: " + total;
    start()
}

for (let a = 0; a < 11; a++) {
    console.log(num.innerText= (Math.max([a])))
}


rtry = document.getElementById("rtry")

char = {color:"white", shape:"heart", image:"King"}

console.log(char.owner = "Dinda", rtry.innerText = "This " + char.color + " Lambo is " + char.owner)


// trial = Math.floor((Math.random() * 7) + 1)

// console.log(rtry.innerText = trial)

finput = document.getElementById("rd")

function haha(name, bias) {
    sentence = finput.innerText = name + "'s bias is " + bias
    console.log(sentence)
}

haha("Dinda", "Wonwoo")
haha("Dinda", "Seungmin")

function reset() {
    alert("Are you sure you want to reset your game?")

}

function capture () {
    window.print()
}

