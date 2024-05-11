<?php
// Incluir o arquivo de configuração para obter acesso à conexão com o banco de dados
require_once('config.php');

// Verificar se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Receber dados do formulário
    $titulo = $_POST['titulo'];
    $descricao = $_POST['descricao'];
    $url_video = $_POST['url_video'];
    $categoria = $_POST['categoria'];
    $data_upload = date('Y-m-d'); // Data atual

    // Preparar e executar a inserção no banco de dados
    $query = "INSERT INTO videos (titulo, descricao, url_video, categoria, data_upload) VALUES ('$titulo', '$descricao', '$url_video', '$categoria', '$data_upload')";

    $result = pg_query($conn, $query);

    if ($result) {
        echo "Vídeo enviado com sucesso!";
    } else {
        echo "Erro ao enviar o vídeo";
    }
} else {
    // Redirecionar se o formulário não foi enviado
    header("Location: formulario_upload.php");
    exit;
}

// Fechar conexão
pg_close($conn);
?>