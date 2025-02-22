const texts = document.getElementById('typingTexts').textContent.split(' | ');
const textElement = document.getElementById('typingText');
let currentTextIndex = 0;

function typeWriter(text, i) {
    if (i < text.length) {
        textElement.textContent += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(text, i);
        }, 100);
    } else {
        setTimeout(function() {
            eraseText(text);
        }, 1000);
    }
}

function eraseText(text) {
    if (text.length > 0) {
        textElement.textContent = text.substring(0, text.length - 1);
        setTimeout(function() {
            eraseText(text.substring(0, text.length - 1));
        }, 50);
    } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(function() {
            typeWriter(texts[currentTextIndex], 0);
        }, 500);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    typeWriter(texts[currentTextIndex], 0);
});
