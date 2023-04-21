const inputbox = document.getElementById("input-box");
const TaskList = document.getElementById("tasklist");

function addtask(){
    if(inputbox.value === ''){
        alert("Enter your task first !");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputbox.value;
        TaskList.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7"; // code for cross icon
li.appendChild(span);

    }
    inputbox.value = "";
}
