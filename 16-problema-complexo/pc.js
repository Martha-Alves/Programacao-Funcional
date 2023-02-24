const squareList = arr => {
    // Altere apenas o código abaixo desta linha
    let myArr = arr
      .filter(num => num > 0 && num % parseInt(num) === 0)
      .map((num) => num > 0 && Math.pow(num, 2))
    return myArr;
    // Altere apenas o código acima desta linha
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
  