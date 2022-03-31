const pazymiai = [10, 2, 6, 4, 8];

let pazymiuSuma=0;
const pazymiuKiekis = pazymiai.length;


pazymiuSuma += pazymiai[0];
pazymiuSuma += pazymiai[1];
pazymiuSuma += pazymiai[2];
pazymiuSuma += pazymiai[3];
pazymiuSuma += pazymiai[4];

const vidurkis = pazymiuSuma / pazymiuKiekis;
console.log(vidurkis);
let suma =0;

for (let i = 0; i < pazymiai.length; i++){
    const pazymys = pazymiai[i];
    suma += pazymys;

    console.log(`${i} pazimys ${pazymys} [ ${suma}]`);
}
console.log(`galutine suma:`,suma);