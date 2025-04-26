// Task Automation Functionality
const taskList = document.getElementById('taskList');
const addTaskButton = document.getElementById('addTaskButton');
const taskFormContainer = document.getElementById('taskFormContainer');
const taskForm = document.getElementById('taskForm');
const taskNameInput = document.getElementById('taskName');
const taskTimeInput = document.getElementById('taskTime');
const taskTypeSelect = document.getElementById('taskType');
const cancelTaskButton = document.getElementById('cancelTaskButton');
let editingTask = null;

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('farmoTasks')) || [];

// Display tasks in table
function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.name}</td>
            <td>${new Date(task.time).toLocaleString()}</td>
            <td>${formatTaskType(task.type)}</td>
            <td>
                <button class="modern-button green" onclick="editTask(${task.id})">Edit</button>
                <button class="modern-button gray" onclick="deleteTask(${task.id})">Delete</button>
            </td>
        `;
        taskList.appendChild(row);
    });
    saveTasks();
}

// Helper to format task type
function formatTaskType(type) {
    if (type === 'watering') return 'Watering';
    if (type === 'pest_control') return 'Pest Control';
    if (type === 'harvesting') return 'Harvesting';
    return type;
}

// Save to localStorage
function saveTasks() {
    localStorage.setItem('farmoTasks', JSON.stringify(tasks));
}

// Add or Edit Task
function addTask(event) {
    event.preventDefault();

    const taskName = taskNameInput.value.trim();
    const taskTime = taskTimeInput.value;
    const taskType = taskTypeSelect.value;

    if (!taskName || !taskTime) return;

    const newTask = {
        id: editingTask ? editingTask.id : Date.now(),
        name: taskName,
        time: taskTime,
        type: taskType,
        alerted: false
    };

    if (editingTask) {
        const index = tasks.findIndex(task => task.id === editingTask.id);
        tasks[index] = newTask;
        editingTask = null;
        document.getElementById('formTitle').textContent = 'Add New Task';
    } else {
        tasks.push(newTask);
    }

    displayTasks();
    taskForm.reset();
    taskFormContainer.style.display = 'none';
}

// Edit task
function editTask(taskId) {
    editingTask = tasks.find(task => task.id === taskId);
    taskNameInput.value = editingTask.name;
    taskTimeInput.value = editingTask.time;
    taskTypeSelect.value = editingTask.type;
    taskFormContainer.style.display = 'block';
    document.getElementById('formTitle').textContent = 'Edit Task';
}

// Delete task
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    displayTasks();
}

// Cancel task form
cancelTaskButton.addEventListener('click', function () {
    taskFormContainer.style.display = 'none';
    taskForm.reset();
    editingTask = null;
});

// Show task form
addTaskButton.addEventListener('click', function () {
    taskFormContainer.style.display = 'block';
    taskForm.reset();
    editingTask = null;
    document.getElementById('formTitle').textContent = 'Add New Task';
});

// Handle form submit
taskForm.addEventListener('submit', addTask);

// Load and display tasks on page load
displayTasks();

// Check for upcoming tasks every 1 minute
setInterval(checkTaskReminders, 60000);

function checkTaskReminders() {
    const now = new Date();
    tasks.forEach(task => {
        const taskTime = new Date(task.time);
        const timeDifference = taskTime - now;

        // If task is within the next 1 minute and not already alerted
        if (timeDifference > 0 && timeDifference < 60000 && !task.alerted) {
            alert(`🔔 Reminder: Time for "${task.name}" (${formatTaskType(task.type)})`);
            task.alerted = true;
        }
    });
    saveTasks(); // Save updated "alerted" flags
}

// Allow global access for buttons
window.editTask = editTask;
window.deleteTask = deleteTask;
