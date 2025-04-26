// Real-time chat functionality
document.getElementById('sendMessageBtn').addEventListener('click', function() {
    const message = document.getElementById('chatInput').value;
    if (message) {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.textContent = message;
        document.getElementById('chatMessages').appendChild(newMessage);
        document.getElementById('chatInput').value = ''; // Clear input
    }
});

// Handle 'View Thread' buttons (placeholder action)
document.querySelectorAll('.view-thread-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        alert('Viewing thread: ' + this.previousElementSibling.previousElementSibling.textContent);
    });
});
