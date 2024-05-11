<?php
// Dados de conexão com o banco de dados PostgreSQL
$host = 'ep-morning-breeze-a46onhqn-pooler.us-east-1.aws.neon.tech';
$port = '5432';
$dbname = 'verceldb';
$user = 'default';
$password = 'BMy9dFR8ncmA';

// Conectar ao banco de dados PostgreSQL
$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

// Verificar conexão
if (!$conn) {
    die("Erro na conexão com o banco de dados");
}
?>