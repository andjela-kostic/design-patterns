interface IElement {
    onclick: ()=> void;
}

class Ucenik implements IElement{
    onclick(){
        console.log("ucenik")
    }
}

class Profesor implements IElement{
    onclick(){
        console.log("Profesor")
    }
}

abstract class Osoba{
    public abstract create (type:string):void;
}


class ButtonOsoba extends Osoba{
    create(type:string):Ucenik|Profesor{
        if(type==="Ucenik"){
            return new Ucenik()
        }
        else {
            return new Profesor()
        }
      
    }
}

const ucenik=new Ucenik()
const profesor=new Profesor()
ucenik.onclick()
profesor.onclick()

const persona= new ButtonOsoba();
const btn1=persona.create("Ucenik")
const btn2=persona.create("Profesor")
btn1.onclick()
btn2.onclick()

export{}