const slider = document.getElementById('speedSlider');
const speedValue = document.getElementById('speedValue');
const images = document.querySelectorAll('.image');

function updateSpeed(value) {
    speedValue.textContent = value;
    images.forEach(img => {
        img.style.animationDuration = `${value}s`;
    });
}

slider.addEventListener('input', (e) => {
    updateSpeed(e.target.value);
});

updateSpeed(slider.value);