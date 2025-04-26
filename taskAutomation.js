// Initialize task list from localStorage, if available
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to save the task
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page
    
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskTime = document.getElementById('taskTime').value;

    if (taskName && taskDescription && taskTime) {
        // Save the new task
        const newTask = {
            id: tasks.length + 1,
            name: taskName,
            description: taskDescription,
            time: taskTime
        };
        
        tasks.push(newTask);
        
        // Save the tasks to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Show saved notification
        alert('Task saved!');
        
        // Clear the form inputs
        document.getElementById('taskForm').reset();
    }
});

// Show Output button functionality
document.getElementById('showOutputButton').addEventListener('click', function() {
    // Save the tasks in localStorage (so they persist across pages)
    localStorage.setItem('tasks', JSON.stringify(tasks));
    window.location.href = 'taskAutomation2.html'; // Navigate to taskAutomation2.html
});

// Function to trigger popup notification at task time
function triggerTaskNotifications() {
    const currentTime = new Date().toLocaleTimeString('en-GB', { hour12: false }).slice(0, 5);

    tasks.forEach(task => {
        if (task.time === currentTime) {
            alert(`Reminder: ${task.name} - ${task.description}`);
        }
    });
}

// Trigger notifications every minute
setInterval(triggerTaskNotifications, 60000); // Check every minute
