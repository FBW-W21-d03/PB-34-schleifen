let i = 0;
while (i < 15) {
    console.log("i = ", i);
    i++;
    
}

const sum1to20 = () => {
    let sum = 0;
    let counter = 0;
    while (counter <20) {
        sum = sum + counter;
        counter++;
    }
    
    return sum;
}

console.log(sum1to20()); //190


let a = 0;
do {
    console.log("a = ", + a);
    a++;
} 
while (a < 20);