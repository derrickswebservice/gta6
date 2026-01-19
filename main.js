console.log("GTA 6 Hub Loaded");

// Countdown to GTA 6 Release - November 19, 2026
const releaseDate = new Date("November 19, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  const countdownEl = document.getElementById("countdown");

  if (distance < 0) {
    countdownEl.innerHTML = "GTA 6 is out now!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `
    <span>${days}d</span> 
    <span>${hours}h</span> 
    <span>${minutes}m</span> 
    <span>${seconds}s</span>
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown();
