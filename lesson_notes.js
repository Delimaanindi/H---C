// adding and removing list from array

favnum = [2, 7, 9]

favnum.push(3)
console.log(favnum)
first = document.getElementById("first")
console.log(first.innerText = favnum)


// ways to remove an item from array

// var.splice (specific removal of item), var.pop (remove the last item), 

// for (let count = 10; count < 101; count += 10) {
// console.log(count)
// }

// fGreet = ["Hi!", "Hello!", "Aloha!"]

// for (let x = 0; x < fGreet.length; x+= 1) {
//     console.log(fgreet[x])
// }

// in if function we can use return function 
// if (name = "Wonwoo") {
//     return "You look handsome today"
// }
// else {
//     return "You look beautiful today!"
// }
// if it's a function, then it doesnt have to be earlier than any other functions like the variables. 

// num = document.getElementById("winner")

// if else shorthand String result = (time < 18) ? "Good day." : "Good evening.";

// to rand. numbers var = Math.floor((Math.random() * 10) +1)
// if there are 2 conditions need to be fulfilled then just write if statements into this:
// if (cond.1 && cond.2) {
    // exptd-output
// }
// = write ===

// Math.floor() is to round down an integer
// or operator in if else statement ||
// <p>
// The best place to break a code line is after an operator or a comma.
// </p>
// we can put a function inside an object simply write the key, and put the function after that (usual syntax of function but without command "function" at the beginning)

// person = {
//     name: "Dinda",
//     age: 28,
//     country: "Indonesia",
// }

// function logData() {
//     console.log(person.name + " is" + person.age + " and lives in " + person.country)
// }

// logData()

// function exam(age = 15) {
//     if (age < 6)
//     return "Free"
//     else if (age => 6 && age < 18)
//     return "Child Discount"
//     else if (age => 18 && age < 27)
//     return "Student Discount"
//     else if (age => 27 && age < 67)
//     return "Full price"
//     else if (age > 66)
//     return "Senior citizen discount"
// }

// exam()
// pop() function is to remove last value of an array while shif() removes the first element of an array
// unshift() will add elements at the beginning of array
// we can render html tags in js file by using innerHtml and write the tags before and after the variable
// const container = document.getElementById("cont1")
// console.log(container.innerHTML = "<button onclick='thank()'>Buy!</button>")

// function thank() {
//     container.innerHTML += "<p>Thank you for buying!</p>"
//     }
