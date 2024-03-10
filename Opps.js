        const employees={
    Taxrate(){
        console.log('protoType taxratee 20%');
    }
};

const karanArjun={
    salary:100000,
    Taxrate(){
        console.log("tax rate 20%");
    }
}
karanArjun.__proto__=employees;
class ToyotoCar{
    constructor(brand,milage){
this.brand=brand;
this.milege=milage;
    }
    start(){
        console.warn("Start!");
    }
}

let myObject= new ToyotoCar('toyotocar','100');
let luxes= new ToyotoCar;

inheritance
class person{
    constructor(spicies){
        this.spicies=spicies;
        console.log('parent class');
    }
    eat(){
        cosole.log('eating');
    }
    sleep(){
        cosole.log('sleep');
    }
}
class engineer extends person{
    constructor(spicies){
        console.log("child class");
        super(spicies);
        console.log("exit child cons");
    }
    work(){
        super.eat();
        console.log("solve problem and Build something");
    }
}
let objengineer=new engineer('homo sepians');









