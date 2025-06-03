export function initlogin() {
    document.querySelector('.slide:nth-child(1) .submit').addEventListener('click', function () {
    const email = document.getElementById('email-login').value.trim();
    const senha = document.getElementById('senha-login').value;
    const errorMsg = document.getElementById("error-msg");

    // Carrega usuários do localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Procura o usuário por username ou email
    const userFound = users.find(user =>
    user.email === email && user.senha === senha
    );
    
    if (!email || !senha) {
      errorMsg.style.color = "red";
      errorMsg.textContent = "Por favor, preencha o e-mail e a senha.";
      setTimeout(() => errorMsg.textContent = "", 2000);
      return;
    }

    if (userFound) {
        // Login válido: redirecionar para a próxima página
        window.location.href = "index/teste_index.html";
    } else {
        // Login inválido: mostrar erro
        errorMsg.style.color = "red";
        errorMsg.textContent = "Usuário ou senha incorretos.";
        setTimeout(() => errorMsg.textContent = "", 2000);
    }
});}