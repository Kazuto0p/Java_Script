function temp(){
    if(t<10){
        console.log("Cold")
    }
    else if(t>=10 && t<=30){
        console.log("Warm")
    }
    else{
        console.log("Hot")
    }
}

let t = 15;
temp()