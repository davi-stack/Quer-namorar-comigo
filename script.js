const naoButton = document.getElementById('naoButton');
const simButton = document.getElementById('simButton');

naoButton.addEventListener('mouseenter', () => {
    moveButtonRandomly();
});

function moveButtonRandomly() {
    const maxX = window.innerWidth - naoButton.clientWidth;
    const maxY = window.innerHeight - naoButton.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    naoButton.style.transition = 'transform 0.5s ease-in-out';
    naoButton.style.transform = `translate(${randomX}px, ${randomY}px)`;

    setTimeout(() => {
        naoButton.style.transition = '';
    }, 500);

    naoButton.removeEventListener('mouseenter', moveButtonRandomly);
}

naoButton.addEventListener('mouseleave', () => {
    naoButton.addEventListener('mouseenter', moveButtonRandomly);
});

simButton.addEventListener('click', () => {
    // Adicione aqui a animação ou qualquer ação desejada para o botão "Sim"
    simButton.style.animation = 'scaleUp 0.5s';
    setTimeout(() => {
        simButton.style.animation = '';
    }, 500);
});

