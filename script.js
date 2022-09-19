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

let orderIn = document.getElementById("totalOrder")

decreaseOrder = document.getElementById('dec')
decreaseOrder2 = document.getElementById('dec2')

incOrder = document.getElementById('add1')
incOrder2 = document.getElementById('add2')

console.log(orderIn)

numOrder = 0
coffee1 = "Black coffee"
coffee2 = "Mochacino"

function addorder() {
        const stock = 7;
        numOrder = numOrder + 1
        orderIn.innerText = numOrder
        if(numOrder === stock) {
            incOrder.setAttribute('disabled', 'true')
        };
        if(numOrder < stock) {
            incOrder.removeAttribute('disabled')
        };
        console.log(numOrder)
        console.log(stock)
    }

function cutorder() {
        numOrder = numOrder - 1
        displayedNumb = orderIn.innerText = numOrder;

        if(displayedNumb <= 0 ) {
            decreaseOrder.setAttribute('disabled', 'true')
        }
        if(displayedNumb > 1) {
            decreaseOrder.removeAttribute('disabled')
        };
}

upOrder = document.getElementById("numberOrder")

console.log(upOrder)

inOrder = 0

function addorder2() {
        const stock = 5; 
        inOrder = inOrder + 1
        upOrder.innerText = inOrder
        if(inOrder === stock) {
            incOrder2.setAttribute('disabled', 'true')
        };
        if(inOrder < stock) {
            incOrder2.removeAttribute('disabled')
        };
        console.log(inOrder)
    }

function cutorder2() {
    inOrder = inOrder - 1
    displayedNum = upOrder.innerText = inOrder;

    if(displayedNum <= 0) {
        decreaseOrder2.setAttribute('disabled', 'true')
    };
    
    if(displayedNum > 1) {
        decreaseOrder2.removeAttribute('disabled')
    };
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


