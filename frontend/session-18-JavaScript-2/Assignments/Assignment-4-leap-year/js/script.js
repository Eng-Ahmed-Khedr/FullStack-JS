let year = 2026;
for (let index = 1; index <= 20;) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                console.log(year + " is a leap year.");
                index++;
            }
        }
        else {
            console.log(year + " is a leap year.");
            index++;
        }
    }
    year++;
}