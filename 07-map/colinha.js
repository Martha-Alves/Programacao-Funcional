//funcao anonima 

const soma = function(v1, v2){return v1 + v2};

var data = soma(1, 2);

console.log(data)

//f anonima com construtor

const soma2 = new Function("n1", "n2", "n3", "return n1 + n2 + n3");

var data2 = soma2(4, 5, 10);

console.log(data2)

// arrow function

const sominha = (l1, l2) => {return l1 + l2};

var data3 = sominha(7, 7);

console.log(data3);

// se tiver so um parametro nao preciso colocar parentese

const algo = k1 => {return k1 * 9}

var data4 = algo(4);

console.log(data4);

// se não uso o return não tenho obrigatoriedade de usar as chaves

const add = n => n + 10

var data5 = add(23);

console.log(data5);

//Este padrão é conhecido como immediately invoked function expression (expressão de função invocada imediatamente) ou IIFE.

(function () {
    console.log("A cozy nest is ready");
  })();

