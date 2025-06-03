// Carrega usuários do localStorage ou inicializa vazio
let users = JSON.parse(localStorage.getItem("users")) || [];

export function initCadastro() {
  // Captura o botão de cadastro
  document.querySelector('.slide:nth-child(2) .submit').addEventListener('click', function () {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmar = document.getElementById('confirmar').value;
    const termos = document.querySelector('.slide:nth-child(2) .checkbox input').checked;
    const errorMsg = document.getElementById("error-msg2");

    if (!nome || !email || !senha || !confirmar) {
      errorMsg.style.color = "red";
      errorMsg.textContent = "Por favor, preencha todos os campos.";
      setTimeout(() => errorMsg.textContent = "", 2000);
      return;
    }

    if (senha !== confirmar) {
      errorMsg.style.color = "red";
      errorMsg.textContent = "As senhas não coincidem.";
      setTimeout(() => errorMsg.textContent = "", 2000);
      return;
    }

    if (!termos) {
      errorMsg.style.color = "red";
      errorMsg.textContent = "Você precisa aceitar os termos para continuar.";
      setTimeout(() => errorMsg.textContent = "", 2000);
      return;
    }

    // Adiciona e salva no localStorage
    users.push({ nome, senha, email });
    localStorage.setItem("users", JSON.stringify(users));

    // Limpa os campos
    document.getElementById('nome').value = "";
    document.getElementById('email').value  = "";
    document.getElementById('senha').value = "";
    document.getElementById('confirmar').value = "";
    // Marca a checkbox de termos como desmarcada
    document.querySelector('.slide:nth-child(2) .checkbox input').checked = false;

    // Exibe mensagem de sucesso
    errorMsg.style.color = "green";
    errorMsg.textContent = "Cadastro realizado com sucesso!";
    setTimeout(() => errorMsg.textContent = "", 2000);

    // Redireciona para a tela de login
    if (typeof goToSlide === "function") {
      goToSlide(0);
    }
  });
}