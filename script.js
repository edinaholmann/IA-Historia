const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado= document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "como a tecnologia substitui o ser humano"
        alternativas: [
            {
                texto: "isso é assustador"
                afirmacao:"À medida que máquinas e sistemas de IA assumem funções antes realizadas por pessoas, pode ocorrer desemprego e uma necessidade crescente de requalificação para novas funções"
            }
            {
                texto:"isso é maravilhoso"
                afirmacao:" o aumento da eficiência e precisão, máquinas e sistemas de IA podem realizar tarefas repetitivas e complexas com maior rapidez e exatidão, resultando em melhores resultados e maior produtividade.
            }      
        ]
    }
    {
        enunciado:"Quais os benificios da substituicao do ser humano pela tecnologia"
        alternativas:[
            {
                texto:"ponto positivo"
                afirmacao:"maior eficiência, redução de erros, segurança melhorada, operação contínua, redução de custos e estímulo à inovação"
            }
            {
                texto:"ponto negativo"
                afirmacao:"desemprego, desigualdade social, dependência tecnológica, perda de habilidades e impactos psicológicos como estresse e insegurança financeira."
            }
        ]
    }
    {   enunciado:"Como você vê a Inteligência Artificial"
        alternativas: [
            {
                texto:"ponto positivo"
                afirmacao:"Eficiência, Medicina, Educação, Ambiente, Acessibilidade, Segurança, Pesquisa"
            }
            {
                texto:"ponto negativo"
                afirmacao:"Privacidade, Viés, Desemprego, Segurança, Controle, Dependência"
            }
        ]
          
            
    }
    {

        enunciado:
        alternativas: [
            {
                texto:
                 afirmacao:

            }
            {
                texto:
                afirmacao:
            }
        ]
    }
    { 
        enunciado:
        alternativas:[
            {
                texto:
                afirmacao:
            }
            {
                texto:
                afirmacao:
            }
        ]

    }
]

let atual= 0;
let erguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length) {
        mostrarResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostarAlternativas();
}
function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() =>)respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAltenativas);
    }
}
        function resostaSelecionado(opcaoSelecionada) {
            const afirmacoes = opcaoSelecionada.afirmacao;
            historiafinal += afirmacoes + " ";
            atual++;
            mostrarPergunta();
        }
        function mostrarResultado() {
            caixaPergunta. textContent = "Em 2049...";
            textoResultado.textContent ="";
        }
        
        mostrarPerunta();