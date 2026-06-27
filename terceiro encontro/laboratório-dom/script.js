const botao = document.getElementById('btn-gerar');
let painel = document.getElementById('painel-resposta')
const nome = document.getElementById('input-nome')

botao.addEventListener('click', ()=>{
    painel.innerHTML = 
        <p>O nome digitado é `${nome.value}`</p>;
});