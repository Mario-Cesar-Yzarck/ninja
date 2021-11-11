(function (win, doc, DOM) {
  "use strict";

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */
  function app() {
    const $tableCars = new DOM('[data-js="tableCars"]');
    const $btnCadastrar = new DOM('[data-js="btnCadastrar"]');
    const $name = new DOM('[data-js="enterpriseName"]');
    const $phone = new DOM('[data-js="phone"]');
    const $link = new DOM('[data-js="link"]');
    const $tipo = new DOM('[data-js="marca/modelo"]');
    const $year = new DOM('[data-js="year"]');
    const $Placa = new DOM('[data-js="Placa"]');
    const $color = new DOM('[data-js="color"]');

    const ajax = new XMLHttpRequest();
    ajax.open("GET", "company.json");
    ajax.send();

    eventReadyState();
    startRegister();

    function eventReadyState() {
      ajax.addEventListener("readystatechange", () => {
        if (isRequestOk()) {
          let data = JSON.parse(ajax.responseText);
          $name.get()[0].textContent = data.name;
          $phone.get()[0].textContent = data.phone;
        }
      });
    }

    function isRequestOk() {
      if (ajax.readyState === 4 && ajax.status === 200) {
        return true;
      }
    }

    function startRegister() {
      $btnCadastrar.get()[0].addEventListener("click", (e) => {
        if (inputsEmpty()) {
          alert("Preencha todos os campos do formulário.");
          return;
        }
        let html = "";
        html += `<tr><td><a href="${
          $link.get()[0].value
        }" target="_blank">IMAGEM</a></td>`;
        html += `<td>${$tipo.get()[0].value.toUpperCase()}</td>`;
        html += `<td>${$year.get()[0].value.toUpperCase()}</td>`;
        html += `<td>${$Placa.get()[0].value.toUpperCase()}</td>`;
        html += `<td>${$color.get()[0].value.toUpperCase()}</td>`;
        $tableCars.get()[0].innerHTML += html;
        resetInputs();
      });
    }

    function inputsEmpty() {
      if (
        $link.get()[0].value === "" ||
        $tipo.get()[0].value === "" ||
        $year.get()[0].value === "" ||
        $Placa.get()[0].value === "" ||
        $color.get()[0].value === ""
      ) {
        return true;
      }
    }

    function resetInputs() {
      $link.get()[0].value = "";
      $tipo.get()[0].value = "";
      $year.get()[0].value = "";
      $Placa.get()[0].value = "";
      $color.get()[0].value = "";
    }
  }

  app();
})(window, document, DOM);
