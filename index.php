<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="shortcut icon" href="/images/Favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <?php
    require_once("components/header.php");
    require_once("components/detalhes.php");
    
    $page = $_GET['page'] ?? 'home';
    
    $allowedPages = ['home','loginBrilhante','configuracoes','botaoNeon','menuEspecial1'
    ,'imagemBorrada','menuEspecial2','cacaNiquel','roleta','textoComFundo'
    ,'listaDinamica','calculadora','menuLateral','jokempo','cronometro'
    ,'menuCircular','testes1','testes2'];
    
    $pagePath = __DIR__ . '/pages/' . $page . '.php';
    
    if (in_array($page, $allowedPages, true) && file_exists($pagePath)) {
        include $pagePath;
        } else {
            include __DIR__ . '/pages/erro.php';
            }
            ?>
    <script>
    (function(){
        const state = localStorage.getItem('bgState');
        if (state === 'dark') {
            document.body.classList.remove('modoClaro');
        } else {
            document.body.classList.add('modoClaro');
        }
        document.addEventListener('DOMContentLoaded', () => {
            const ball = document.getElementById('ball');
            if (!ball) return;
            if (localStorage.getItem('bgState') === 'dark') {
                ball.classList.add('ballActive');
            } else {
                ball.classList.remove('ballActive');
            }
        });
    })();
    </script>
    <script src="../js/script.js"></script>
</body>
</html>