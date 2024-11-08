{
    class Car {
        constructor(public make: string, public model: string, public year: number) {}
      
        getCarAge(): number {
          return new Date().getFullYear() - this.year;
        }
      }
      
      const myCar = new Car('Toyota', 'Corolla', 2015);
      console.log(`My car's age is: ${myCar.getCarAge()} years.`);
      
}