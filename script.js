function addtask() {
    let taskvalue = document.getElementById("taskinput").value.trim();

    if(taskvalue === "") return;

    let tasklist = document.createElement("li");

    let ul = document.querySelector("#tasks");

    tasklist.innerHTML = ` <input type = "checkbox" id="bigbox"> ${taskvalue}`;

    ul.append(tasklist);

    document.getElementById("taskinput").value = "";

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