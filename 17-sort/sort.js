function alphabeticalOrder(arr) {
    // Altere apenas o código abaixo desta linha
    let myArr = arr;
    let myFunc = (a,b) => a === b? 0 : a < b ? -1 : 1;
  
    myArr.sort(myFunc) //apenas sort também funciona mas é recomendado que eu use funções
    
    return myArr
    // Altere apenas o código acima desta linha
  }
  
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

  //se compareFunction(a,b) retornar um valor menor que 0 para dois elementos a e b, então a virá antes de b. Se compareFunction(a,b) retornar um valor maior que 0 para dois elementos a e b, então b virá antes de a. Finalmente, se compareFunction(a,b) retornar 0, então a e b não trocarão de lugar entre si.