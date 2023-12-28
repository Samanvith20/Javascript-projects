const inputbox = document.querySelector("#Inputbox");
const listcontainer = document.querySelector("#list-container");

function addTask() {
    if (inputbox.value === "") {
        alert("Please Enter Your Task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        saveData();

        let span = document.createElement("span");
        span.innerHTML = '<i class="fas fa-trash-alt"></i>';
        span.className = "trash-icon";
        span.onclick = function() {
            removeTask(li);
        };

        li.appendChild(span);
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


showData();
