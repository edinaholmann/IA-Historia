const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado= document.querySelector(".texto-resultado");

const perguntas =[
    {
        enunciado: "como a tecnologia substitui o ser humano"
        alternativas: [
            {
                texto: "isso é assustador"
                afirmação:"À medida que máquinas e sistemas de IA assumem funções antes realizadas por pessoas, pode ocorrer desemprego e uma necessidade crescente de requalificação para novas funções"
            }
            {
                texto:"isso é maravilhoso"
                afirmação:" o aumento da eficiência e precisão, máquinas e sistemas de IA podem realizar tarefas repetitivas e complexas com maior rapidez e exatidão, resultando em melhores resultados e maior produtividade.
            }      
        ]
    }
    {
        enunciado:"Quais os benificios da substituicao do ser humano pela tecnologia"
        alternativas:[
            {
                texto:""
                afirmação:"maior eficiência, redução de erros, segurança melhorada, operação contínua, redução de custos e estímulo à inovação"
            }
            {
                texto:""
                afirmação:"desemprego, desigualdade social, dependência tecnológica, perda de habilidades e impactos psicológicos como estresse e insegurança financeira."
            }
        ]
    }
    {
        enunciado:
    }