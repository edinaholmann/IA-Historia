const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado= document.querySelector(".texto-resultado");

const perguntas =[
    {
        enunciado: "Um ponto positivo para a falta de professore nas escolas"
        alternativas: [
            {
                texto: "isso é assustador"
                afirmacao:"A falta de professores nas escolas sobrecarrega os educadores existentes, reduzindo a qualidade do ensino e o suporte individual para os alunos, o que pode levar a um desempenho acadêmico inferior."
            }
            {
                texto:"isso é maravilhoso"
                afirmacao:"A falta de professores pode incentivar a inovação no ensino e promover a autonomia dos alunos "
            }
        ]
    }
]