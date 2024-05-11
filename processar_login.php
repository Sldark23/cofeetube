<?php
// Incluir o arquivo de configuração para obter acesso à conexão com o banco de dados
require_once('config.php');

// Iniciar a sessão (se ainda não estiver iniciada)
session_start();

// Verificar se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Receber dados do formulário e aplicar limpeza básica
    $email = trim($_POST['email']);
    $senha = $_POST['senha'];

    // Consultar o banco de dados para verificar se o email existe
    $query = "SELECT id, nome, email, senha FROM usuarios WHERE email='$email'";
    $result = pg_query($conn, $query);

    if ($result && pg_num_rows($result) > 0) {
        // Obter os dados do usuário do banco de dados
        $usuario = pg_fetch_assoc($result);

        // Verificar se a senha está correta
        if (password_verify($senha, $usuario['senha'])) {
            // Senha correta, autenticar usuário
            $_SESSION['usuario_id'] = $usuario['id'];
            $_SESSION['usuario_nome'] = $usuario['nome'];
            $_SESSION['usuario_email'] = $usuario['email'];

            // Redirecionar para a página de perfil, por exemplo
            header("Location: perfil.php");
            exit;
        } else {
            // Senha incorreta
            echo "Senha incorreta. Tente novamente.";
        }
    } else {
        // Usuário não encontrado
        echo "Email não encontrado. Verifique seu email e tente novamente.";
    }
} else {
    // Redirecionar se o formulário não foi enviado
    header("Location: login.html");
    exit;
}

// Fechar conexão
pg_close($conn);
?>