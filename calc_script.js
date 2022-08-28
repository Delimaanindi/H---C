addit = document.getElementById("result")

function randomize() {
    num1 = Math.floor((Math.random() * 100) + 1);
    document.getElementById("num1").innerHTML = num1;

    num2 = Math.floor((Math.random() * 100) + 1);
    document.getElementById("num2").innerHTML = num2;
   
    number1 = document.getElementById("num1")
    number2 = document.getElementById("num2")

    console.log(number1.innerText = num1)
    console.log(number2.innerText = num2)
    console.log(addit.innerText = "")
}

function swap() {
    console.log(number1.innerText = num2)
    console.log(number2.innerText = num1)
    console.log(addit.innerText = "")
}

function addition() {
    if (number1.innerText = num1)
    { 
        add = num1 + num2
        addit.innerText = "= " + add
        console.log(add)
        console.log(number1.innerText = num1 + " +")
    }
    else if (number1.innerText = num2){
        add = num2 + num1
        addit.innerText = "= " + add
        console.log(add)
        console.log(number1.innerText = num2 + " +")
    }
}

function substraction() {
    if (number1.innerText = num1, number2.innerText = num2)
    { 
        sub = num1 - num2
        addit.innerText = "= " + sub
        console.log(sub) 
        console.log(number1.innerText = num1 + " -")
    }
    else {
        sub = num2 - num1
        addit.innerText = "= " + sub
        console.log(sub) 
        console.log(number1.innerText = num2 + " -")
    }
    
}

function multiply() {
    mul = num1 * num2
    addit.innerText = "= " + mul
    console.log(mul)
    console.log(number1.innerText = num1 + " x")   
}

function divide() {
    div = num1 / num2
    addit.innerText = "= " + div
    console.log(div)
    console.log(number1.innerText = num1 + " :")   
}

function erase() {
    addit.innerText = ""
    console.log("")
    console.log(number1.innerText = "")
    console.log(number2.innerText = "")
}

// function gval() {
//     const val = document.getElementById('#input').value;
//     console.log(val);
// }

function ftoc() {
    coba1 = document.createElement('INPUT');
    coba1.setAttribute("type", "text");
    coba1.setAttribute("id", "hihi");
    coba1.setAttribute("value", "")
    coba1.setAttribute("placeholder", "Fahrenheit");
    cobas = document.getElementById("trial1").appendChild(coba1);

    coba2 = document.createElement('INPUT');
    coba2.setAttribute("type", "button");
    coba2.setAttribute("id", "convert");
    coba2.setAttribute("value", "Convert");
    cobad = document.getElementById("trial1").appendChild(coba2);

    coba3 = document.createElement('P');
    coba3.setAttribute("id", "converted");
    cobat = document.getElementById("trial1").appendChild(coba3);

    coba2.onclick = function convert() {
    val = document.getElementById("hihi").value;
    res = (5/9) * (val-32);
    haha = document.getElementById("converted");
    console.log(haha.innerHTML = res + " &#8451;"); 
    };
    cobas = document.getElementById("trial2").appendChild(trys);
    cobad = document.getElementById("trial2").appendChild(tryd);
    cobat = document.getElementById("trial2").appendChild(tryt);

    cobas.remove();
    cobad.remove();
    cobat.remove();
}

function ctof() {
    try1 = document.createElement('INPUT');
    try1.setAttribute("type", "text");
    try1.setAttribute("id", "haha");
    try1.setAttribute("placeholder", "Celcius");
    trys = document.getElementById("trial2").appendChild(try1);

    try2 = document.createElement('INPUT');
    try2.setAttribute("type", "button");
    try2.setAttribute("id", "convert2");
    try2.setAttribute("value", "Convert");
    tryd = document.getElementById("trial2").appendChild(try2);

    try3 = document.createElement('P');
    try3.setAttribute("id", "converted2");
    tryt = document.getElementById("trial2").appendChild(try3);

    try2.onclick = function convert() {
    val = document.getElementById("haha").value;
    res = ((9/5) * val) + 32;
    haha = document.getElementById("converted2");
    console.log(haha.innerHTML = res + " &#8457;");
    }; 

    fc = document.getElementById("ftoc")
    cobas = document.getElementById("trial1").appendChild(coba1);
    cobad = document.getElementById("trial1").appendChild(coba2);
    cobat = document.getElementById("trial1").appendChild(coba3);

    cobas.remove();
    cobad.remove();
    cobat.remove();
}

function feedBack() {
    feed = document.createElement('TEXTAREA');
    feed.setAttribute("id", "feedarea");
    feed.setAttribute("placeholder", "Write your feedback here ...");
    feed.setAttribute("row", "3");
    feed.setAttribute("column", "4");
    feedback = document.getElementById("fb").appendChild(feed);

    back = document.createElement('INPUT');
    back.setAttribute("type", "button");
    back.setAttribute("id", "submit");
    back.setAttribute("value", "Submit");
    fd = document.getElementById("fb").appendChild(back);
}