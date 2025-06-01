
function atualizarContador() {
    const inicio = new Date("2025-02-01T00:00:00");
    const agora = new Date();
    const diferenca = agora - inicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("contador").innerText =
        `${dias} dias, ${horas}h, ${minutos}min, ${segundos}s desde 01/02/2025`;
}
setInterval(atualizarContador, 1000);
atualizarContador();
