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

const botao = document.querySelector(".botaoInscricao");
const mostrar = document.querySelector(".telaCadastro");

botao.addEventListener("click", () => {
  const div = document.createElement("div");
  mostrar.append(div);

  div.innerHTML = `
          <section id="cadastro">
            <div class="card">
              <div class="top">
                <h2>Cadastro</h2> 
				<button class="fechar"> X </button>
              </div>
              <div class="dados">
                <form id="register" action="" method="post">
                  <label for="name">Nome do colaborador:</label>
                  <input
                    type="text"
                    name="name"
                    id="nomeDoColadorador"
                    placeholder="Insira seu nome"
                  />
                </form>
                <form id="register" action="" method="post">
                  <label for="email">Nome da foto:</label>
                  <input
                    type="email"
                    name="email"
                    id="nomeDaFoto"
                    placeholder="Insira o nome da foto"
                  />
                </form>
              </div>
              <div class="dados">
                <form id="register" action="" method="post">
                  <label for="name">Local da foto:</label>
                  <input
                    type="text"
                    name="name"
                    id="localDaFoto"
                    placeholder="Insira o local da foto"
                  />
                </form>
                <form id="register" action="" method="post">
                  <label for="email">Data de registro:</label>
                  <input
                    type="email"
                    name="email"
                    id="dataDeRegistro"
                    placeholder="MM/DD/YYYY"
                  />
                </form>
              </div>
              <div>
                <h3>Anexar Foto</h3>
              </div>
              <div class="termos">
                <h3>Termos</h3>
				<div> 
				<textarea class="termosDeUso">
				Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

				The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
				</textarea>
				</div>
				<div class="liEconcordo"> 
                <input type="checkbox" name="termos"/> <span>Eu li e concordo com os termos</span>
				</div>	
				<div class="botaoEnviar"> 
					<button type="submit" id="enviar"> Enviar </button>
				</div>
              </div>
            </div>
          </section>
		`;
});
