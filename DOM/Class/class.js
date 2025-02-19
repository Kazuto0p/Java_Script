// // ഒരു ക്ലാസ് നിർവചിക്കുക
// class Car {
//     constructor(make, model, year) {
//       this.make = make;
//       this.model = model;
//       this.year = year;
//     }
  
//     // ക്ലാസിൽ ഉള്ള ഒരു മിത്തഡ്
//     drive() {
//       console.log(`The ${this.make} ${this.model} is driving.`);
//     }
  
//     stop() {
//       console.log(`The ${this.make} ${this.model} has stopped.`);
//     }
//   }
  
//   // ക്ലാസിൽ നിന്ന് ഒരു ഒബ്ജക്റ്റ് (ഇൻസ്റ്റൻസ്) സൃഷ്ടിക്കുക
//   const myCar = new Car("Toyota", "Corolla", 2020);
  
//   // പ്രോപർട്ടികളും മിത്തഡുകളും ആക്സസ് ചെയ്യുക
//   console.log(myCar.make);  // Outputs: Toyota
//   myCar.drive();  // Outputs: The Toyota Corolla is driving.
  

// class Car {
//     // Constructor method
//     constructor(make, model) {
//       this.maked = make;   // Property for make
//       this.modeled = model; // Property for model
//     }
//   }
  
//   const myCar = new Car("Toyota", "Corolla");  // Create an instance (object) of Car class
//   console.log(myCar.maked);   // Outputs: Toyota
//   console.log(myCar.modeled);  // Outputs: Corolla
  


// car={
//     make:"Toyota",
//     model:"Corolla",
// }

// class bike{
//     constructor(name,model){
//         this.model=model;
//         this.name=name;
//     }
//     del(){
//         console.log(`my bike is ${this.name},${this.model}`)
//     }
//     static year(...item){
//     var item = item.map(items=>items.model)
//     console.log(Math.min(...item));
// }
// }


// // bike.year = function(...item){
// //     var item = item.map(items=>items.model)
// //     console.log(Math.min(...item));
// // }

// const mybike=new bike("Rx 100",2024)
// const mybike1=new bike("Ns",2020)
// const mybike2=new bike("Dominar",2018)


// mybike.del();
// mybike1.del();
// mybike2.del();
// console.log(mybike)
// bike.year(mybike,mybike1,mybike2)


// ==========================================================


// setters and getters


// class Rectangle {
//     constructor(width, height) {
//       this._width = width;   // _width is a private property (by convention)
//       this._height = height; // _height is a private property (by convention)
//     }
  
//     // Getter for width
//     get width() {
//       return this._width;
//     }
  
//     // Setter for width
//     set width(value) {
//       if (value > 0) {
//         this._width = value;  // Set the width
//       } else {
//         console.log('Width must be positive!');
//       }
//     }
  
//     // Getter for height
//     get height() {
//       return this._height;
//     }
  
//     // Setter for height
//     set height(value) {
//       if (value > 0) {
//         this._height = value;  // Set the height
//       } else {
//         console.log('Height must be positive!');
//       }
//     }
  
//     // Method to calculate the area of the rectangle
//     calculateArea() {
//       return this._width * this._height;
//     }
//   }
  
//   // Create a new rectangle instance
//   const myRectangle = new Rectangle(5, 10);
  
//   // Access the width and height using getters
//   console.log(myRectangle.width);  // Outputs: 5
//   console.log(myRectangle.height); // Outputs: 10
  
//   // Set new values for width and height using setters
//   myRectangle.width = 7;           // Successfully sets new width
//   myRectangle.height = -3;         // Outputs: Height must be positive!
  
//   // Check the updated values
//   console.log(myRectangle.width);  // Outputs: 7
//   console.log(myRectangle.height); // Outputs: 10
  
//   // Calculate area using the updated width and height
//   console.log(myRectangle.calculateArea());  // Outputs: 70
    


// class btn{
//     constructor(h){
//          this.a=document.createElement('button');
//          this.a.innerHTML=h;
//          document.body.appendChild(this.a)
//     }

//     set width(width) {
//         this.a.style.width=width+'px';
//     }
//     set height(height){
//         this.a.style.height=height+'px';
//     }

//     get width() {
//         return this.a.style.width;
//     }
// }
// var z=new btn("clickme")

// z.width=100;
// z.height=100;
// console.log(z.width)


// ====================================================================



// INHERITANCE
// PROTOTYPE


// function Animal(name){
//     this.name = name;

// }
// Animal.prototype.sound=function(){
//     console.log("Some generic sound");
// };

// function Dog(name,breed){
//     Animal.call(this,name);
//     this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.sound=function(){
//     console.log("WOOf! Woof!");
// };

// const myDog = new Dog("Buddy","Labrador");
// myDog.sound();

// function Flower(name){
//     this.name = name;
// }
// Flower.prototype.smell=function(){
//     console.log("Flower smell");

// };

// function Jasmine(name,cata){
//     Flower.call(this.name);
//     this.cata=cata;
// }

// Jasmine.prototype = Object.create(Flower.prototype);
// Flower.prototype.constructor = Flower;

// Flower.prototype.smell=function(){
//     console.log("Good smell!!!!!");
// };

// const myFlower = new Flower("jasmine","1day");
// myFlower.smell()

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`this ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`this ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal{
//     name = 'rabbit';
//     alive = false;
// }
// class Fish extends Animal{
//     name = 'fish';
// }
// class Hawk extends Animal{
//     name =  "hawk";
// }



// const rabbit=new Rabbit();
// const fish=new Fish();
// const hawk=new Hawk ();

// console.log(rabbit.alive)
// rabbit.eat()
// rabbit.sleep()
// console.dir(Animal)



// function Animal(name){
//     this.name = name;
// }

// Animal.prototype.speak=function(){
//     console.log(this.name + 'make a sound');
// };


// let dog = new Animal('Dog');
// dog.speak();


function Car(name){
    this.name = name;
}

Car.prototype.bike=function(){
    console.log(`This came from Car Class ${this.name}`);
};

let car= new Car('Swift')
car.bike()