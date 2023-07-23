const controle = document.querySelectorAll("[data-controle]");

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    });
});

function manipulaDados(operation, controle){
    const piece = controle.querySelector("[data-contador]");

    if(operation === "-"){
        piece.value = parseInt(piece.value) - 1;
    } else {
        piece.value = parseInt(piece.value) + 1;
    }
}
