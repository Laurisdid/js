function daugyba(a,b){
 
    if (typeof a !=='number'){
        return'pirmas parametras turi buti skaicius'
    }
    if (typeof b !=='number'){
        return'antras parametras turi buti skaicius'
    }

    return a*b;
}
console.log(daugyba(7,5));
console.log(daugyba(7,2.1));
console.log(daugyba(7,true));
console.log(daugyba('ab',5));