const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Altere apenas o código abaixo desta linha
  let myArr = arr.slice();
  let myFunc = (a, b) => a - b

  myArr.sort(myFunc)

  return myArr

  // Altere apenas o código acima desta linha
}

console.log(nonMutatingSort(globalArray));