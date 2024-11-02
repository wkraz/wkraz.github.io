const typewriter = document.getElementById('typewriter');
let isDeleting = false;
let charIndex = 0;
const text = 'Computer Engineering';

function type() {
    if (isDeleting) {
        charIndex--;
        typewriter.textContent = text.substring(0, charIndex);
    } else {
        charIndex++;
        typewriter.textContent = text.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === text.length) {
        setTimeout(() => isDeleting = true, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        setTimeout(type, 500);
        return;
    }

    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(type, typingSpeed);
}

document.addEventListener('DOMContentLoaded', type); 