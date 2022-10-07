interface Cat{
    purr():void;
    sleep():void;
}

class Persian implements Cat{
    purr(){
        console.log("Prrrr");
    }
    sleep(): void {
        console.log("Zzzzz");
    }
}

interface wildCat{
    growl():void;
}

class CatAdapter implements wildCat{
    constructor(private cat: Cat){}

    growl(){
        this.cat.sleep()
    }
}

const persian= new Persian()

const catAdapter=new CatAdapter(persian)

catAdapter.growl()

export {}