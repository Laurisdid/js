const pazymiai =[10, 2, 8, 4, 6];
console.log('pazymiai: ', pazymiai);

/*
array 
- pozicijos prasideda nuliu
- pozicijos tik sveikieji skaiciai
- ilgis / irasu kiekis -> length


vidurkis
kiekis
maziausias 
didziausias
koks pirmas
koks paskutinis

*/
console.log('pirmas:', pazymiai[0]);
console.log('antras:', pazymiai[1]);
console.log('trecias:', pazymiai[2]);
console.log('ketvirtas:', pazymiai[3]);


const pazymiuKiekis = pazymiai.length;
const paskutinioPozicija = pazymiuKiekis -1;
console.log('paskutinis:', pazymiai[paskutinioPozicija]);
console.log('paskutinis:',pazymiai[pazymiai.length-1])

const studentai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(studentai);

console.log
index=0;
console.log(`cia yra : ${studentai[index++]}.`);
console.log(`cia yra : ${studentai[index++]}.`);
console.log(`cia yra : ${studentai[index++]}.`);