(function (win, doc) {
  /*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/
  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(event, callback) {
    this.element.forEach((e) => {
      return e.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback) {
    this.element.forEach((e) => {
      return e.removeEventListener(event, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.map = function map(callback) {
    return callback();
  };

  DOM.prototype.foreach = function foreach(array) {
    for (let element of array) {
      for (let i = 0; i < array.length; i++) {
        return element;
      }
    }
  };

  var $a = new DOM('[data-js="link"]');
  $a.on("click", function handleClick(e) {
    e.preventDefault();
    console.log("clicou");
    $a.off("click", handleClick);
  });

  console.log("Elementos selecionados:", $a.get());
  console.log("$a é filho de body?", $a.get()[0].parentNode === document.body);

  console.log(
    $a.map(() => {
      let newArray = [];
      for (let i = 0; i < $a.element.length; i++) {
        newArray.push($a.element[i]);
      }

      return newArray;
    })
  );

  console.log($a.foreach($a.element));
})(window, document);
