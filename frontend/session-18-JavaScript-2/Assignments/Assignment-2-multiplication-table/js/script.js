let multiplicationTable = [];

for (let index1 = 1; index1 <= 12; index1++) {
    console.log("table of " + index1);
    for (let index2 = 1; index2 <= 12; index2++) {
        console.log(index1 * index2);
        multiplicationTable.push(index1 * index2);
    }
}