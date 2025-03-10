document.addEventListener('DOMContentLoaded', function() {
    const botaoCadastrar = document.querySelector('.botaoCadastrar');

    botaoCadastrar.addEventListener('click', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const vicio = document.getElementById('vicio').value;
        const dataNascimento = document.getElementById('data-nascimento').value.trim();
        const genero = document.getElementById('genero').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const repetirSenha = document.getElementById('repetir-senha').value.trim();


        if (
            nome === ''
        ) {
            alert('Nome não informado!');
            return
        }
        
        if (
            telefone === ''
        ) {
            alert('Telefone não informado!');
            return
        }


        if (
            cpf === ''
        ) {
            alert('CPF não informado!');
            return
        }

        if (
            vicio === 0
        ) {
            alert('Vicio não selecionado!');
            return
        }


        if (
            dataNascimento === ''
        ) {
            alert('Data de nascimento não informado!');
            return
        }


        if (
            genero === ''
        ) {
            alert('Gênero não informado!');
            return
        }

        if (
            email === ''
        ) {
            alert('Email não informado!');
            return
        }

        if (
            senha === ''
        ) {
            alert('Senha não informado!');
            return
        }
 
        if (senha !== repetirSenha) {
            alert('As senhas não coincidem!');
            return
        } else {

            // Usando Local Storege para pegaar o email e senha para o login
            const usuario = {
                nome: nome,
                telefone: telefone,
                cpf: cpf,
                vicio: vicio.value,
                dataNascimento: dataNascimento,
                genero: genero,
                email: email,
                senha: senha
            };

            localStorage.setItem('usuarioCadastrado', JSON.stringify(usuario));

            mensagemSucesso.style.display = 'block';

            setTimeout(function() {
                window.location.href = '../Login/index.html';
            }, 1000); 
        }
    });
});