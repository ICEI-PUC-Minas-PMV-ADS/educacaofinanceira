
function aumentarFonte() {
    var elemento = $('a, p, li, ul, h4, h3, h2, iframe');
    var fonteAtual = parseInt(elemento.css('font-size'));
    var novoTamanho = fonteAtual + 2;
    if (novoTamanho <= 18) {
        elemento.css('font-size', novoTamanho + 'px');
    }
}

function diminuirFonte() {
    var elemento = $('a, p, li, ul, h4, h3, h2, iframe');
    var fonteAtual = parseInt(elemento.css('font-size'));
    var novoTamanho = fonteAtual - 2;
    if (novoTamanho >= 10) {
        elemento.css('font-size', novoTamanho + 'px');
    }
}
