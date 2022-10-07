class Car {
    constructor(
        public name: string,
        public year?:string,
        ){}


        addName(name: string){
            this.name=name;
        }

        addYear(year:string){
            this.year=year
            return this;
        }
}

const myCar=new Car("Peugeot")
    .addYear("2017")

console.log(myCar)

export{}