<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Envio de Vídeo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Formulário de Envio de Vídeo</h1>
        <form action="processar_upload.php" method="POST">
            <label for="titulo">Título:</label>
            <input type="text" id="titulo" name="titulo" required><br>

            <label for="descricao">Descrição:</label>
            <textarea id="descricao" name="descricao" required></textarea><br>

            <label for="embed_url">Link de Embed do Vídeo:</label>
            <input type="text" id="embed_url" name="embed_url" required><br>

            <label for="categoria">Categoria:</label>
            <input type="text" id="categoria" name="categoria" required><br>

            <input type="submit" value="Enviar">
        </form>
    </div>
</body>
</html>