/*
mokiniai turi tik 3 pazymius
*/
const petras =[10, 2, 8, 4, 6];
const maryte =[8, 2, 8, 4, 6];
const jonas =[6, 2, 8, 4, 6];
const ona =[4, 2, 8, 4, 6];

// let petroSuma= 0;
// petroSuma+=petras[0];
// petroSuma+=petras[1];
// petroSuma+=petras[2];
// petroSuma+=petras[3];
// petroSuma+=petras[4];
// const petroKiekis = petras.length;
// const petroVidurkis =petroSuma / petroKiekis;
// console.log('petras:',petroVidurkis)

function vidurkis(pazymiuSarasas){
    console.log(pazymiuSarasas);
    let pazymiuSuma =0
    pazymiuSuma += pazymiuSarasas[0];
    pazymiuSuma += pazymiuSarasas[1];
    pazymiuSuma += pazymiuSarasas[2];
    pazymiuSuma += pazymiuSarasas[3];
    pazymiuSuma += pazymiuSarasas[4];
    
    return pazymiuSuma / pazymiuSarasas.length;
}
const petroVidurkis = vidurkis(petras);
console.log('petras:',petroVidurkis);

const maryteVidurkis = vidurkis(maryte);
console.log('maryte:',maryteVidurkis);
const jonasVidurkis = vidurkis(jonas);
console.log('Jonas:',jonasVidurkis);
const onaVidurkis = vidurkis(ona);
console.log('Ona:',onaVidurkis);