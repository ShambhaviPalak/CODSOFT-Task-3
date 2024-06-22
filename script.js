document.addEventListener('DOMContentLoaded', function() {
    // Display current time
    updateTime();
    setInterval(updateTime, 1000); // Update time every second

    // Button to show alarm setting form
    const setAlarmBtn = document.getElementById('setAlarmBtn');
    const alarmForm = document.getElementById('alarmForm');
    setAlarmBtn.addEventListener('click', function() {
        alarmForm.classList.toggle('hidden');
    });

    // Save alarm button functionality (dummy functionality)
    const saveAlarmBtn = document.getElementById('saveAlarmBtn');
    saveAlarmBtn.addEventListener('click', function() {
        const alarmTime = document.getElementById('alarmTime').value;
        const alarmTone = document.getElementById('alarmTone').value;

        // Dummy code to add alarm to list (replace with actual functionality)
        addAlarmToList(alarmTime, alarmTone);

        // Reset form
        document.getElementById('alarmTime').value = '';
        document.getElementById('alarmTone').value = 'tone1';
        alarmForm.classList.add('hidden');
    });
});

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; // Convert to 12-hour format
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds} ${period}`;
    document.getElementById('clock').textContent = timeString;
}

function addAlarmToList(time, tone) {
    const alarmsList = document.getElementById('alarmsList');

    // Create alarm item
    const alarmItem = document.createElement('div');
    alarmItem.classList.add('alarm-item');
    alarmItem.innerHTML = `
        <strong>${time}</strong> - Tone: ${tone}
        <button class="button dismiss-btn">Dismiss</button>
        <button class="button snooze-btn">Snooze</button>
    `;

    // Add to list
    alarmsList.appendChild(alarmItem);

    // Optional: Add dismiss/snooze functionality
    alarmItem.querySelector('.dismiss-btn').addEventListener('click', function() {
        alarmItem.remove();
    });

    alarmItem.querySelector('.snooze-btn').addEventListener('click', function() {
        // Implement snooze functionality here
        alert('Snooze functionality to be implemented.');
    });
}
