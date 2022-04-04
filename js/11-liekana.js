function liekana(nuo, iki, daliklis){

    let caunt =0;

    for (let i=nuo; i<iki;i++){
        if (i% daliklis ===0){
            caunt++;
        }
    }
    return` skaiciu intervalas nuo  ${nuo} iki ${iki}, besidalijanciu be liekanos is ${daliklis} yra vienetai ${caunt}`
}

console.log(liekana(0,1100000,3))
console.log(liekana(8, 31, 3));
console.log(liekana(8, 31, 5));
console.log(liekana(8, 31, 7));
console.log(liekana(-18, 18, 3));
console.log(liekana(-18, 18, 5));