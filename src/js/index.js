/*
   OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
       PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
       PASSO 2 - Identificar o evento de clique no elemento da listagem
       PASSO 3 - remover a classe aberto só do cartão que tá aberto
       PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir
       PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
       PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
*/

//Passo 1
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
//console.log(listaSelecaoPokedevs);

//Passo 2
listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click", () => {
        //Passo 3
        esconderCartaoPokedev();

        //Passo 4
        const idPokedevSelecionado = mostrarCartaoPokedev(pokedev);

        //Passo 5
        desativarPokedevNaListagem();

        //Passo 6
        ativarPokedevNaListagem(idPokedevSelecionado);

    })
})
function ativarPokedevNaListagem(idPokedevSelecionado) {
    const pokedevSlecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSlecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}

