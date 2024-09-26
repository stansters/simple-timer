let startTime = Date.now();

function updateTimer() {
    const now = Date.now();
    const elapsedTime = now - startTime;

    const totalSeconds = Math.floor(elapsedTime / 1000);
    const hours = String(Math.floor((totalSeconds / 3600) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds / 60) % 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const totalDays = Math.floor(totalSeconds / (3600 * 24));
    const months = Math.floor(totalDays / 30);
    const days = totalDays % 30;
    const dateString = `${months} months -  ${days} days`;

    document.getElementById('clock').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

setInterval(updateTimer, 1000);
updateTimer();