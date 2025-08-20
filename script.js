function setitem(tasks){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function getitem(){
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function savetask(itemValue){
    let task = getitem();
    task.push(itemValue);
    setitem(task);
}


function addtask() {
    let taskvalue = document.getElementById("taskinput").value.trim();

    if(taskvalue === "") return;

    let tasklist = document.createElement("li");

    let ul = document.querySelector("#tasks");

    tasklist.innerHTML = ` <input type = "checkbox" id="bigbox"> ${taskvalue}`;

    ul.append(tasklist);
    document.getElementById("taskinput").value = "";
    savetask(taskvalue);

     

}

function loadtask (){
let task = getitem();
let ul = document.querySelector("#tasks");
task.forEach(taskvalue => {
    let tasklist = document.createElement("li");
     tasklist.innerHTML = ` <input type = "checkbox" id="bigbox"> ${taskvalue}`;

    ul.append(tasklist);
});

}

let btn = document.getElementById("btn");
btn.addEventListener("click", addtask);

let input = document.getElementById("taskinput")
input.addEventListener("keydown", 
    function AJ(e) {
        if(e.key === "Enter"){
            addtask();
        }
    }
)

window.onload = loadtask;