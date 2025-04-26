// Handle the button click for posting the question/experience
document.getElementById('outputButton').addEventListener('click', function() {
    var userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== "") {
        // Store the input value (Here, we just log it to console for now)
        localStorage.setItem('userPost', userInput);

        // Alert the user
        alert("Your question/experience has been posted!");

        // Redirect to the output page to view the post
        window.location.href = 'communityForum2.html';
    } else {
        alert("Please enter a question or experience to post.");
    }
});

// Real-time Chat button action
document.getElementById('messageButton').addEventListener('click', function() {
    alert('Real-time chat feature coming soon!');
});
