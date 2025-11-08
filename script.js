const vinyl = document.getElementById('vinyl');
const tonearm = document.getElementById('tonearm');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const speedBtns = document.querySelectorAll('.speed-btn');

let isPlaying = false;
let currentSpeed = 33;

// Play button
playBtn.addEventListener('click', () => {
    if (!isPlaying) {
        isPlaying = true;
        vinyl.classList.add('spinning');
        if (currentSpeed === 45) {
            vinyl.classList.add('speed-45');
        }
        tonearm.classList.add('playing');
        playBtn.textContent = '⏸';
    } else {
        isPlaying = false;
        vinyl.classList.remove('spinning');
        vinyl.classList.remove('speed-45');
        tonearm.classList.remove('playing');
        playBtn.textContent = '▶';
    }
});

// Stop button
stopBtn.addEventListener('click', () => {
    isPlaying = false;
    vinyl.classList.remove('spinning');
    vinyl.classList.remove('speed-45');
    tonearm.classList.remove('playing');
    playBtn.textContent = '▶';
});

// Speed selector
speedBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        speedBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update speed
        currentSpeed = parseInt(btn.dataset.speed);
        
        // Apply speed if playing
        if (isPlaying) {
            vinyl.classList.remove('speed-45');
            if (currentSpeed === 45) {
                vinyl.classList.add('speed-45');
            }
        }
    });
});

// Click vinyl to toggle play
vinyl.addEventListener('click', () => {
    playBtn.click();
});