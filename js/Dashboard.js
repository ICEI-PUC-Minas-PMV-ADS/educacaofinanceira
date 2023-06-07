//Tabela
    const inputMoradia = document.getElementById('num1');
    const gastoMoradiaCell = document.querySelector('input[name="gasto-moradia"]').closest('td');

    const inputSaude = document.getElementById('num2');
    const gastoSaudeCell = document.querySelector('input[name="gasto-saude"]').closest('td');

    const inputTransporte = document.getElementById('num3');
    const gastoTransporteCell = document.querySelector('input[name="gasto-transporte"]').closest('td');

    const inputHigiene = document.getElementById('num4');
    const gastoHigieneCell = document.querySelector('input[name="gasto-higiene"]').closest('td');

    const inputAlimentacao = document.getElementById('num5');
    const gastoAlimentacaoCell = document.querySelector('input[name="gasto-alimentacao"]').closest('td');

    function copiarValorFixas() {
        const valorInputMoradia = inputMoradia.value;
        const valorFloatMoradia = parseFloat(valorInputMoradia);

        const valorInputAlimentacao = inputAlimentacao.value;
        const valorFloatAlimentacao = parseFloat(valorInputAlimentacao);

        const valorInputTransporte = inputTransporte.value;
        const valorFloatTransporte = parseFloat(valorInputTransporte);

        const valorInputSaude = inputSaude.value;
        const valorFloatSaude = parseFloat(valorInputSaude);

        const valorInputHigiene = inputHigiene.value;
        const valorFloatHigiene = parseFloat(valorInputHigiene);

        const eventoInput = new Event('input', { bubbles: true });
        gastoMoradiaCell.querySelector('input').value = valorFloatMoradia;
        gastoMoradiaCell.querySelector('input').dispatchEvent(eventoInput);

        gastoAlimentacaoCell.querySelector('input').value = valorFloatAlimentacao;
        gastoAlimentacaoCell.querySelector('input').dispatchEvent(eventoInput);

        gastoTransporteCell.querySelector('input').value = valorFloatTransporte;
        gastoTransporteCell.querySelector('input').dispatchEvent(eventoInput);

        gastoSaudeCell.querySelector('input').value = valorFloatSaude;
        gastoSaudeCell.querySelector('input').dispatchEvent(eventoInput);

        gastoHigieneCell.querySelector('input').value = valorFloatHigiene;
        gastoHigieneCell.querySelector('input').dispatchEvent(eventoInput);
    }

    inputMoradia.addEventListener('input', copiarValorFixas);
    inputAlimentacao.addEventListener('input', copiarValorFixas);
    inputTransporte.addEventListener('input', copiarValorFixas);
    inputSaude.addEventListener('input', copiarValorFixas);
    inputHigiene.addEventListener('input', copiarValorFixas);

    const inputCompras = document.getElementById('num6');
    const gastoComprasCell = document.querySelector('input[name="gasto-compras"]').closest('td');

    const inputVestuario = document.getElementById('num7');
    const gastoVestuarioCell = document.querySelector('input[name="gasto-vestuario"]').closest('td');

    const inputEducacao = document.getElementById('num8');
    const gastoEducacaoCell = document.querySelector('input[name="gasto-educacao"]').closest('td');

    const inputEntretenimento = document.getElementById('num9');
    const gastoEntretenimentoCell = document.querySelector('input[name="gasto-entretenimento"]').closest('td');

    const inputViagens = document.getElementById('num10');
    const gastoViagensCell = document.querySelector('input[name="gasto-viagens"]').closest('td');

    function copiarValorVariaveis() {
        const valorFloatCompras = parseFloat(inputCompras.value);
        const valorFloatVestuario = parseFloat(inputVestuario.value);
        const valorFloatEducacao = parseFloat(inputEducacao.value);
        const valorFloatEntretenimento = parseFloat(inputEntretenimento.value);
        const valorFloatViagens = parseFloat(inputViagens.value);

        const eventoInput = new Event('input', { bubbles: true });
        gastoComprasCell.querySelector('input').value = valorFloatCompras;
        gastoComprasCell.querySelector('input').dispatchEvent(eventoInput);

        gastoVestuarioCell.querySelector('input').value = valorFloatVestuario;
        gastoVestuarioCell.querySelector('input').dispatchEvent(eventoInput);

        gastoEducacaoCell.querySelector('input').value = valorFloatEducacao;
        gastoEducacaoCell.querySelector('input').dispatchEvent(eventoInput);

        gastoEntretenimentoCell.querySelector('input').value = valorFloatEntretenimento;
        gastoEntretenimentoCell.querySelector('input').dispatchEvent(eventoInput);

        gastoViagensCell.querySelector('input').value = valorFloatViagens;
        gastoViagensCell.querySelector('input').dispatchEvent(eventoInput);
    }

    inputCompras.addEventListener('input', copiarValorVariaveis);
    inputVestuario.addEventListener('input', copiarValorVariaveis);
    inputEducacao.addEventListener('input', copiarValorVariaveis);
    inputEntretenimento.addEventListener('input', copiarValorVariaveis);
    inputViagens.addEventListener('input', copiarValorVariaveis);

    function calcularSalarioTotal() {
        var salario = parseFloat(document.getElementById("num11").value);
        var bonificacao = parseFloat(document.getElementById("num12").value);
        var investimento = parseFloat(document.getElementById("num13").value);
      
        var salarioTotal = salario + bonificacao + investimento;
      
        var tabelaGastosFixos = document.getElementById("tabela-gastos-fixos");
        var gastosFixos = tabelaGastosFixos.getElementsByClassName("gasto-fixos");
        var resultadosGastosFixos = tabelaGastosFixos.getElementsByClassName("resultado-gasto-fixos");
      
        for (var i = 0; i < gastosFixos.length; i++) {
          var valorGastoFixo = parseFloat(gastosFixos[i].value);
          var limiteGastoFixo = salario * 0.14;
      
          if (valorGastoFixo > limiteGastoFixo) {
            resultadosGastosFixos[i].innerHTML = "Seus gastos não estão dentro do ideal";
            resultadosGastosFixos[i].style.color = "red";
          } else {
            resultadosGastosFixos[i].innerHTML = "Seus gastos estão dentro do ideal para seu salário";
            resultadosGastosFixos[i].style.color = "green";
          }
        }
      
        var tabelaGastosVariaveis = document.getElementById("tabela-gastos-variaveis");
        var gastosVariaveis = tabelaGastosVariaveis.getElementsByClassName("gasto-variaveis");
        var resultadosGastosVariaveis = tabelaGastosVariaveis.getElementsByClassName("resultado-gasto-variaveis");
      
        for (var j = 0; j < gastosVariaveis.length; j++) {
          var valorGastoVariavel = parseFloat(gastosVariaveis[j].value);
          var limiteGastoVariavel = salario * 0.08;
      
          if (valorGastoVariavel > limiteGastoVariavel) {
            resultadosGastosVariaveis[j].innerHTML = "Seus gastos não estão dentro do ideal";
            resultadosGastosVariaveis[j].style.color = "red";
          } else {
            resultadosGastosVariaveis[j].innerHTML = "Seus gastos estão dentro do ideal para seu salário";
            resultadosGastosVariaveis[j].style.color = "green";
          }
        }
      }
// Renda
const inputsRenda = document.querySelectorAll('#renda input');
const resultadoRenda = document.getElementById('resultado');

function calcularSomaRenda() {
    let soma = 0;
    inputsRenda.forEach(input => {
        const valor = parseFloat(input.value.replace(',', '.'));
        if (!isNaN(valor)) {
            soma += valor;
        }
    });
    resultadoRenda.textContent = `R$ ${soma.toFixed(2)}`;
}
inputsRenda.forEach(input => {
    input.addEventListener('input', calcularSomaRenda);
});
// Despesas
const inputsFixas = document.querySelectorAll('#fixas input');
const inputsVariaveis = document.querySelectorAll('#variaveis input');
const resultadoDespesas = document.getElementById('resultado1');

function calcularSomaDespesas(inputs) {
    let soma = 0;
    inputs.forEach(input => {
        const valor = parseFloat(input.value.replace(',', '.'));
        if (!isNaN(valor)) {
            soma += valor;
        }
    });
    return soma;
}

function exibirSomaDespesas() {
    const somaFixas = calcularSomaDespesas(inputsFixas);
    const somaVariaveis = calcularSomaDespesas(inputsVariaveis);
    const total = somaFixas + somaVariaveis;
    resultadoDespesas.textContent = `R$ ${total.toFixed(2)}`;
}

inputsFixas.forEach(input => input.addEventListener('input', exibirSomaDespesas));
inputsVariaveis.forEach(input => input.addEventListener('input', exibirSomaDespesas));
//Popup
const inputsDespesasFixas = document.querySelectorAll('#fixas input');
const inputsDespesasVariaveis = document.querySelectorAll('#variaveis input');
const inputsRendas = document.querySelectorAll('#renda input');
const mensagemElemento = document.getElementById('mensagem');


inputsDespesasFixas.forEach(input => input.addEventListener('change', verificarDespesas));
inputsDespesasVariaveis.forEach(input => input.addEventListener('change', verificarDespesas));
inputsRenda.forEach(input => input.addEventListener('change', verificarDespesas));

function verificarDespesas() {
    let somaDespesasFixas = 0;
    let somaDespesasVariaveis = 0;
    let somaRenda = 0;

    inputsDespesasFixas.forEach(input => {
        if (input.value !== '') {
            somaDespesasFixas += parseFloat(input.value);
        }
    });

    inputsDespesasVariaveis.forEach(input => {
        if (input.value !== '') {
            somaDespesasVariaveis += parseFloat(input.value);
        }
    });

    inputsRenda.forEach(input => {
        if (input.value !== '') {
            somaRenda += parseFloat(input.value);
        }
    });

    if (somaDespesasFixas + somaDespesasVariaveis > somaRenda) {
        mensagemElemento.textContent = "Essa não, você está endividado. Vamos dar um jeito nisso!";
    } else {
        mensagemElemento.textContent = "Você está indo muito bem, continue assim!";
    }
}
//Gráficos
const ctx1 = document.getElementById('Rosca1').getContext('2d');
const ctx2 = document.getElementById('Rosca2').getContext('2d');
const ctx3 = document.getElementById('Barra').getContext('2d');
const ctx4 = document.getElementById('Barra1').getContext('2d');
const ctx5 = document.getElementById('Barra2').getContext('2d');

var values1 = [];
var values2 = [];
var values3 = [];
var values4 = [];
var values5 = [];

function updateChart1() {
    values1 = [
        document.getElementById('num1').value || 0,
        document.getElementById('num2').value || 0,
        document.getElementById('num3').value || 0,
        document.getElementById('num4').value || 0,
        document.getElementById('num5').value || 0,
        document.getElementById('num6').value || 0,
        document.getElementById('num7').value || 0,
        document.getElementById('num8').value || 0,
        document.getElementById('num9').value || 0,
        document.getElementById('num10').value || 0,
    ];

    myChart1.data.datasets[0].data = values1;
    myChart1.update();
}
function updateChart2() {
    values2 = [
        document.getElementById('num11').value || 0,
        document.getElementById('num12').value || 0,
        document.getElementById('num13').value || 0,
    ];

    myChart2.data.datasets[0].data = values2;
    myChart2.update();
}
function updateChart3() {
    var sum1 = values1.slice(0, 10).reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    var sum2 = values2.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    var sum3 = values2.slice(0, 3).reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

    var percentage = (sum1 / sum3 * 100).toFixed(2);

    values3 = [percentage];

    myChart3.data.datasets[0].data = values3;
    myChart3.update();
}
function updateChart4() {
    var sum1to5 = values1.slice(0, 5).reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    var sum1to10 = values1.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

    var percentage = (sum1to5 / sum1to10 * 100).toFixed(2);

    values4 = [percentage];

    myChart4.data.datasets[0].data = values4;
    myChart4.update();
}
function updateChart5() {
    var sum1to10 = values1.slice(0, 10).reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    var sum6to10 = values1.slice(5, 10).reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

    var percentage = ((sum6to10 / sum1to10) * 100).toFixed(2);

    values5 = [percentage];

    myChart5.data.datasets[0].data = values5;
    myChart5.update();
}

var myChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Higiene', 'Transporte', 'Saúde', 'Alimentação', 'Moradia', 'Compras', 'Vestuário', 'Educação', 'Entretenimento', 'Viagens'],
        datasets: [{
            label: 'R$',
            data: values1,
            backgroundColor: [
                '#B22222',
                '#FF4500',
                '#FFFF00',
                '#F0E68C',
                '#FF6347',
                '#DB7093',
                '#FFD700',
                '#FA8072',
                '#800000',
                '#DC143C'

            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    padding: 7,

                }
            }
        },
        scales: {
            y: {
                beginAtZero: true, display: false

            },
            x: {
                beginAtZero: true,
                display: false,

            }
        },
    }
}
);

var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Salário', 'Bonificações', 'Investimentos'],
        datasets: [{
            label: 'R$',
            data: values2,
            backgroundColor: [
                '#71E620',
                '#00FA3F',
                '#0BE3BF'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    padding: 10
                
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true, display: false,
                grid: {
                    display: false
                }
            },
            x: {
                beginAtZero: true,
                display: false,
                grid: {
                    display: false
                }
            },
        }
    }
});

var myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: [''],
        datasets: [{
            label: '%',
            data: values3,
            backgroundColor: [
                '#2b94b8'

            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        indexAxis: 'y',
        scales: {
            x: {
                min: 0,
                max: 100,
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            },
        }
    }
});

var myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Fixas'],
        datasets: [{
            label: '%',
            data: values4,
            backgroundColor: [
                '#2b94b8'

            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        indexAxis: 'y',
        scales: {
            x: {
                min: 0,
                max: 100,
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            },
        }
    }
});

var myChart5 = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['Variáveis'],
        datasets: [{
            label: '%',
            data: values5,
            backgroundColor: [
                '#2b94b8'

            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        indexAxis: 'y',
        scales: {
            x: {
                min: 0,
                max: 100,
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            },
        }
    }
});

document.getElementById('num1').addEventListener('input', updateChart1);
document.getElementById('num2').addEventListener('input', updateChart1);
document.getElementById('num3').addEventListener('input', updateChart1);
document.getElementById('num4').addEventListener('input', updateChart1);
document.getElementById('num5').addEventListener('input', updateChart1);
document.getElementById('num6').addEventListener('input', updateChart1);
document.getElementById('num7').addEventListener('input', updateChart1);
document.getElementById('num8').addEventListener('input', updateChart1);
document.getElementById('num9').addEventListener('input', updateChart1);
document.getElementById('num10').addEventListener('input', updateChart1);

document.getElementById('num11').addEventListener('input', updateChart2);
document.getElementById('num12').addEventListener('input', updateChart2);
document.getElementById('num13').addEventListener('input', updateChart2);

document.getElementById('num1').addEventListener('input', updateChart3);
document.getElementById('num2').addEventListener('input', updateChart3);
document.getElementById('num3').addEventListener('input', updateChart3);
document.getElementById('num4').addEventListener('input', updateChart3);
document.getElementById('num5').addEventListener('input', updateChart3);
document.getElementById('num6').addEventListener('input', updateChart3);
document.getElementById('num7').addEventListener('input', updateChart3);
document.getElementById('num8').addEventListener('input', updateChart3);
document.getElementById('num9').addEventListener('input', updateChart3);
document.getElementById('num10').addEventListener('input', updateChart3);
document.getElementById('num11').addEventListener('input', updateChart3);
document.getElementById('num12').addEventListener('input', updateChart3);
document.getElementById('num13').addEventListener('input', updateChart3);

document.getElementById('num1').addEventListener('input', updateChart4);
document.getElementById('num2').addEventListener('input', updateChart4);
document.getElementById('num3').addEventListener('input', updateChart4);
document.getElementById('num4').addEventListener('input', updateChart4);
document.getElementById('num5').addEventListener('input', updateChart4);
document.getElementById('num6').addEventListener('input', updateChart4);
document.getElementById('num7').addEventListener('input', updateChart4);
document.getElementById('num8').addEventListener('input', updateChart4);
document.getElementById('num9').addEventListener('input', updateChart4);
document.getElementById('num10').addEventListener('input', updateChart4);

document.getElementById('num1').addEventListener('input', updateChart5);
document.getElementById('num2').addEventListener('input', updateChart5);
document.getElementById('num3').addEventListener('input', updateChart5);
document.getElementById('num4').addEventListener('input', updateChart5);
document.getElementById('num5').addEventListener('input', updateChart5);
document.getElementById('num6').addEventListener('input', updateChart5);
document.getElementById('num7').addEventListener('input', updateChart5);
document.getElementById('num8').addEventListener('input', updateChart5);
document.getElementById('num9').addEventListener('input', updateChart5);
document.getElementById('num10').addEventListener('input', updateChart5);
