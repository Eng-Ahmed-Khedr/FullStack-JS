// const firstNumber = +prompt("Enter fisrt number:");
// const secondNumber = +prompt("Enter second number:");
// const operation = prompt("Enter operation");

// if (operation == "+") {
//     console.log(firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber))
//     document.write(firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber))
// }
// else if (operation == "-") {
//     console.log(firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber))
//     document.write(firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber))
// }
// else if (operation == "*") {
//     console.log(firstNumber + " * " + secondNumber + " = " + (firstNumber * secondNumber))
//     document.write(firstNumber + " * " + secondNumber + " = " + (firstNumber * secondNumber))
// }
// else if (operation == "/") {
//     console.log(firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber))
//     document.write(firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber))
// }
// else {
//     console.log("Opearation must be (+, -, *, /)")
//     document.write("Opearation must be (+, -, *, /)")
// }


let emails = ["ahmed@gmail.com", "ali@gmail.com", "omar@gmail.com", "hossam@gmail.com", "ibrahem@gmail.com", "mohamed@gmail.com", "yousif@gmail.com", "helaly@gmail.com", "ayman@gmail.com"];

console.table(emails);

// for (let i = 0; i < emails.length; i++) {
//     console.log("Address " + i + " has: " + emails[i]);
// }

// emails.push("sheref@gmail.com", "menna@gmail.com");

// for (let i = 0; i < emails.length; i++) {
//     console.log("Address " + i + " has: " + emails[i]);
// }

// emails.pop()

// for (let i = 0; i < emails.length; i++) {
//     console.log("Address " + i + " has: " + emails[i]);
// }

// emails.unshift("menna@gmail.com");

// for (let i = 0; i < emails.length; i++) {
//     console.log("Address " + i + " has: " + emails[i]);
// }

// emails.shift();


// for (let i = 0; i < emails.length; i++) {
//     console.log("Address " + i + " has: " + emails[i]);
// }


let userEmail = prompt("Enter your email");

if (userEmail.includes("@")) {
    if (emails.includes(userEmail)) {
        alert("Email Already exits");
    }
    else {
        emails.push(userEmail);
        alert("Email Added Succefully")
        console.table(emails);
    }
}
else {
    alert("Wrong email format");
    console.table(emails);
}
