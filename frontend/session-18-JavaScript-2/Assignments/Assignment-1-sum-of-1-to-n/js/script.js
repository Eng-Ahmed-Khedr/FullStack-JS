let number = +prompt("Enter a positive number:");
let sumNormal = 0;
let sumSecond = 0;
if (number > 0) {
    for (let index = 1; index <= number; index++) {
        sumNormal += index;
        if ((index % 3 == 0) || (index % 5 == 0)) {
            sumSecond += index;
        }
    }
    console.log("The sum of 1 to " + number + " = " + sumNormal);
    console.log("The sum of 1 to " + number + " that only multiples of three or five  = " + sumSecond);
}
else {
    alert("Only enter a positive number")
}