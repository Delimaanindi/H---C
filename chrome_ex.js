let myLead = []
const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputbtn.addEventListener("click", function() { 
    myLead.push(inputEl.value)
    inputEl.value = ""
    renderLead()
})

function renderLead(listItems = "") {
    for (let a = 0; a < myLead.length; a++) {
        listItems += "<li><a href='" + myLead[a] + "' target='_parent'>" + myLead[a] + "</a></li>"
    }
    ulEl.innerHTML = listItems 
}


// second method
// for (let a = 0; a < myLead.length; a++) {
//     li= document.createElement("li")
//     li.textContent = myLead[a]
//     li.append(li)
// }

// third method
// for (let a = 0; a < myLead.length; a++) {
//     listItems += "<li>" + myLead[a] + "</li>"
//     ulEl.innerHTML = listItems
// }


