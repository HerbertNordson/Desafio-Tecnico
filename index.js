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
    console.log("1");
  } else {
    cadastro.style.display = "block";
    console.log("2");
  }
}

// const botao = document.querySelector(".botaoInscricao");
// const mostrar = document.querySelector(".telaCadastro");

function envio() {
  const enviar = document.getElementById("enviar");
  const nome = document.getElementById("nomeDoColaborador");
  const nomeDaFoto = document.getElementById("nomeDaFoto");
  const localFoto = document.getElementById("localDaFoto");
  const data = document.getElementById("dataDeRegistro");
  const check = document.getElementById("termo");
  const foto = document.getElementById("arquivo");

  //   function getBase64(file) {
  //     var reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = function () {};
  //     reader.onerror = function (error) {
  //       console.log("Error: ", error);
  //     };
  //   }

  //   const imagemConverte = getBase64(foto.files[0]);

  //   const b64 = atob(imagemConverte);
  //   console.log(b64);

  var f = foto.files[0]; // FileList object
  var reader = new FileReader();
  // Closure to capture the file information.
  reader.onload = function (theFile) {
    return function (e) {
      var binaryData = e.target.result;
      //Converting Binary Data to base 64
      var base64String = window.btoa(binaryData);
      //showing file converted to base64
      console.log(base64String);
    };
  };
  // Read in the image file as a data URL.
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
          img_base64: valor,
          termos: bool,
        }),
      }).catch((err) => {
        console.log(err);
      });
    }
  });
}

// function cadastro() {
//   const div = document.createElement("div");
//   mostrar.append(div);

//   div.innerHTML = `
// 				<section id="cadastro">
// 				  <div class="card">
// 					<div class="top">
// 					  <h2>Cadastro</h2>
// 					  <a class="fechar" href="">X</a>
// 					</div>
// 					<div class="dados">
// 					  <form id="register1" action="" method="post">
// 						<label for="name">Nome do colaborador:</label>
// 						<input
// 						  type="text"
// 						  name="name"
// 						  id="nomeDoColaborador"
// 						  placeholder="Insira seu nome"
// 						/>
// 					  </form>
// 					  <form id="register2" action="" method="post">
// 						<label for="email">Nome da foto:</label>
// 						<input
// 						  type="email"
// 						  name="email"
// 						  id="nomeDaFoto"
// 						  placeholder="Insira o nome da foto"
// 						/>
// 					  </form>
// 					</div>
// 					<div class="dados">
// 					  <form id="register3" action="" method="post">
// 						<label for="name">Local da foto:</label>
// 						<input
// 						  type="text"
// 						  name="name"
// 						  id="localDaFoto"
// 						  placeholder="Insira o local da foto"
// 						/>
// 					  </form>
// 					  <form id="register4" action="" method="post">
// 						<label for="email">Data de registro:</label>
// 						<input
// 						  type="email"
// 						  name="email"
// 						  id="dataDeRegistro"
// 						  placeholder="MM/DD/YYYY"
// 						/>
// 					  </form>
// 					</div>
// 					<div>
// 					  <h3>Anexar Foto</h3>
// 					  <input type="hidden" name="MAX_FILE_SIZE" value="4194304" />
// 					  <input type="file" class="arquivo"/>
// 					</div>
// 					<div class="termos">
// 					  <h3>Termos</h3>
// 					  <div>
// 					  <textarea class="termosDeUso">
// 					  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

// 					  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
// 					  </textarea>
// 					  </div>
// 					  <div class="liEconcordo">
// 					  <input type="checkbox" name="termos"/> <span>Eu li e concordo com os termos</span>
// 					  </div>
// 					  <div class="botaoEnviar">
// 						  <button type="submit" id="enviar" onclick="envio()"> Enviar </button>
// 					  </div>
// 					</div>
// 				  </div>
// 				</section>
// 			  `;
// }

// botao.addEventListener("click", () => {
//   cadastro();
// });

// Script de interação da tela de Cadastro 9 (Input, Button, Check-box, Inserir imagem e Fechar);
