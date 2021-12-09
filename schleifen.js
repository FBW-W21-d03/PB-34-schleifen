let i = 0;
while (i < 15) {
    console.log("i = ", i);
    i++;
}

const sum1to20 = () => {
    let sum = 0;
    let counter = 1;
    while (counter <=20) {
        sum = sum + counter;
        counter++;
    }
    return sum;
}

console.log(sum1to20()); // 210


do {
    console.log("Die zahl ist = ", + i);
    i++;
} 
while (i < 20);