//
//  link i uzduotis https://docs.google.com/document/d/1UnM5MzO7KPf-atlz3HXPJN8XlaN37nlUJ7fp6GwvIZ8/edit#heading=h.40g6yguvm5k8
//1uzd
console.log();
console.log("   -----1uzd--------    ");
console.log();
const skaicius1 = 1;
const skaicius2 = 2;
const skaicius3 = 3;

console.log(
  "1 skaicius ",
  skaicius1,
  "2 skaicius ",
  skaicius2,
  "3 skaicius ",
  skaicius3
);
console.log();
console.log("   ------2 uzd -------    ");
console.log();
//2uzd
const vardas1 = "Petras";
console.log(vardas1);
const vardas2 = "Petaras";
console.log(vardas2);
const vardas3 = "Arpetas";
console.log(vardas3);

//3uzd
console.log();
console.log("   ------- 3 uzd-------    ");
console.log();
const pazymiai = [10, 2, 8, 4, 6];
console.log("Pazymiai:", pazymiai);

const skaiciai = [10, 2, 8, 4, 6];
console.log("Skaiciai:", skaiciai);

const poros = [8, 4, 8, 4, 6];
console.log("Poros:", poros);

//4uzd
console.log();
console.log("   -------- 4uzd ------    ");
console.log();

const studentai = ["Petras", "Maryte", "Jonas", "Ona", "Arpetas"];
console.log(studentai);

const grupiokai = [vardas1, "Maryte", "Jonas", "Ona", vardas2];
console.log(grupiokai);

const kaimynai = ["Petras", "Maryte", vardas3, "Jonas", "Ona"];
console.log(kaimynai);

//5uzd
console.log();
console.log("   --------  5 uzd  ------    ");
console.log();
console.log();
//

let suma = 0;
suma = skaicius1 + skaicius2 + skaicius3;
console.log(suma);
console.log(skaicius1, "+", skaicius2, "+", skaicius3, "=", suma);

console.log();
console.log();
console.log();
console.log("   -------  6 uzd -------    ");
console.log();

//6uzd

let sakinys;
let zodis1 = "Buvo";
let zodis2 = "pomidoras";
let zodis3 = "ir";
sakinys = zodis1 + " " + zodis2 + " " + zodis3;
console.log(sakinys);

console.log();
console.log();
console.log();
console.log("   --------   7 uzd  ------    ");
console.log();

//7uzd

let sum = 0;
const skaiciai7uzd = [1, -2, 3, -4, 5];
console.log("Skaiciai:", skaiciai7uzd);

for (let i = 0; i < skaiciai7uzd.length; i++) {
  sum += skaiciai7uzd[i];
}
console.log(sum);
console.log();
console.log("   ---------  8 uzd  -----    ");
console.log();

//8uzd?
console.log();

let sakinys2='';
for (let i = 0; i < studentai.length; i++) {
  sakinys2+=studentai[i]+', ';
}
console.log(sakinys2)
