//Part One
class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    honk() {
      return "Beep.";
    }
  
    toString() {
      return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
  }
  
  let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
  console.log(myFirstVehicle.toString()); 
  // "The vehicle is a Honda Monster Truck from 1999."
  
  //Part Two
  class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    honk() {
      return "Beep.";
    }
  
    toString() {
      return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);  // Call the constructor of the parent class (Vehicle)
      this.numWheels = 4;        // Set numWheels to 4 for all Car instances
    }
  }
  
  let myFirstCar = new Car("Toyota", "Corolla", 2005);
  console.log(myFirstCar.toString()); // "The vehicle is a Toyota Corolla from 2005."
  console.log(myFirstCar.honk());     // "Beep."
  console.log(myFirstCar.numWheels);  // 4

  //Part Three
  class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    honk() {
      return "Beep.";
    }
  
    toString() {
      return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);   // Call the parent class constructor
      this.numWheels = 2;         // Set numWheels to 2 for all Motorcycle instances
    }
  
    revEngine() {
      return "VROOM!!!";
    }
  }
  
  let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
  console.log(myFirstMotorcycle.toString());  // "The vehicle is a Honda Nighthawk from 2000."
  console.log(myFirstMotorcycle.honk());      // "Beep."
  console.log(myFirstMotorcycle.revEngine()); // "VROOM!!!"
  console.log(myFirstMotorcycle.numWheels);   // 2
  
  //Part Four
  class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(vehicle) {
      // Check if the vehicle is actually an instance of Vehicle
      if (!(vehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      // Check if the garage is full
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      // Add the vehicle if everything is okay
      this.vehicles.push(vehicle);
      return "Vehicle added!";
    }
  }
  
  let garage = new Garage(2);
  console.log(garage.vehicles); // []
  
  console.log(garage.add(new Car("Hyundai", "Elantra", 2015))); // "Vehicle added!"
  console.log(garage.vehicles); // [Car]
  
  console.log(garage.add("Taco")); // "Only vehicles are allowed in here!"
  
  console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000)));
  // "Vehicle added!"
  console.log(garage.vehicles); // [Car, Motorcycle]
  
  console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2001)));
  // "Sorry, we're full."
  