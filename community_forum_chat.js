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

// Load previous chat messages if any
window.onload = function() {
    const savedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    const chatMessagesContainer = document.getElementById('chatMessages');
    
    savedMessages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.textContent = msg;
        chatMessagesContainer.appendChild(messageDiv);
    });
};

// Handle sending a new chat message
document.getElementById('sendMessageBtn').addEventListener('click', function() {
    const messageInput = document.getElementById('chatInput');
    const newMessage = messageInput.value.trim();
    
    if (newMessage) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.textContent = newMessage;
        
        // Append the new message to the chat
        const chatMessagesContainer = document.getElementById('chatMessages');
        chatMessagesContainer.appendChild(messageDiv);

        // Save the new message in localStorage
        const savedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        savedMessages.push(newMessage);
        localStorage.setItem('chatMessages', JSON.stringify(savedMessages));

        // Clear input field after sending the message
        messageInput.value = '';
    }
});

// Optional: Clear messages if needed
document.getElementById('clearChatBtn').addEventListener('click', function() {
    localStorage.removeItem('chatMessages');
    document.getElementById('chatMessages').innerHTML = ''; // Clear chat messages from UI
});
