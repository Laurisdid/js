








class Bankomatas{
    constructor(street,color){                                                      // metodas 
        this.street=street;                         
        this.color=color;
        this.turnedOn = false;
        this.money=0;
        
    }
    switchOn(){
        this.turnedOn=true;
        console.log(`${this.street}: ijunktas`)
    }
    switchOff(){
        this.turnedOn=false;
        console.log(`${this.street}: isjungtasu`)
    }
    cashIn(money){
        if (!this.turnedOn) {
            console.log('Bankomatas neijungtas')
            return;
        }
        if(typeof money !=='number' || !isFinite(money)){
            console.log('nepanasu i piniga')
            return;
        }
        if (money<=0){
            console.log('minusiniu pinigu nera')
            return;
        }
        this.money+=money;
        console.log(`${this.street}: inesta ${money} pinigu`)
    }
    
    cashOut(money){
        if (!this.turnedOn) {
            console.log('Bankomatas neijungtas')
            return;
        }
        if(typeof money !=='number' || !isFinite(money)){
            console.log('nepanasu i piniga')
            return;
        }
        if (money<=0){
            console.log('minusiniu pinigu nera')
            return;
        }
        if (this.money <money){
            console.log('bankomate tiek pinigu nera')
        }
        console.log('bando isimti pinigu')
        this.money-=money;
        console.log(`${this.street}: isimta ${money} pinigu`)
    }
}

const bankomatas1= new Bankomatas('Didzioji g. 2', 'red')
const bankomatas2 = new Bankomatas('Mazoji g. 3', 'blue')


// console.log(bankomatas1)
// console.log(bankomatas2)
// console.log(bankomatas1.gatve)
// console.log(bankomatas2.color)
// console.log(bankomatas1.gatve, bankomatas1.color, bankomatas1.money,bankomatas1.turnedOn)

// bankomatas1.turnedOn=true;
// console.log(bankomatas1)

// bankomatas1.switchOn();
// bankomatas2.switchOn();
// console.log(bankomatas1)
// console.log(bankomatas2)
// bankomatas1.switchOff();
// bankomatas2.switchOff();
// console.log(bankomatas1)
// console.log(bankomatas2)


bankomatas1.switchOn()
bankomatas1.cashIn(5)
bankomatas1.cashOut(8)
console.log(bankomatas1.money)
