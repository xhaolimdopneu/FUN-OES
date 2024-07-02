const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Qual é a principal vantagem da inteligência artificial para você?",
        alternativas: [
            {
                texto: "Automatização de tarefas repetitivas",
                afirmacao: "destaca como a IA pode realizar tarefas rotineiras de forma eficiente"
            },
            {
                texto: "Melhoria da precisão em análises complexas",
                afirmaçao:"sublinha a precisão e eficácia da IA em lidar com análises complexas de dados"
            }
        ]
    },
    {
        enunciado: "Qual é a sua maior preocupações ética associada ao desenvolvimento da inteligência artificial?",
        alternativas: [
            {
                texto: "Privacidade e segurança dos dados",
                afirmacao: "aborda a proteção dos dados pessoais coletados e processados por sistemas de IA"},
            {
                texto: "Substituição de empregos humanos",
                afirmacao: "preocupações sobre o impacto da automação impulsionada pela IA na disponibilidade e natureza dos empregos humanos. "
            }
        ]
    },
    {
        enunciado: " Como você vê o futuro da inteligência artificial?",
        alternativas: [
            {
                texto: "Como um avanço positivo",
                afirmacao: "Um avanço que pode melhorar significativamente a qualidade de vida das pessoa" },
            {
                texto:  "Como um avanço negativo",
                afirmacao: "Uma tecnologia que precisa ser cuidadosamente regulamentada para evitar consequências negativas" 
              }

        ]
    },
    {
        enunciado: "Você acredita que a inteligência artificial resultará em uma redução líquida de empregos nos próximos anos?",

        alternativas: [
            {
                texto: "sim ",
                afirmacao: "Acredito que a inteligência artificial resultará em uma redução líquida de empregos nos próximos anos devido à automação de tarefas repetitivas e processos que podem ser realizados de forma mais eficiente por sistemas inteligentes."
            },
            {
                texto: "não",
                afirmacao: "Não acredito que a inteligência artificial resultará em uma redução líquida de empregos nos próximos anos, pois ela também pode criar novas oportunidades de emprego em setores emergentes e aumentar a eficiência em outras áreas, compensando eventuais perdas de empregos."}
        ]
    },
    {
        enunciado: "Última pergunta, você acha que a inteligência artificial será capaz de desenvolver consciência própria no futuro?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "Acredito que a inteligência artificial poderá desenvolver consciência própria no futuro, considerando avanços potenciais na replicação de processos cognitivos e emocionais complexos."
            },
            {
                texto: "Não",
                afirmacao: " Não acredito que a inteligência artificial será capaz de desenvolver consciência própria, pois a consciência humana envolve aspectos subjetivos e experiências que são únicas aos seres humanos." }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = perguntafinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();