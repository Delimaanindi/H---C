// let myage = 28
//     let dogage = 7

//     let mydogage = myage * mydogage

//     console.log(mydogage)
     

    // let init = 50
    // console.log(init)
    // BonusPoints = init + 50
    // console.log(BonusPoints)
    // BonusPoints = init - 125
    // console.log(BonusPoints)
    // BonusPoints = init + 45
    // console.log(BonusPoints)
    // function increment() {
    //     console.log("the button is clicked")
    // }

    // function be42()
    // {
    //    a = 7
    //    b = 6
    //    c = a * b
    //         console.log(c)
    // }

    // be42()
    // //first version
    // first = 34
    // second = 36
    // third = 33
    // total = first + second + third
    // function totallap() {
    //     console.log(total)
    // }
    // totallap()

    // //second version
    // function totallap() {
    //     console.log(first + second + third)
    // }

    // function completedlaps() {
    //     lapscompleted = 0
    //     lapscompleted = lapscompleted + 1
    // }

    // completedlaps()
    // completedlaps()
    // completedlaps()

    // console.log(lapscompleted)

    //making the increment buttton works
//stringtime
// let username = "Dinda, "
// let greet = "A yo! "
// let notif = "you have two new messages"
// let message = greet + username + notif

// console.log(message)

// let welcomeEl = document.getElementById("greeting")
// let name = "Wonwoo!"
// let message2 = "Welcome back, " 
// let finalgreet = welcomeEl.innerText = message2 + name  

// console.log(finalgreet)

// //adding emojis to message
// welcomeEl.innerText += " ##"

//increment 

countTools= document.getElementById("countTool")

console.log(countTools)

count = 0
    function increment() {
        count = count + 1
        countTools.innerText = count
        console.log(count)
    }
function save() {
    console.log(count)
}

save()

fGreet = ["Hi", "Hello", "Aloha"]
greet = document.getElementById("greeting")
for (let x = 0; x < fGreet.length; x++) {
    console.log(greet.innerText = fGreet[x] + ", Wonwoo!")
}

orderIn = document.getElementById("totalOrder")

console.log(orderIn)

numOrder = 0
coffee1 = "Black coffee"
coffee2 = "Mochacino"

function addorder() {
        numOrder = numOrder + 1
        orderIn.innerText = numOrder
        console.log(numOrder)
    }

function cutorder() {
        numOrder = numOrder - 1
        totOrder = orderIn.innerText = numOrder
}
upOrder = document.getElementById("numberOrder")

console.log(upOrder)

inOrder = 0

function addorder2() {
        inOrder = inOrder + 1
        upOrder.innerText = inOrder
        detail = 
        console.log(inOrder)
    }

function cutorder2() {
    inOrder += -1
    upOrder.innerText = inOrder
    console.log(inOrder)
}

function order() {
    console.log(coffee1 + " " + numOrder)
    console.log(coffee2 + " " + inOrder)
}

numberOrder = 0

function cancel() {
if (upOrder.innerText = inOrder) {
    upOrder.innerText = 0
    orderIn.innerText = 0
    inOrder = 0
    numOrder = 0
    canceled = "canceled"
    console.log(canceled)
}

}

function textArea() {
  var x = document.createElement("TEXTAREA");
  var t = document.createTextNode("");
  x.appendChild(t);
  document.body.appendChild(x);

  var y = document.createElement("INPUT");
  y.setAttribute("type", "button");
  y.setAttribute("value", "Submit");
  document.body.appendChild(y);
}



// greeting = "Hi,"
// name = "Dinda"

// toGreet = document.getElementById("greeting")
// console.log(toGreet.innerText = greeting + " " + name)