//1. Lauf entlang


let i = 0;

while (i <=15){
     
    console.log(" i ist: " + i)
    i++;
}

// 2. Aufsummieren (kopf-gesteuerte Schleife)


/*const zahlen = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


let summe = 0;

let index = 0;

while(index < zahlen.length) {

    summe = summe + zahlen[index];
    index++;
}
  
console.log("die summe ist", summe);*/

let sum = 0; // speichert (Teil-)Summe
i = 1; // Weiterverwendung von i, daher kein let
while (i <= 20) {
  sum = sum + i;
  i++;
}
console.log(sum);

// 3. Tue ... während ... (Fuss-gesteuerte Schleife)


i = 0;
do {
  console.log("Die zahl ist " + i);
  i++;
}
while (i < 20);