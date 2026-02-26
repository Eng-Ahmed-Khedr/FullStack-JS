const todoInput = document.getElementById("todoitem");
const saveButton = document.getElementById("save");
const todoCont = document.getElementById("todoContainer");

let todoIndex = null;

let todoarr = [];

function saveTodo() {
    if (saveButton.innerText == "Update") {
        todoarr[todoIndex] = todoInput.value;
        saveButton.innerText = "save";
        saveButton.classList.remove("update");
    } else {
        todoarr.push(todoInput.value);
    }
    showTodo();
    todoInput.innerText = "";
}


function showTodo() {
    todoCont.innerHTML = "";
    todoInput.value = "";
    todoarr.forEach((todo, index) => {
        todoCont.innerHTML +=
            `
        <div class="todoBox">
            <p>${todo}</p>
            <button class="delete" onclick="deleteTodo(${index})">delete</button>
            <button class="edit" onclick="updateTodo(${index})">edit</button>
        </div>
        `;
    })
}

function deleteTodo(index) {
    todoarr.splice(index, 1);
    showTodo();
}


function updateTodo(index) {
    saveButton.innerText = "Update";
    saveButton.classList.add("update");
    todoInput.value = todoarr[index];
    todoIndex = index;
}

todoInput.addEventListener("dblclick", (event) => {
    // console.log("hello");
    console.log(event);
})

addEventListener("click", (event) => {
    // console.log("hello");
    console.log(event);
})
// addEventListener("contextmenu", (menu) => {
//     menu.preventDefault();
//     console.log("hello");
// })