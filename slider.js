const slider = document.getElementById('speedSlider');
const speedValue = document.getElementById('speedValue');

function updateSpeed(value) {
    speedValue.textContent = value;
    document.querySelectorAll('.image').forEach(img => {
        img.style.animationDuration = `${value}s`;
    });
}

slider.addEventListener('input', (e) => {
    updateSpeed(e.target.value);
});

updateSpeed(slider.value);