interface IElement {
    onclick: () =>void;
}

class PutnickoButton implements IElement{
    onclick(){
        console.log("Putnicko");
    } 
}

class TeretnoButton implements IElement {
    onclick(){
        console.log("Teretno")
    }
}

abstract class Vozilo {
    public abstract create(type:string):void;
}

class ButtonVozilo extends Vozilo{
    create(type: string): PutnickoButton |TeretnoButton{
        if(type==="Putnicko"){
            return new PutnickoButton();
        }else{
            return new TeretnoButton();
        }
    }
}

const auto= new PutnickoButton();
auto.onclick();
const kamion= new TeretnoButton();
kamion.onclick();

const vozilo=new ButtonVozilo();
const btn1=vozilo.create("Putnicko")
btn1.onclick()
const btn2=vozilo.create("Teretno");
btn2.onclick();

export {};