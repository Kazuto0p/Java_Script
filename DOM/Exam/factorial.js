function factorial(num) {
    let result = 1;
    do {
      result *= num--;
    } while (num > 0);
    return result;
  }
  console.log(factorial(5)); 
  