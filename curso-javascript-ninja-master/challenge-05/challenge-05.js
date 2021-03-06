/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var anyArray = [1, "a", true, { a: 1, b: "w" }, 3 + 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function showArray(array) {
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(showArray(anyArray[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function showIndexArray(array, index) {
  return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newAnyArray = [1, "a", true, { a: 1, b: "w" }, 3 + 5];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for (let i = 0; i < newAnyArray.length; i++) {
  console.log(showIndexArray(newAnyArray, i));
}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
  let book = {
    "Game of Thrones": {
      quantidadePaginas: 500,
      autor: "George Martin",
      editora: "Leya",
    },
    "Myamoto Musashi": {
      quantidadePaginas: 150,
      autor: "Miamoto",
      editora: "Caverna",
    },
    "Dom Casmurro": {
      quantidadePaginas: 300,
      autor: "Machado",
      editora: "Brasil",
    },
  };
  return bookName ? book[bookName] : book;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(
  `O livro Myamoto Musashi tem ${
    book("Myamoto Musashi").quantidadePaginas
  } páginas!`
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
