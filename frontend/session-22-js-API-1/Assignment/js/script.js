let todoArray = [];
let todoArrayIndex = null;
const inputField = document.getElementById("inputData");
const inputBtn = document.getElementById("inputBtn");
const todoContainer = document.getElementById("todoContainer");

function saveTodo() {
    if (inputBtn.innerText == "Update") {
        todoArray[todoArrayIndex] = inputField.value;
        inputBtn.innerText = "Save";
        inputBtn.classList.remove("update");
    } else {
        todoArray.push(inputField.value);
    }
    inputField.value = "";
    readTodo();
}

function readTodo() {
    todoContainer.innerHTML = "";
    todoArray.forEach((element, index) => {
        todoContainer.innerHTML +=
            `<div class="todoBox">
                <h2>${element}</h2>
                <button id="updateBtn" class="update" onclick="updatetodo(${index})">Update</button>
                <button id="deleteBtn" class="delete" onclick="deleteTodo(${index})">delete</button>
            </div>`;
    })
}

function updatetodo(index) {
    inputBtn.innerText = "Update";
    inputBtn.classList.add("update");
    inputField.value = todoArray[index];
    todoArrayIndex = index;
}

function deleteTodo(index) {
    todoArray.splice(index, 1);
    readTodo();
}