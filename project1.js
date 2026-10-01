let noteinput=document.querySelector("#noteinput");
let btn=document.querySelector("#Addbtn");
let notecontainer=document.querySelector("#notecontainer");

let notes=JSON.parse(localStorage.getItem("notes"));

if(notes===null){
    notes=[];
}
shownotes();

btn.addEventListener("click",function(){
    let notesText=noteinput.value.trim();

    if(notesText===""){
        alert("Please enter note");
        return;
    }
    notes.push(notesText);
    savenotes();
    shownotes();
    noteinput.value="";


});
function savenotes(){
    localStorage.setItem("notes",JSON.stringify(notes));
}
function shownotes(){
    notecontainer.innerHTML="";
    for(let i=0;i<notes.length;i++){

        let notediv=document.createElement("div");
        notediv.classList.add("note");
        
        let text =document.createElement("p");
        text.innerText=notes[i];

        let deletebtn=document.createElement("button");
        deletebtn.innerText="delete";
        deletebtn.classList.add("deletebtn");

        deletebtn.addEventListener("click", function(){

            notes.splice(i,1);

            savenotes();

            shownotes();
    });
    notediv.appendChild(text);
        notediv.appendChild(deletebtn);

        notecontainer.appendChild(notediv);

}
}


