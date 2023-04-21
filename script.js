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
    }
    inputbox.value = "";
}
