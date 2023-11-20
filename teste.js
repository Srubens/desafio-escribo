function sumDivisor(numero) {
    let somatorio = 0;
  
    for (let i = 1; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        somatorio += i;
      }
    }
  
    return somatorio;
  }
  

console.log(sumDivisor(8))
console.log(sumDivisor(9))
console.log(sumDivisor(10))
console.log(sumDivisor(11))
  