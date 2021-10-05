(function (win, doc) {
  "use strict";
  /*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
  const $btnIgual = doc.querySelector("[data-js='btnIgual']");
  const $input = doc.querySelector("#input");
  const $btnNumberPress = doc.querySelectorAll("[data-js='btnNumber']");
  const $btnOperator = doc.querySelectorAll("[data-js='btnOperation']");
  const $btnReset = doc.querySelector("[data-js='btnReset']");

  $btnReset.addEventListener(
    "click",
    function (e) {
      $input.value = 0;
    },
    false
  );

  $input.addEventListener(
    "click",
    function (e) {
      alert("Proibido clicar no input, utilize os botões.");
    },
    false
  );

  $btnNumberPress.forEach(function (item, index) {
    $btnNumberPress[index].addEventListener(
      "click",
      function (e) {
        if ($input.value == 0) $input.value = "";
        $input.value = $input.value.concat(item.value);
        console.log($input.value);
      },
      false
    );
  });

  $btnOperator.forEach(function (item, index) {
    $btnOperator[index].addEventListener(
      "click",
      function (e) {
        let operator = $input.value[$input.value.length - 1];

        if (
          operator === "+" ||
          operator === "-" ||
          operator === "*" ||
          operator === "/"
        ) {
          $input.value = $input.value.replace(/[+\-*\/]$/g, item.value);
          $input.value = $input.value;
        } else {
          $input.value = $input.value.concat(item.value);
        }
        console.log($input.value);
      },
      false
    );
  });
  $btnIgual.addEventListener(
    "click",
    function (e) {
      $input.value = eval($input.value);
      return $input.value;
    },
    false
  );
})(window, document);
