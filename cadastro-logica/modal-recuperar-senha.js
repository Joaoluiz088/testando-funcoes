// export
function abrirModal() {
    document.getElementById('modal-recuperar').style.display = 'flex';
  }

  function fecharModal() {
    document.getElementById('modal-recuperar').style.display = 'none';
  }

// export
  function enviarRecuperacao() {
    const email = document.getElementById('recuperar-email').value;
    if (email.trim() === "") {
      alert("Por favor, digite seu e-mail.");
      return;
    }
    alert("Se este e-mail estiver cadastrado, enviaremos um link para redefinir sua senha.");
    fecharModal();
  }