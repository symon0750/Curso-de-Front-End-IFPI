const meusProjetos = [
    {
        titulo: "Página da minha irmã",
        tecnologias: ["Front-end: React", "Back-end: Node.js", "Tiny ERP"],
        descricao: "É um site pra promover a criação da página de instagram dela"
    },

    {
        titulo: "Sistema de caixa",
        tecnologias: ["Front-end: React ou Vue.js (Web/Desktop via Electron)","Back-end: Node.js, Go ou Java.", "Banco de Dados: PostgreSQL (transações) + Redis (sessões/cache"],
        descricao: "Um sistema de caixa projetado para pequenos e médios estabelecimentos que necessitem desse tipo de controle."
    }
];

function renderizarProjetos() {
    const container = document.querySelector('.projetos-container')
    container.innerHTML = "";

    meusProjetos.forEach(projeto => {
        const cardHtml = `
            <article class="card-projeto">
            <h3>${projeto.titulo}<h3/>
            <p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>
            <p>${projeto.descricao}<p/>
            </article>
        `;
        container.innerHTML += cardHtml
    });
}

renderizarProjetos();

const depoimentos = [
    {
        nome: "Lane",
        cargo: "Autônoma",
        textoDepoimento: "A ferramenta me proporcionou uma comunicação e divulgação mais direta com o meu público, e também pude centralizar outras coisas como as minhas outras redes sociais serviços que ofereço."
    },
    {
        nome: "Seu Zé",
        cargo: "Empresário",
        textoDepoimento: "Abraçar a modernidade, é o que dizem. No meu caso valeu a pena, não preciso gastar horas com atas e um monte de documentos pra gerenciar meu negócio, dou dois cliques e tenho toda a fatura do mês."
    }
];



const btnTema = document.querySelector('#btn-tema')
const body = document.body

function alternarTema() {
    body.classList.toggle('dark-theme')

    if (body.classList.contains('dark-theme')) {
        btnTema.innertText = "Claro";
    } else {
        btnTema.innertText = "Escuro";
    }
}

btnTema.addEventListener('click', alternarTema)
