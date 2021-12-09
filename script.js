
let wert = 0;
while (wert < 15){
    wert++; 
    console.log(wert);
}

const zahlen = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let summe = 0;
let index = 0;
while(index < zahlen.length) {
    summe = summe + zahlen[index];
    index++;
  }
  console.log(summe);

 let i = 0;

do {
    i++;
    console.log("Die zahl ist", + i);
} 
while (i < 19)