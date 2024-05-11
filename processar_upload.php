<?php
// Incluir o arquivo de configuração para obter acesso à conexão com o banco de dados
require_once('config.php');

// Verificar se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Receber e validar dados do formulário (você pode adicionar mais validações conforme necessário)
    $titulo = $_POST['titulo'];
    $descricao = $_POST['descricao'];
    $embed_url = $_POST['embed_url'];
    $categoria = $_POST['categoria'];
    $data_upload = date('Y-m-d'); // Data atual

    // Preparar e executar a inserção no banco de dados
    $query = "INSERT INTO videos (titulo, descricao, embed_url, categoria, data_upload) VALUES ('$titulo', '$descricao', '$embed_url', '$categoria', '$data_upload')";

    $result = pg_query($conn, $query);

    if ($result) {
        echo "Vídeo enviado com sucesso!";
    } else {
        echo "Erro ao enviar o vídeo";
    }
} else {
    // Redirecionar se o formulário não foi enviado corretamente
    header("Location: formulario_upload.php");
    exit;
}

// Fechar conexão
pg_close($conn);
?>