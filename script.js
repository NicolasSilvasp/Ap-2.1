function calcularArea() {
    var baseMaior = parseFloat(document.getElementById('baseMaior').value);
    var baseMenor = parseFloat(document.getElementById('baseMenor').value);
    var altura = parseFloat(document.getElementById('altura').value);
    if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura)) {
        alert("Por favor, insira valores válidos!");
        return;
    }
    var area = ((baseMaior + baseMenor) * altura) / 2;

    document.getElementById('resultado').innerText = "A área do trapézio é: " + area.toFixed(2) + " unidades²";
}

