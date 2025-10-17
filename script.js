const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const digitalTime = document.getElementById('digital-time');
const dateDisplay = document.getElementById('date-display');

function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    const secondAngle = (seconds * 6) + (milliseconds * 0.006);
    const minuteAngle = (minutes * 6) + (seconds * 0.1);
    const hourAngle = (hours % 12) * 30 + (minutes * 0.5);

    secondHand.style.transform = `translateX(-50%) rotate(${secondAngle}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;

    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    digitalTime.textContent = timeString;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString('en-US', options);
}

updateClock();
setInterval(updateClock, 50);

document.querySelectorAll('.feature').forEach(feature => {
    feature.addEventListener('click', function () {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);

        alert(`${this.querySelector('span').textContent} feature would open here`);
    });
});
