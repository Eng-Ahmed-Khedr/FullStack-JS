const userNumber = +prompt("Enter a number to check it");

let isPrime = true

if (userNumber == 1) {
    isPrime = false;
}
else {
    for (let index = 2; index < userNumber; index++) {
        if (userNumber % index == 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime == false) {
    alert("The number " + userNumber + " is not a prime number.");
} else {
    alert("The number " + userNumber + " is a prime number.");
}