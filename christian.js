// Teil 1
let i = 0;
while (i < 15) {
  console.log(i);
  i++;
}

console.log("**********");

// Teil 2
let sum = 0; // speichert (Teil-)Summe
i = 0; // Weiterverwendung von i, daher kein let
while (i <= 20) {
  sum = sum + i;
  i++;
}
console.log(sum);

console.log("**********");

// Teil 3
i = 0;
do {
  console.log("Die Zahl ist", i);
  i++;
} while (i < 20);
