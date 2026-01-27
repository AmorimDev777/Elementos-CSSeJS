<title>Calculadora</title>
<link rel="stylesheet" href="../css/calculadora.css">

<div class="container">
    <div class="boxCalculadora">
        <div class="calculadora">
            <div class="tela">
                <p id="telaTxt"></p>
            </div>
            <div class="boxBtns">
                <button onclick="putNum('1')">1</button>
                <button onclick="putNum('2')">2</button>
                <button onclick="putNum('3')">3</button>
                <button onclick="putNum('4')">4</button>
                <button onclick="putNum('5')">5</button>
                <button onclick="putNum('6')">6</button>
                <button onclick="putNum('7')">7</button>
                <button onclick="putNum('8')">8</button>
                <button onclick="putNum('9')">9</button>
                <button onclick="putNum('0')">0</button>
                <button onclick="putOperator('+')">+</button>
                <button onclick="putOperator('-')">-</button>
                <button onclick="putOperator('*')">*</button>
                <button onclick="putOperator('/')">/</button>
                <button onclick="putOperator('%')">%</button>
                <button onclick="putOperator('.')">.</button>
                <button onclick="clearAll()">C</button>
                <button onclick="deleteLast()"><i class="fa-solid fa-delete-left"></i></button>
                <button onclick="calculate()">=</button>
            </div>
        </div>
    </div>
</div>

<script src="../js/calculadora.js"></script>