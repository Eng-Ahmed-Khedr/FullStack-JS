// function darkMode() {
//     let body = document.body;
//     if (body.getAttribute("darkModing") == "false") {
//         body.setAttribute("darkModing", "true");
//     }
//     else {
//         body.setAttribute("darkModing", "false");
//     }
//     return;
// }

// function saveUserData() {
//     let userData = []
//     let Data = document.getElementById("userName");
//     userData[0] = Data.value;
//     Data = document.getElementById("userEmail");
//     userData[1] = userData[0] = Data.value;
//     Data = document.getElementById("userPassword").value;
//     userData[2] = Data.value;

//     for (let index = 0; index < userData.length; index++) {
//         console.log(userData[index]);
//     }
// }

const todoInput = document.getElementById("todoitem");

let todoarr = [];

function saveTodo() {
    todoarr.push(todoInput.value);
    showTodo();
}

function showTodo() {
    for (let index = 0; index < todoarr.length; index++) {
        console.log(todoarr[index]);
    }
}