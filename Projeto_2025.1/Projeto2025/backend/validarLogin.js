document.addEventListener('DOMContentLoaded', function() {
    const botaoEntrar = document.getElementById('botaoEntrar');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');

    formLogin.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim();

        const usuarioCadastrado = JSON.parse(localStorage.getItem('usuarioCadastrado'));

        if (usuarioCadastrado && email === usuarioCadastrado.email && senha === usuarioCadastrado.senha) {
            window.location.href = '../Home/index.html';
        } else {
            alert('E-mail ou senha incorretos. Tente novamente.');
        }
    })
});