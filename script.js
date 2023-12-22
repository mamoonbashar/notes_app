const notesContainer = document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let  notes=document.querySelectorAll(".input-box");
alert("Click on notes to create a new writting Box");
function showNotes() {
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();

// Saving in local storage 
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src="assets/images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
      // Add a click event listener for each new note to update storage
    inputBox.addEventListener("keyup", updateStorage);
})

// DELETE ICON FUNCTION
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();

    }
    else if(e.target.tagName==="p"){
        notes=document.querySelector(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
