// Load the tasks from localStorage
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to display the tasks in taskAutomation2.html
function displayTaskOutputs() {
    const taskOutputList = document.getElementById('taskOutputList');
    taskOutputList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <strong>${task.name}</strong><br>
            <span>${task.description}</span><br>
            <span>Scheduled Time: ${task.time}</span>
        `;
        taskOutputList.appendChild(taskItem);
    });
}

// Back button functionality to navigate to taskAutomation.html
document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'taskAutomation.html'; // Navigate back to taskAutomation.html
});

// Initialize task outputs on page load
displayTaskOutputs();
