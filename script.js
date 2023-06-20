var users = [];

document.getElementById('signupButton').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;

    // Verifica se o email já está cadastrado
    var emailExists = users.some(function(user) {
        return user.email === email;
    });

    if (emailExists) {
        document.getElementById('signupError').textContent = 'Este email já está cadastrado.';
    } else {
        // Armazena as informações do usuário
        users.push({ name: name, email: email, password: password });

        // Limpa os campos do formulário
        document.getElementById('name').value = '';
        document.getElementById('signupEmail').value = '';
        document.getElementById('signupPassword').value = '';

        // Fecha o modal de cadastro
        $('#signupModal').modal('hide');

        // Exibe mensagem de cadastro realizado com sucesso em um popup
        Swal.fire({
            icon: 'success',
            title: 'Cadastro realizado!',
            text: 'Seu cadastro foi realizado com sucesso. Faça o login para continuar.',
        });
    }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Verifica se a conta existe
    var user = users.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (user) {
        // Redireciona para o dashboard ou realiza outras ações após o login

        // Exibe mensagem de login efetuado com sucesso em um popup
        Swal.fire({
            icon: 'success',
            title: 'Login realizado!',
            text: 'Você efetuou login com sucesso.',
        });
    } else {
        document.getElementById('loginError').textContent = 'Credenciais inválidas';
    }
});
