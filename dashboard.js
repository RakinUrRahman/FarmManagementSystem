// ===== Show Current Date =====
const currentDate = document.getElementById('currentDate');
const now = new Date();
currentDate.textContent = now.toDateString();

// ===== Dashboard Customization Modal =====
const customizeButton = document.getElementById('customizeButton');
const modal = document.getElementById('customizeModal');
const closeModal = document.getElementById('closeModal');
const saveSettings = document.getElementById('saveSettings');

const sections = [
    { checkboxId: 'togglePlanting', cardId: 'plantingScheduleCard' },
    { checkboxId: 'toggleFertilizer', cardId: 'fertilizerScheduleCard' },
    { checkboxId: 'toggleIrrigation', cardId: 'irrigationStatusCard' },
    { checkboxId: 'togglePest', cardId: 'pestControlCard' },
    { checkboxId: 'toggleHarvest', cardId: 'harvestTrackerCard' },
    { checkboxId: 'toggleTools', cardId: 'toolMaintenanceCard' }
];

// Open modal
customizeButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Save customization
saveSettings.addEventListener('click', () => {
    sections.forEach(section => {
        const checkbox = document.getElementById(section.checkboxId);
        const card = document.getElementById(section.cardId);
        card.style.display = checkbox.checked ? 'block' : 'none';
    });
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// ===== Notifications =====
const notifications = [
    "Reminder: Fertilizer due on May 10.",
    "Check irrigation filters today.",
    "Tool maintenance scheduled for next week."
];

const notificationModal = document.getElementById('notificationModal');
const notificationList = document.getElementById('notificationList');
const closeNotificationModal = document.getElementById('closeNotificationModal');

function showNotifications() {
    notificationList.innerHTML = '';
    notifications.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note;
        notificationList.appendChild(li);
    });
    notificationModal.style.display = 'block';
}

closeNotificationModal.addEventListener('click', () => {
    notificationModal.style.display = 'none';
});

window.addEventListener('load', showNotifications);
document.getElementById('weatherSummary').addEventListener('mouseover', () => {
    document.getElementById('weatherSummary').textContent = "Today: Sunny, 32°C";
  });
  document.querySelectorAll('.task-check').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        this.parentElement.style.textDecoration = 'line-through';
        this.parentElement.style.color = 'gray';
      } else {
        this.parentElement.style.textDecoration = 'none';
        this.parentElement.style.color = 'black';
      }
    });
  });
  