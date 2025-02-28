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

        arrows.forEach(arrow => {
            arrow.classList.add('animate');
            setTimeout(() => {
                arrow.classList.remove('animate');
            }, 500);
        });
    }

    arrows.forEach((arrow, direction) => {
        arrow.addEventListener('click', () => {
            currentIndex = (currentIndex + (direction === 0 ? -1 : 1) + items.length) % items.length;
            updateItem(currentIndex);
        });
    });

    updateItem(currentIndex);
});