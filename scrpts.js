document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const arrows = document.querySelectorAll('.arrows button');
    const numberElement = document.querySelector('.indicators .number');
    let currentIndex = 0;

    function updateItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });

        numberElement.textContent = index + 1;
        numberElement.classList.add('number-change');
        setTimeout(() => {
            numberElement.classList.remove('number-change');
        }, 500);
    }

    arrows.forEach((arrow, direction) => {
        arrow.addEventListener('click', () => {
            currentIndex = (currentIndex + (direction === 0 ? -1 : 1) + items.length) % items.length;
            updateItem(currentIndex);
        });
    });

    updateItem(currentIndex);
});
/* whatssap */
function enviarWatsapp(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const telefone = "5548999857463";
    const texto = `Olá, me chamo ${nome} e gostaria de falar sobre: ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}`;
    window.open(url, "_blank");
  }