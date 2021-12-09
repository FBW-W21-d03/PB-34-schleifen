// 1. Lauf entlang
let i = 0;

while (i < 15) {
  console.log(" i ist: " + i);
  i++;
}

console.log("................");

// 2. Aufsummieren (kopf-gesteuerte Schleife)
const zahlen = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let summe = 0;
let index = 0;
while(index < zahlen.length) {
    summe = summe + zahlen[index];
    index++;
  }
  console.log("Summe ist: ", summe);

console.log("................");
// 3. Tue ... während ... (Fuss-gesteuerte Schleife)
i = 0;
do {
  console.log("Die zahl ist " + i);
  i++;
}
while (i < 20);