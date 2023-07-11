//we cant reassign the const variable like inputEl="jhv " will give assignment error.
let myLeads=[]
const inputEl= document.getElementById("input-el")
const buttonEl=document.getElementById("input-btn")
const ulEl =document.getElementById("ul-el")

buttonEl.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    //clear out the input field
    inputEl.value= ""
    renderLeads()
})
function renderLeads(){
    let listItems= " "
    for (let i=0;i<myLeads.length;i++) {
        listItems +="<li><a href='" + myLeads[i]+">"+myLeads[i]+ "</a></li>"
    }
    ulEl.innerHTML = listItems
}
