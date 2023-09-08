const naoButton = document.getElementById('naoButton');
const simButton = document.getElementById('simButton');

naoButton.addEventListener('mouseenter', () => {
    moveButtonRandomly();
});

function moveButtonRandomly() {
    const maxX = window.innerWidth - naoButton.clientWidth;
    const maxY = window.innerHeight - naoButton.clientHeight;

    naoButton.style.transition = 'none';

    const jumpX = Math.random() * maxX;
    const jumpY = Math.random() * maxY;

    naoButton.style.transform = `translate(${jumpX}px, ${jumpY}px)`;

    setTimeout(() => {
        moveButtonRandomly();
    }, 100);
}

naoButton.addEventListener('mouseleave', () => {
    naoButton.style.transition = 'transform 0.5s ease-in-out';
});

simButton.addEventListener('click', () => {
    // Adicione aqui a animação desejada para o botão "Sim"
    simButton.style.animation = 'scaleUp 0.5s';

    // Reset a animação após um curto período de tempo
    setTimeout(() => {
        simButton.style.animation = '';
    }, 500);
});
