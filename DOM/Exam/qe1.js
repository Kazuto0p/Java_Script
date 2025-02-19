let a=parseInt(prompt("Enter a mark"));
switch(a){
    case 1:
        if(a>=90 && a<=100){
            console.log('A Grade');
        }
    break;
    case 2:
        if(a>=80 && a<=89){
            console.log('B Grade');
        }
        break;
    case 3:
        if(a>=70 && a<=79){
            console.log('C Grade');
        }
        break;
    case 4:
        if(a<70){
            console.log("FAILED");
        }
        break;
    default :{
        console.log("INVALID");
        break;
    }
}