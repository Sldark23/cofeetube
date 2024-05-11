<?php
// Incluir o arquivo de configuração para obter acesso à conexão com o banco de dados
require_once('config.php');

// Verificar se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Receber dados do formulário e aplicar limpeza e validação básica
    $nome = trim($_POST['nome']);
    $email = trim($_POST['email']);
    $senha = $_POST['senha'];

    // Verificar se todos os campos foram preenchidos
    if (empty($nome) || empty($email) || empty($senha)) {
        echo "Todos os campos são obrigatórios. Por favor, preencha novamente o formulário.";
    } else {
        // Verificar se o email já está cadastrado
        $query_check = "SELECT * FROM usuarios WHERE email='$email'";
        $result_check = pg_query($conn, $query_check);
        if (pg_num_rows($result_check) > 0) {
            echo "Este email já está cadastrado. Tente outro.";
        } else {
            // Criptografar a senha antes de armazenar no banco de dados
            $senha_criptografada = password_hash($senha, PASSWORD_DEFAULT);

            // Preparar e executar a inserção no banco de dados
            $query = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$senha_criptografada')";
            $result = pg_query($conn, $query);

            if ($result) {
                echo "Conta criada com sucesso!";
            } else {
                echo "Erro ao criar conta";
            }
        }
    }
} else {
    // Redirecionar se o formulário não foi enviado
    header("Location: registro.html");
    exit;
}

// Fechar conexão
pg_close($conn);
?>