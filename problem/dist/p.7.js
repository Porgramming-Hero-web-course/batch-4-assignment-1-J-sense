"use strict";
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            return new Date().getFullYear() - this.year;
        }
    }
    const myCar = new Car('Toyota', 'Corolla', 2015);
    console.log(`My car's age is: ${myCar.getCarAge()} years.`);
}
