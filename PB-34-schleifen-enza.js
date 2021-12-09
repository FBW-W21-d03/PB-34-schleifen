//1. Lauf entlang

let i = 0;
while ( i < 15) {
     
    console.log(i);
    i++;
}

console.log(".................");

//2. Aufsummieren (kopf-gesteuerte Schleife)

let summe = 0;
let j = 1;
while ( j <= 20 ) {
    summe = summe + j;
    j ++;
}
console.log(summe);

console.log(".................");

//3. Tue ... während ... (Fuss-gesteuerte Schleife) 

i = 0;
do {   
    console.log("Ausgabe: ", i);
    i ++;
} while (i < 20);
    
console.log(".......???.......");


