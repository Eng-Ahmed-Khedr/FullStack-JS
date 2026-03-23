let todoArray = [];
let todoArrayIndex = null;
const inputField = document.getElementById("inputData");
const inputBtn = document.getElementById("inputBtn");
const todoContainer = document.getElementById("todoContainer");
const addForm = document.getElementById("addForm")

// localStorage.clear();

if (localStorage.getItem("todoArray")) {
    console.log(JSON.parse(localStorage.getItem("todoArray")));
    // console.log(todoArray)
    readTodo();
}

function saveTodo() {
    let todoObject = {
        name: "",
        checked: false
    }

    if (inputBtn.innerText == "Update") {
        todoArray[todoArrayIndex].name = inputField.value;
        inputBtn.innerText = "Save";
        inputBtn.classList.remove("bg-warning");
        inputBtn.classList.add("bg-success");
    } else {
        todoObject.name = inputField.value;
        todoArray.push(todoObject);
    }
    inputField.value = "";
    readTodo();
    // console.log(todoArray)
}

function readTodo() {
    todoContainer.innerHTML = "";
    todoArray.forEach((element, index) => {
        todoContainer.innerHTML +=
            `<div class="todoBox bg-black text-white border-0 rounded-2 p-3">
        <h2>${element["name"]}</h2>
        <button id="checkedBtn" class="check btn bg-success text-white" onclick="checkTodo(${index})">check</button>
        <button id="updateBtn" class="update btn bg-warning text-white" onclick="updatetodo(${index})">Update</button>
        <button id="deleteBtn" class="delete btn bg-danger text-white" onclick="deleteTodo(${index})">delete</button>
        </div>`;
    })
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
    return;
}


function checkTodo(index) {
    const checkedBtn = document.getElementById("checkedBtn");
    if (checkedBtn.innerText == "check") {
        checkedBtn.innerText = "checked";
        checkedBtn.classList.remove("bg-success");
        checkedBtn.classList.add("bg-secondary");
        todoArray[index].checked = true;
    } else {
        checkedBtn.innerText = "check";
        checkedBtn.classList.remove("checked");
        checkedBtn.classList.remove("bg-secondary");
        checkedBtn.classList.add("bg-success");
        todoArray[index].checked = false;
    }
    readTodo();
    return;
}

function updatetodo(index) {
    inputBtn.innerText = "Update";
    inputBtn.classList.remove("bg-success");
    inputBtn.classList.add("bg-warning");
    inputField.value = todoArray[index].name;
    todoArrayIndex = index;
}

function deleteTodo(index) {
    todoArray.splice(index, 1);
    readTodo();
}

addForm.addEventListener("submit", (element) => {
    element.preventDefault();
    saveTodo();
})