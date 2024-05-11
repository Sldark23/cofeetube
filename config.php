<?php
// Dados de conexão com o banco de dados PostgreSQL
$host = 'localhodt';
$dbname = 'verceldb';
$user = 'default';
$password = 'fer272743!';

// Conectar ao banco de dados PostgreSQL
$conn = pg_connect("host=$host dbname=$dbname user=$user password=$password");

// Verificar conexão
if (!$conn) {
    die("Erro na conexão com o banco de dados");
}
?>
