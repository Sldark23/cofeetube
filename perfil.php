<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil do Usuário</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Perfil do Usuário</h1>
        <p><strong>Nome:</strong> <?php echo $_SESSION['usuario_nome']; ?></p>
        <p><strong>Email:</strong> <?php echo $_SESSION['usuario_email']; ?></p>
        <a href="logout.php">Sair</a>

        <h2>Vídeos do Usuário</h2>
        <!-- Lista de vídeos aqui -->

        <a href="formulario_upload.php" class="btn">Enviar Vídeo</a>
    </div>
</body>
</html>