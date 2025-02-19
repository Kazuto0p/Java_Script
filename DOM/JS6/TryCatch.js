// function divide(a,b) {
//     try{
//         if(b===0){
//             throw new Error("Division by Zero is not possible")
//         }
//         console.log("Result : ",a/b);
//     }
//     catch (error){
//         console.log("Error",error.message);
//     } finally {
//         console.log("Execution completed .")
//     }
// }

// divide(5,3)
// divide(25,5)


// function testRefer(){
//     // let a;
//     console.log(a)
// }
// function num() {
//     let b=5
//     console.log(b)
// }

// try{
//     testRefer();

//     try{
//         num();
//     }catch(error){
//         console.log(error.name)
//         console.log(error.message)
//     }
// }
// catch (error){
//     console.log(error.name)
//     console.log(error.message)
// }


// try{

//     try{

//         // console.log(a)
//         throw new Error("ReferenceError")
//     }

//     catch(e){

//         console.log(e.message)


//     }

//     try{

//         // a=10
//         // a()
//         throw new Error("Type Error")
//     }

//     catch(e){

//         console.log(e.message)

//     }
// }

// catch(e){

//     console.log("Nothing")
// }



// function number(n){
//     try{
//         if(n<0){
//             throw new Error("Enter a Positive Number")
//         }
//     }catch(error){
//         console.log(error.message)
//     }
// }

// number(-2)






// let a = [1, 2, 3, 4, 5, 6, 7]; 

// try {
   
//     console.log(a[10]);
// } catch (error) {
   
//     console.log("Error occurred: " + error.message);
// } finally {
    
//     console.log("Program execution finished.");
// }
function validate(name, age) {

    let c = name.indexOf("@gmail.com");

  
    if (c === -1) {
        try {
            throw new Error("Enter a valid Gmail address");
        }
        catch (error) {
            console.log(error.message); 
        }
    } else {
        console.log("Valid email address");
    }

    
    if (age <= 0) {
        try {
            throw new Error("Enter a valid Age");
        }
        catch (error) {
            console.log(error.message); 
        }
    } else {
        console.log("Valid Age");
    }
}

validate("alice@gmail.com", 2);   
validate("alice@yahoo.com", 0);   
validate("bob@gmail.com", -5);    
