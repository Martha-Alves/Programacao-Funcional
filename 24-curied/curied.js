function add(x) {
    // Altere apenas o código abaixo desta linha
    return function curied(y) {
      return function curied2(z) {
        return x + y + z
      }
    }
  
    // Altere apenas o código acima desta linha
  }
  
  
// Exemplo

// function unCurried(x, y) {
//   return x + y;
// }

// function curried(x) {
//   return function(y) {
//     return x + y;
//   }
// }

// const curried = x => y => x + y
