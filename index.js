var pop=document.querySelector(".popup-box")
var Overlay=document.querySelector(".popup-overlay")
var Addpopupbutton=document.getElementById("add-popup-button")

Addpopupbutton.addEventListener("click",function(event){
    event.preventDefault()
    pop.style.display="block"
    Overlay.style.display="block"
})
function cancelpopup(){
    pop.style.display="none"
    Overlay.style.display="none"

}

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.querySelector(".book-title-input")
var bookauthorinput=document.querySelector(".book-author-input")
var bookdescriptioninput=document.querySelector(".book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
                   <h5>${bookauthorinput.value}</h5>
                   <p>${bookdescriptioninput.value}</p>
                   <button onclick="del(event)">Delete</button>`
    container.append(div)
    pop.style.display="none"
    Overlay.style.display="none"


})
function del(event){
    event.target.parentElement.remove()
}