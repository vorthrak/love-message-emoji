// Play the clicking sound
function playClickSound() {
    const clickSound = document.getElementById('click-sound');
    clickSound.play();
  }
  
  // Display a personalized love message when an emoji is clicked
  function showMessage(emoji) {
    const messages = {
      '❤️': 'You have my heart forever!',
      '😊': 'Your smile makes my day!',
      '🌸': 'You are as beautiful as a flower!',
      '🌟': 'You shine brighter than the stars!'
    };
    const messageElement = document.getElementById('hidden-message');
    messageElement.textContent = messages[emoji];
    messageElement.style.display = 'block';
  
    // Add bounce animation to the clicked emoji
    const clickedEmoji = event.target;
    clickedEmoji.classList.add('bounce');
    setTimeout(() => {
      clickedEmoji.classList.remove('bounce');
    }, 500);
  
    // Trigger particle effect
    triggerParticleEffect(event.clientX, event.clientY);
  
    // Play click sound
    playClickSound();
  }
  
  // Toggle music play/pause
  let isMusicPlaying = false;
  let isMusicMuted = false;
  
  function toggleMusic() {
    const music = document.getElementById('background-music');
    const musicButton = document.getElementById('toggle-music');
  
    if (isMusicPlaying) {
      music.pause();
      musicButton.textContent = "Start Music";
    } else {
      music.play();
      musicButton.textContent = "Stop Music";
    }
    isMusicPlaying = !isMusicPlaying;
    playVolumeChangeSound();
  }
  
  // Toggle volume (mute/unmute)
  function toggleVolume() {
    const music = document.getElementById('background-music');
    const volumeButton = document.getElementById('toggle-volume');
  
    if (isMusicMuted) {
      music.volume = 1;
      volumeButton.textContent = "🔊";
    } else {
      music.volume = 0;
      volumeButton.textContent = "🔇";
    }
    isMusicMuted = !isMusicMuted;
    playVolumeChangeSound();
  }
  
  // Play volume change sound
  function playVolumeChangeSound() {
    const volumeChangeSound = document.getElementById('volume-change-sound');
    volumeChangeSound.play();
  }
  
  // Trigger particle effect
  function triggerParticleEffect(x, y) {
    const particleContainer = document.getElementById('particle-container');
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = `${x + Math.random() * 20 - 10}px`;
      particle.style.top = `${y + Math.random() * 20 - 10}px`;
      particle.style.animationDelay = `${Math.random() * 1}s`;
  
      particleContainer.appendChild(particle);
      setTimeout(() => {
        particle.remove();
      }, 1000);
    }
  }
  
  // Add event listener to play audio
  window.addEventListener("load", () => {
    document.getElementById("background-music").play();
    document.getElementById("background-music").pause();
  });
  