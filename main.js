// import './style.css';
// import Experience from './Experience/Experience.js';

// const experience = new Experience(document.querySelector(".experience-canvas"));

// // ===== SOUND TOGGLE LOGIC =====
// const toggleBtn = document.getElementById('soundToggle');
// const bgAudio = document.getElementById('bgAudio');

// toggleBtn.addEventListener('click', () => {
//   toggleBtn.classList.toggle('active');
  
//   const isOn = toggleBtn.classList.contains('active');
  
//   if (isOn) {
//     bgAudio.play();
//   } else {
//     bgAudio.pause();
//     bgAudio.currentTime = 0;
//   }
// });



// import './style.css';
// import Experience from './Experience/Experience.js';

// const experience = new Experience(document.querySelector(".experience-canvas"));

// // ===== SOUND TOGGLE LOGIC =====
// const toggleBtn = document.getElementById('soundToggle');
// const bgAudio = document.getElementById('bgAudio');
// const soundOnIcon = document.querySelector('.sound-on-wrapper');
// const soundOffIcon = document.querySelector('.sound-off-wrapper');

// // Enable sound by default
// window.addEventListener('DOMContentLoaded', () => {
//   bgAudio.play().catch(() => {
//     console.warn("Autoplay might be blocked until user interacts.");
//   });
//   toggleBtn.classList.add('active');
//   soundOnIcon.style.display = 'block';
//   soundOffIcon.style.display = 'none';
// });

// // Toggle button logic
// toggleBtn.addEventListener('click', () => {
//   toggleBtn.classList.toggle('active');
  
//   const isOn = toggleBtn.classList.contains('active');

//   if (isOn) {
//     bgAudio.play();
//     soundOnIcon.style.display = 'block';
//     soundOffIcon.style.display = 'none';
//   } else {
//     bgAudio.pause();
//     bgAudio.currentTime = 0;
//     soundOnIcon.style.display = 'none';
//     soundOffIcon.style.display = 'block';
//   }
// });















import './style.css';
import Experience from './Experience/Experience.js';

const experience = new Experience(document.querySelector(".experience-canvas"));

const toggleBtn = document.getElementById('soundToggle');
const bgAudio = document.getElementById('bgAudio');
const soundOnIcon = document.querySelector('.sound-on-wrapper');
const soundOffIcon = document.querySelector('.sound-off-wrapper');

let userInteracted = false;

function playSound() {
  if (userInteracted) return; // Only once per page load

  bgAudio.play().then(() => {
    toggleBtn.classList.add('active');
    soundOnIcon.style.display = 'block';
    soundOffIcon.style.display = 'none';
    userInteracted = true;

    // Remove event listeners after first successful play
    window.removeEventListener('click', playSound);
    window.removeEventListener('touchstart', playSound);
    window.removeEventListener('wheel', playSound);
    window.removeEventListener('keydown', playSound);
  }).catch(() => {
    console.warn("Autoplay prevented, please try interacting again.");
  });
}

// Attach event listeners for multiple interaction types
window.addEventListener('click', playSound);
window.addEventListener('touchstart', playSound);
window.addEventListener('wheel', playSound);
window.addEventListener('keydown', playSound);

// Toggle button logic
toggleBtn.addEventListener('click', () => {
  const isOn = toggleBtn.classList.toggle('active');

  if (isOn) {
    bgAudio.play();
    soundOnIcon.style.display = 'block';
    soundOffIcon.style.display = 'none';
  } else {
    bgAudio.pause();
    bgAudio.currentTime = 0;
    soundOnIcon.style.display = 'none';
    soundOffIcon.style.display = 'block';
  }
});
