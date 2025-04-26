// Display the stored post from local storage
window.onload = function() {
    var userPost = localStorage.getItem('userPost');
    if (userPost) {
        document.getElementById('userPostOutput').innerText = userPost;
    } else {
        document.getElementById('userPostOutput').innerText = "No posts available.";
    }
};
