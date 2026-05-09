const input = document.getElementById("note")
const addBtn = document.getElementById("addBtn")
const notesList = document.querySelector("#notesList")
//    sewar   

let notes = JSON.parse(localStorage.getItem("notes")) || []
//prevent error => if ls empty, get [] 

// 3- store the new note in notes array
function addNote() {
    //validation
    if (input.value.trim() === "") {
        alert("should be a string not empty")
        return;
    }
    notes.push(input.value.trim())
    saveNotes() //store in ls
    renderNotes()
    console.log(notes);

}
renderNotes()

// 4- refresh notes list
function renderNotes() {
    notesList.innerHTML = ""
    notes.forEach((note, idx) => {
        const li = document.createElement("li")
        const delBtn = document.createElement("button")

        delBtn.textContent = "Delete"
        delBtn.addEventListener("click", () => deleteNote(idx))

        li.textContent = note
        li.appendChild(delBtn)

        notesList.appendChild(li)

    })
}

function deleteNote(idx) {
    notes.splice(idx, 1)
    console.log(notes);
    renderNotes()
    saveNotes()
}

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes))
}



//لما اجيب من اللوكال ستوريج 
// بعمل parse => بتحول الى حيسون json
//  لم اخزن جوا اللوكال ستوريج =. بحول سلترينغ 






























