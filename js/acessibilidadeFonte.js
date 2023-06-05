
function aumentarFonte() {
    var elemento = $('p, h3, h4');
    var fonteAtual = parseInt(elemento.css('font-size'));
    var novoTamanho = fonteAtual + 2;
    if (novoTamanho <= 18) {
        elemento.css('font-size', novoTamanho + 'px');
    }
}

function diminuirFonte() {
    var elemento = $('p, h3, h4');
    var fonteAtual = parseInt(elemento.css('font-size'));
    var novoTamanho = fonteAtual - 2;
    if (novoTamanho >= 10) {
        elemento.css('font-size', novoTamanho + 'px');
    }
}
