<title>Jokempo</title>
<link rel="stylesheet" href="../css/jokempo.css">

<div class="container">
    <div class="boxGame">
        <div class="boxPlayers">
            <span>
                <p class="nome">Você</p>
                <p class="resultado res1">...</p>
                <div class="boxOptions">
                    <button onclick="chooseSimbol('✊')">✊</button>
                    <button onclick="chooseSimbol('✋')">✋</button>
                    <button onclick="chooseSimbol('✌')">✌</button>
                </div>
            </span>
            <span>
                <p class="nome">Máquina</p>
                <p class="resultado res2">...</p>
            </span>
        </div>
        <button id="btn">Jogar</button>
        <p id="cardResultado">...</p>
    </div>
    <div class="boxHistorico">
        <span id="listHistorico"></span>
        <button class="apagarTd" onclick="deleteAll()">Apagar Tudo</button>
    </div>
</div>

<script src="../js/jokempo.js"></script>