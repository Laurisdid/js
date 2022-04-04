
function reverseString(text) {
    let reverse = '';

    for (let i = 0; i < text.length; i++) {
        const position = text.length - 1 - i;
        reverse += text[position];
    }

    return reverse;
}
console.log(reverseString('abc'),'-->','fedbec');



function reverseString2(text){
    let reverse='';

    for (let i=0;i < text.length;i++){
        const letter =text[i];
        reverse+=letter;
    }
return reverse;


}
console.log(reverseString2('xyz'), '-->', 'zyx');



function reverseString3(text) {
    let reverse = '';

    for (let i = text.length - 1; i >= 0; i--) {
        reverse += text[i];
    }

    return reverse;
}
console.log('----------');
console.log(reverseString3('abcdef'), '-->', 'fedcba');