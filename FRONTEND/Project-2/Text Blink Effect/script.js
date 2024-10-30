function startBlinking() {
    const text = document.getElementById('blinkingText');
    setInterval(() => {
        text.style.visibility = text.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 1000);
}

window.onload = startBlinking;
