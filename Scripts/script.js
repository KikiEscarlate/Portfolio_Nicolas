const glow = document.querySelector('.mouse-glow');

// Adiciona um ouvinte de evento para o movimento do mouse na janela inteira
window.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // Atualiza as variáveis do CSS com a posição exata do mouse em pixels
    glow.style.setProperty('--mouse-x', `${x}px`);
    glow.style.setProperty('--mouse-y', `${y}px`);
});