// Script para aplicar o Scroll na SPA - Single Page Aplication;
const menuItens = document.querySelectorAll('#menu a[href^="#"]');

menuItens.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
  const to = getScrollTopByHref(event.target);

  scrollToPosition(to - 10);
}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelectorAll(id).offSetTop;
}

//Script de criação da tela de cadastro.

function cadastro() {
  const cadastro = document.querySelector(".telaCadastro");

  if (cadastro.style.display == "block") {
    cadastro.style.display = "none";
  } else {
    cadastro.style.display = "block";
  }
}

function envio() {
  const enviar = document.getElementById("enviar");
  const nome = document.getElementById("nomeDoColaborador");
  const nomeDaFoto = document.getElementById("nomeDaFoto");
  const localFoto = document.getElementById("localDaFoto");
  const data = document.getElementById("dataDeRegistro");
  const check = document.getElementById("termo");
  const foto = document.getElementById("files");

  let img;
  var f = foto.files[0];
  var reader = new FileReader();
  reader.onload = (function (theFile) {
    return function (e) {
      var binaryData = e.target.result;
      //Converting Binary Data to base 64
      var base64String = window.btoa(binaryData);
      //showing file converted to base64
      document.getElementById("base64").value = base64String;
      img = base64String;
    };
  })(f);
  reader.readAsBinaryString(f);

  enviar.addEventListener("click", () => {
    if (!check || !nome || !nomeDaFoto || !localFoto || !data || !foto) {
      alert("Favor preencher todos os campos obrigatórios.");
    } else {
      fetch("http://apidev.inema.ba.gov.br/participante", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          nome: nome.value,
          nome_foto: nomeDaFoto.value,
          local_foto: localFoto.value,
          data_foto: data.value,
          img_base64: img,
          termos: check.checked,
        }),
      })
        .then(alert("Cadastro efetuado com sucesso!"), cadastro())
        .catch((err) => {
          console.log(err);
        });
    }
  });
}
