(function (win, doc) {
  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
  const $inputCep = doc.querySelector("[data-js='input-cep']");
  const $btnSubmit = doc.querySelector("[data-js='btn-submit']");
  var $inputAddres = doc.querySelector("[data-js='input-addres']");
  var $inputDistrict = doc.querySelector("[data-js='input-district']");
  var $inputCity = doc.querySelector("[data-js='input-city']");
  var $inputState = doc.querySelector("[data-js='input-state']");
  var $inputCode = doc.querySelector("[data-js='input-code']");
  var $inputStatusMessage = doc.querySelector("[data-js='status-mensage']");
  var cep = "";

  $btnSubmit.addEventListener("click", handleBtnSubmit, false);

  const ajax = new XMLHttpRequest();

  function handleBtnSubmit() {
    if (isValidCep($inputCep.value)) {
      cep = cleanCep($inputCep.value);
      request();
      return cep;
    } else {
      withoutCep();
      return ($inputStatusMessage.textContent = `Não encontramos o endereço para o CEP: ${cep}...`);
    }
  }

  function isValidCep(cep) {
    let regex = /\d{5}\-?\d{3}$/g;
    return regex.test($inputCep.value);
  }

  function cleanCep(cep) {
    return cep.replace(/(\d+)(\D+)/g, "$1");
  }

  function withoutCep() {
    $inputStatusMessage.textContent = "";
    $inputAddres.value = "";
    $inputDistrict.value = "";
    $inputCity.value = "";
    $inputState.value = "";
    $inputCode.value = "";
  }

  function withCep(data) {
    $inputStatusMessage.textContent = `Endereço referente ao CEP: ${cep}:`;
    $inputAddres.value = data.address;
    $inputDistrict.value = data.district;
    $inputCity.value = data.city;
    $inputState.value = data.state;
    $inputCode.value = data.code;
  }

  function request() {
    $inputStatusMessage.textContent = `Buscando informações para o CEP: ${cep}...`;
    ajax.open("GET", `https://ws.apicep.com/cep/${cep}.JSON`);
    ajax.send();

    eventReadyState();
  }

  function eventReadyState() {
    ajax.addEventListener("readystatechange", () => {
      if (isRequestOk()) {
        let data = JSON.parse(ajax.responseText);
        if (data.status === 404) {
          withoutCep();
          return ($inputStatusMessage.textContent = `Não encontramos o endereço para o CEP: ${cep}...`);
        }
        withCep(data);
      } else {
        withoutCep();
        return ($inputStatusMessage.textContent = `Não encontramos o endereço para o CEP: ${cep}...`);
      }
    });
  }

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }
})(window, document);
