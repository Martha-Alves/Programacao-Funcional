// A variável global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Altere o código abaixo desta linha
let newBookList;

function add(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;

  // Altere o código acima desta linha
}

newBookList = add(bookList, "1984");
console.log(newBookList)


// Altere o código abaixo desta linha
function remove(arr, bookName) {
  let newArr = [...arr];
  const book_index = newBookList.indexOf(bookName);
  if (book_index >= 0) {

    newArr.splice(book_index, 1);
    return newArr;

    // Altere o código acima desta linha
    }
}

newBookList = remove(bookList, "Disquisitiones Arithmeticae");
console.log(newBookList);


