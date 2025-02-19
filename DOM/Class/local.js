// class Library{
//     constructor (bookname,avail){
//         this.bookname = bookname
//         this.avail = avail
//     }
//     del(){
//         console.log(`the ${this.bookname} book is ${this.avail} `)
//     }
// }

// let mylibrary = new Library("Nightingale" ,"Not Available")
// mylibrary.del()



// ====================================================================================


// class Dealership{

//     constructor(name,engine){
//         this.name = name
//         this.engine = engine
//     }

//     msg(){
//         return `this ${this.name} has ${this.engine} cc`
//     }


// }

// class Car extends Dealership{
//     constructor(name,engine,passeger_cap,fuel_type){

//         super(name,engine)
//         this.passeger_cap = passeger_cap
//         this.fuel_type = fuel_type
//     }
//     msg(){
//         return `${super.msg()} and no passengers ${this.passeger_cap}  fuel type ${this.fuel_type}`
//     }
// }

// class Bike extends Dealership{
//     constructor(name,engine,passeger_cap,fuel_type){
//     super(name,engine)
//     this.passeger_cap = passeger_cap
//     this.fuel_type = fuel_type

//     }
//     msg(){
//       return `${super.msg()} and no passengers ${this.passeger_cap}  fuel type ${this.fuel_type}`
//     }
// }

// class Bus extends Dealership {
//     constructor(name,engine,passeger_cap,fuel_type){
//         super(name,engine)
//         this.passeger_cap = passeger_cap
//         this.fuel_type = fuel_type
    
//     }
//     msg(){
//       return `${super.msg()} and no passengers ${this.passeger_cap}  fuel type ${this.fuel_type}`
//     }
// }

// var a=new Car("Swift",1500,45,'petrol');
// console.log(a.msg())
// var b=new Bike("NS",200,2,"petrol");
// console.log(b.msg())



// =============================================================================================================


// class Account {
//     #balance;

//     constructor(acc_number, acc_name, balance) {
//         this.acc_number = acc_number;
//         this.acc_name = acc_name;
//         this.#balance = balance;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//             console.log(`${amount} has been added. New balance is ${this.#balance}`);
//         } else {
//             console.log("Amount must be greater than zero.");
//         }
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.#balance) {
//             this.#balance -= amount;
//             console.log(`${amount} has been withdrawn. New balance is ${this.#balance}`);
//         } else {
//             console.log("Insufficient balance or invalid withdrawal amount.");
//         }
//     }

//     showaccDetails() {
//         console.log(`Account Number: ${this.acc_number}, Account Holder: ${this.acc_name}`);
//     }

//     showBalance() {
//         return this.#balance;
//     }
// }

// class SavingsAccount extends Account {
//     constructor(acc_number, acc_name, balance, interestRate) {
//         super(acc_number, acc_name, balance);
//         this.interestRate = interestRate;
//     }
// }

// class CurrentAccount extends Account {
//     constructor(acc_number, acc_name, balance, overdraftLimit) {
//         super(acc_number, acc_name, balance);
//         this.overdraftLimit = overdraftLimit;
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.showBalance() + this.overdraftLimit) {
//             super.withdraw(amount);
//         } else {
//             console.log("Withdrawal exceeds overdraft limit.");
//         }
//     }
// }


// const savings = new SavingsAccount(101, "Alice", 2000, 5);
// const savings1 = new SavingsAccount(1408, "Akhil", 800, 90);
// const current = new CurrentAccount(102, "Althaf", 1000, 500);


// savings.showaccDetails();
// console.log("Savings Initial Balance:", savings.showBalance());
// savings.deposit(500);
// console.log("Savings Final Balance:", savings.showBalance());

// console.log("\n");


// savings1.showaccDetails();
// console.log("Savings Initial Balance:", savings1.showBalance());
// savings1.deposit(400);
// console.log("Savings Final Balance:", savings1.showBalance());

// console.log("\n");

// current.showaccDetails();
// console.log("Current Initial Balance:", current.showBalance());
// current.deposit(300);
// current.withdraw(1200);
// current.withdraw(800);
// console.log("Current Final Balance:", current.showBalance());

// console.log(current.showBalance()); 



// =======================================================================

// class Roles{
//     role(){
//         console.log("Roles of each")
//     }
// }

// class Students extends Roles{
//     role(){
//         console.log("A student's role in school is to learn")
//     }
// }

// class Teacher extends Roles{
//     role(){
//         console.log("Teaching students")
//     }
// }

// class Administrator extends Roles{
//     role(){
//         console.log("A school administrator manages the day-to-day operations of a school. ")
//     }
// }

// function describe(a){
//     a.role();
// }

// const student=new Students();
// const teacher=new Teacher();
// const admin=new Administrator();
// student.role()
// teacher.role()
// admin.role()



// =============================================================================



// 5

// function Gamecharacter(name, direction){
//     this.name = name;
//     this.direction = direction
// }

// Gamecharacter.prototype.move = function(){
//     console.log(`${this.name} moves ${this.direction}.`);
// }

// Gamecharacter.prototype.attack = function(){
//     console.log(`${this.name} attaks .`);
// }

// function hero(name, direction) {
//     Gamecharacter.call(this, name, direction);  
// }

// hero.prototype = Object.create(Gamecharacter.prototype);
// hero.prototype.constructor = hero;

// hero.prototype.ability = function(){
//     console.log(`${this.name} super strength ability`)
// }

// const myhero = new hero("Thor","Forward");
// myhero.ability();
// myhero.attack();
// myhero.move();


// =========================================================================

// 6



// class Animal {
//     constructor(name, food) {
//         if (new.target === Animal) {
//             throw new Error("Cannot instantiate an abstract class.");
//         }
//         this.name = name;
//         this.food = food;
//     }

//     eat() {
//         throw new Error("Method 'eat()' must be implemented.");
//     }

//     sleep() {
//         console.log(`The ${this.name} is sleeping.`);
//     }
// }

// class Lion extends Animal {
//     constructor(name, food) {
//         super(name, food);
//     }


//     eat() {
//         console.log(`The ${this.name} eats ${this.food}`);
//     }

//     roar() {
//         console.log(`The ${this.name} roars loudly!`);
//     }
// }


// class Rabbit extends Animal {
//     constructor(name, food) {
//         super(name, food);
//     }


//     eat() {
//         console.log(`The ${this.name} eats ${this.food}`);
//     }

//     hop() {
//         console.log(`The ${this.name} hops around.`);
//     }
// }


// try {
//     const myAnimal = new Animal("Generic Animal", "Food");
// } catch (e) {
//     console.log(e.message); 
// }

// const myLion = new Lion("Lion", "Meat");
// const myRabbit = new Rabbit("Rabbit", "Grass");

// myLion.eat();
// myLion.sleep(); 
// myLion.roar(); 

// myRabbit.eat(); 
// myRabbit.sleep(); 
// myRabbit.hop();

// =================================================================

// 7

// class Products {
//     #price;
//     #quantity;
//     constructor(name, price, quantity) {
//         this.name = name;
//         this.#price = price;
//         this.#quantity = quantity;
//     }

//     getName() {
//         return this.name;
//     }

//     getPrice() {
//         return this.#price;
//     }

//     setPrice(price) {
//         if (price > 0) {
//             this.#price = price;
//         } else {
//             console.log("Price must be positive.");
//         }
//     }

//     setQuantity(quantity) {
//         if (quantity > 0) {
//             this.#quantity = quantity;
//         } else {
//             console.log("Enter Quantity in positive.");
//         }
//     }

//     getSum() {
//         return this.#price * this.#quantity;
//     }
// }

// class Cart extends Products {
//     #products;

//     constructor(name, price, quantity) {
//         super(name, price, quantity); 
//         this.#products = [];
//     }

//     msg() {
//         this.#products.push(this.getName()); 
//         console.log(`${this.getName()} selected`);
//     }

   
//     calculateTotal() {
//         let total = 0;
//         this.#products.forEach(product => {
//             total += this.getSum();
//         });
//         console.log(`Total: ${total}`);
//     }
// }

// let a = new Cart("Candy", 10, 5);
// a.msg();
// a.calculateTotal();






// ===================================================================================================================

// const vehicle={
//     type:"vehicle",
//     start(){
//         console.log(`${this.type} car is starting`);
//     }
// }

// const car = Object.create(vehicle);
// console.log(car)
// car.type="Horizon"
// car.start()


// ====================================================================================================



// function car(name){
//     let car={
//         fuel:"petrol",
//     }
//     car.name=name;
//     car.feature=function(){
//         console.log(`${this.name} is no 1 vehicle`);
//     }
//     return car
// }

// const Toyota=car("fortuner");

// Toyota.feature();

// console.log(Toyota.fuel)

// ============================================================================


// class Shape{
//     constructor(length,width){
//         if (new.target === Shape) {
//             throw new Error("Cannot instantiate an abstract class.");
//         }
//         this.length=length
//         this.width=width
//     }

//     area(){
//         throw new Error ("u cant access it")
//     }


// }


// class Rectangle extends Shape{
//     constructor(length,width,Area){
//       super(length,width)
//       this.Area=Area
//     }
//     area(){
//          this.Area=this.length*this.width
//         console.log(`Area ${this.Area}`)
//     }
    
// }


// const myArea=new Rectangle(2,5)
// myArea.area();


// ========================================================================

// 8


// ================================================================================



// class bankaccount{

//     #balance;
//     constructor(initialBalance){
//         this.#balance = initialBalance;
//     }

//     deposit(amount){
//         if (amount > 0){
//             this.#balance += amount;
//             console.log(`Deposit ${this.#balance}`)
//         }
        
//     }
//     withdrow (amount){
//         if(amount>0 && amount <= this.#balance){
//             this.#balance -= amount
//             console.log(`Withdraw ${this.amount}` )
//         } else{
//             console.log(`Insufficient`)
//         }
//     }


//     getBalance(){
//         return this.#balance
//     }
// }

// const account = new bankaccount(1000);
// account.deposit(500);
// account.withdrow(200);
// console.log(account.getBalance());


// class Animal {
//     makeSound() {
//         // Abstract method, must be implemented by subclasses
//         throw new Error("This method should be overridden");
//     }
// }

// class Dog extends Animal {
//     makeSound() {
//         console.log("Woof! Woof!");
//     }
// }

// class Cat extends Animal {
//     makeSound() {
//         console.log("Meow! Meow!");
//     }
// }

// // Using the Animal classes
// const dog = new Dog();
// const cat = new Cat();
// const n = new Animal();
// n.makeSound()
// dog.makeSound();  // Output: Woof! Woof!
// cat.makeSound();  // Output: Meow! Meow!







//============================================================
// // Base object: person
// const person = {
//     name: "John Doe",
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// // Create a new object `student` that inherits from `person`
// const student = Object.create(person);

// // Log the `student` object
// console.log(student);  // Initially, the student object inherits from person

// // Change the `name` property on `student`
// student.name = "Alice";

// // Call the `greet()` method on `student`
// student.greet();


// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//         this._fuel = 100; // Private property
//     }

//     // Getter
//     get fuel() {
//         return this._fuel;
//     }

//     // Setter
//     set fuel(amount) {
//         if (amount < 0) {
//             console.log("Fuel amount can't be negative.");
//         } else {
//             this._fuel = amount;
//         }
//     }
// }

// const myCar = new Car("Toyota", "Corolla");

// console.log(myCar.fuel);  // Using getter: Output: 100

// myCar.fuel = 80;  // Using setter
// console.log(myCar.fuel);  // Output: 80

// myCar.fuel = -10;  // Trying to set a negative value: Output: Fuel amount can't be negative.


//============================================================

// class MusicPlayer {
    //     constructor() {
    //       this.currentTrack = null;
    //       this.isPlaying = false;
    //     }
      
    //     play(track) {
    //       if (track) {
    //         this.currentTrack = track;
    //       }
    //       if (this.currentTrack) {
    //         this.isPlaying = true;
    //         console.log(`Playing: ${this.currentTrack}`);
    //       } else {
    //         console.log("No track selected to play.");
    //       }
    //     }
      
    //     pause() {
    //       if (this.isPlaying) {
    //         this.isPlaying = false;
    //         console.log(`Paused: ${this.currentTrack}`);
    //       } else {
    //         console.log("Nothing is playing right now.");
    //       }
    //     }
      
    //     stop() {
    //       if (this.currentTrack) {
    //         console.log(`Stopped: ${this.currentTrack}`);
    //         this.isPlaying = false;
    //         this.currentTrack = null;
    //       } else {
    //         console.log("No track to stop.");
    //       }
    //     }
    //   }
      
     
    //   class PlaylistPlayer extends MusicPlayer {
    //     constructor() {
    //       super();
    //       this.playlist = [];
    //       this.currentIndex = 0;
    //     }
      
    //     addTrack(track) {
    //       this.playlist.push(track);
    //       console.log(`Added: ${track} to the playlist.`);
    //     }
      
    //     removeTrack(track) {
    //       const index = this.playlist.indexOf(track);
    //       if (index !== -1) {
    //         this.playlist.splice(index, 1);
    //         console.log(`Removed: ${track} from the playlist.`);
    //       } else {
    //         console.log(`Track not found in playlist.`);
    //       }
    //     }
      
    //     playNext() {
    //       if (this.playlist.length === 0) {
    //         console.log("Playlist is empty.");
    //         return;
    //       }
      
    //       this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
    //       this.play(this.playlist[this.currentIndex]);
    //     }
      
    //     playPrevious() {
    //       if (this.playlist.length === 0) {
    //         console.log("Playlist is empty.");
    //         return;
    //       }
      
    //       this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
    //       this.play(this.playlist[this.currentIndex]);
    //     }
      
    //     showPlaylist() {
    //       console.log("Playlist:");
    //       this.playlist.forEach((track, index) => {
    //         console.log(`${index + 1}. ${track}`);
    //       });
    //     }
    //   }
      
    
    //   const myPlayer = new PlaylistPlayer();
      
    //   myPlayer.addTrack("Die with a Smile- Bruno Mars");
    //   myPlayer.addTrack("Attention - Charlie Puth");
    //   myPlayer.addTrack("Shape Of You - Ed Sheeran");
      
    //   myPlayer.showPlaylist();
      
    //   myPlayer.play("Die with a Smile- Bruno Mars");
    //   myPlayer.pause();
    //   myPlayer.playNext();
    //   myPlayer.playPrevious();
    //   myPlayer.stop();
      
    //   myPlayer.removeTrack("Attention - Charlie Puth");
    //   myPlayer.showPlaylist();

//============================================================


// Base class for Users
// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     bookTicket(event) {
//         throw new Error("This method should be overridden by subclasses");
//     }
// }

// // Regular User class (inherits from User)
// class RegularUser extends User {
//     bookTicket(event) {
//         if (event.availableTickets > 0) {
//             event.availableTickets -= 1;
//             return `${this.name} has booked a regular ticket for ${event.name}.`;
//         } else {
//             return "Sorry, no tickets available.";
//         }
//     }
// }

// // VIP User class (inherits from User)
// class VIPUser extends User {
//     bookTicket(event) {
//         if (event.availableTickets > 0) {
//             event.availableTickets -= 1;
//             return `${this.name} has booked a VIP ticket for ${event.name}, with priority seating.`;
//         } else {
//             return "Sorry, no tickets available.";
//         }
//     }
// }

// // Event class
// class Event {
//     constructor(name, date, totalTickets) {
//         this.name = name;
//         this.date = date;
//         this.totalTickets = totalTickets;
//         this.availableTickets = totalTickets;
//     }

//     showDetails() {
//         return `Event: ${this.name} on ${this.date}. Tickets Available: ${this.availableTickets}`;
//     }
// }

// // Example usage
// const event = new Event("Concert", "2025-03-15", 50);
// const user1 = new RegularUser("Alice", "alice@example.com");
// const user2 = new VIPUser("Bob", "bob@example.com");

// console.log(user1.bookTicket(event));  // Regular user booking
// console.log(user2.bookTicket(event));  // VIP user booking
// console.log(event.showDetails());  // Check remaining tickets



//============================================================



// class Feedback {
//     constructor(user, message) {
//         this.user = user;
//         this.message = message;
//     }

//     respond() {
//         throw new Error("This method should be overridden by subclasses");
//     }
// }

// // Complaint class (inherits from Feedback)
// class Complaint extends Feedback {
//     respond() {
//         return `Dear ${this.user}, we are sorry for the inconvenience. We will look into your complaint: "${this.message}"`;
//     }
// }

// // Suggestion class (inherits from Feedback)
// class Suggestion extends Feedback {
//     respond() {
//         return `Dear ${this.user}, thank you for your suggestion: "${this.message}". We will consider it for future improvements.`;
//     }
// }

// // Example usage
// const feedback1 = new Complaint("Alice", "The sound system was not clear during the event.");
// const feedback2 = new Suggestion("Bob", "It would be great to have more vegetarian options at the food stalls.");

// console.log(feedback1.respond());  
// console.log(feedback2.respond());

// class Secret {
//     #private = "Top Secret";

//     getPublic(){
//         return "Nothing to see here";
//     }
// }

// const obj = new Secret ();
// console.log(obj.getPublic())
// //  // console.log(obj.private())



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// Abstract class Animal
// function Animal() {
//     // Prevent instantiation of the abstract class
//     if (this.constructor === Animal) {
//         throw new Error("Cannot instantiate abstract class Animal");
//     }

//     // Abstract method placeholder
//     this.makeSound = function () {
//         throw new Error("Cannot call abstract method makeSound from Animal");
//     };
// }

// // Concrete class Dog that extends Animal
// function Dog(name) {
//     Animal.call(this);  // Call the Animal constructor
//     this.name = name;

//     // Implement the abstract method makeSound
//     this.makeSound = function () {
//         console.log(`${this.name} barks`);
//     };
// }

// // Inherit from the abstract class Animal
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// // Create an instance of the Dog class
// let dog = new Dog("Buddy");
// dog.makeSound();  // Output: Buddy barks

// // Try to create an instance of the abstract class Animal
// try {
//     let animal = new Animal();
// } catch (error) {
//     console.error(error.message);  // Output: Cannot instantiate abstract class Animal
// }

class Hello{
    constructor(name){
        this.name = name
    }
    h(){
        console.log(`haii ${this.name}`)
    }
}

a= new Hello("Althaf")
a.h()
