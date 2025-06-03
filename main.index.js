import { register } from '../cadastro-logica/cadastro.index.js';
import { login } from '../cadastro-logica/login.index.js';

document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.getElementById('btnLogin');
    const btnRegister = document.getElementById('btnRegister');

    if (btnLogin) {
        btnLogin.addEventListener('click', (event) => {
            event.preventDefault();  // Evita o reload do form
            login();
        });
    }

    if (btnRegister) {
        btnRegister.addEventListener('click', (event) => {
            event.preventDefault();  // Evita o reload do form
            register();
        });
    }
});