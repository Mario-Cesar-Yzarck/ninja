(function (win, doc) {
  "use strict";
  /*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.

- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
*/

  function createConsts() {
    win.$visor = doc.querySelector('[data-js="visor"]');
    win.$buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
    win.$buttonsOperations = doc.querySelectorAll(
      '[data-js="button-operation"]'
    );
    win.$buttonCE = doc.querySelector('[data-js="button-ce"]');
    win.$buttonEqual = doc.querySelector('[data-js="button-equal"]');
  }

  function startEventClickInForEach(button, handleFunction) {
    Array.prototype.forEach.call(button, (button) => {
      button.addEventListener("click", handleFunction, false);
    });
  }

  function startEventsCeAndEqual(button, handleFunction) {
    button.addEventListener("click", handleFunction, false);
  }
  function activeEvents() {
    startEventClickInForEach($buttonsNumbers, handleClickNumber);
    startEventClickInForEach($buttonsOperations, handleClickOperation);
    startEventsCeAndEqual($buttonCE, handleClickCE);
    startEventsCeAndEqual($buttonEqual, handleClickEqual);
  }

  function handleClickNumber() {
    if ($visor.value == 0) $visor.value = "";
    $visor.value += this.value;
  }

  function handleClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;
  }

  function handleClickCE() {
    $visor.value = 0;
  }

  function isLastItemAnOperation(string) {
    let operations = ["+", "-", "x", "÷"];
    let lastItem = string.split("").pop();
    return operations.some((operator) => {
      return operator === lastItem;
    });
  }

  function removeLastItemIfItIsAnOperator(string) {
    if (isLastItemAnOperation(string)) {
      return string.slice(0, -1);
    }
    return string;
  }

  function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    let allValues = $visor.value.match(/\d+[+x÷-]?/g);
    $visor.value = allValues.reduce((accumulated, actual) => {
      let firstValue = accumulated.slice(0, -1);
      let operator = accumulated.split("").pop();
      let lastValue = removeLastItemIfItIsAnOperator(actual);
      return (
        calculator(operator, firstValue, lastValue) + getLastOperator(actual)
      );
    });
  }

  function getLastOperator(current) {
    let lastOperator = "";
    return (lastOperator = isLastItemAnOperation(current)
      ? current.split("").pop()
      : "");
  }

  function calculator(operator, firstValue, lastValue) {
    let typeOperator = {
      "+": Number(firstValue) + Number(lastValue),
      "-": Number(firstValue) - Number(lastValue),
      x: Number(firstValue) * Number(lastValue),
      "÷": Number(firstValue) / Number(lastValue),
    };
    return typeOperator[operator];
  }

  createConsts();
  activeEvents();
})(window, document);
