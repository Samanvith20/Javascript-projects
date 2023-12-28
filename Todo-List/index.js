const inputbox = document.querySelector("#Inputbox");
const listcontainer = document.querySelector("#list-container");

// Add todo
function addTask() {
    if (inputbox.value === "") {
        alert("Please Enter Your Task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;

        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function() {
            editTask(li);
        };

        let span = document.createElement("span");
        span.innerHTML = '<i class="fas fa-trash-alt"></i>';
        span.className = "trash-icon";

        // delete todo
        span.onclick = function() {
            removeTask(li);
        };

        li.appendChild(editButton);
        li.appendChild(span);
        listcontainer.appendChild(li);

        saveData();
    }
    inputbox.value = "";
}

function removeTask(element) {
    element.parentNode.removeChild(element);
    saveData();
}

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showData() {
    listcontainer.innerHTML = localStorage.getItem("data");
}

function editTask(element) {
    const updatedTask = prompt("Edit task:", element.textContent);
    if (updatedTask !== null) {
        element.innerHTML = updatedTask;
        
    }
}



showData();
