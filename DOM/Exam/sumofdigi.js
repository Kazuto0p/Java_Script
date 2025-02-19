function sumOfDigits(num) {
    let sum = 0;
    while(num!=0)
    {
        r=num%10;
        sum=sum+r;
        num= parseInt(num / 10);
    }
    console.log(sum)
}
let num=123;
sumOfDigits(num)