document.getElementById('languageButton').addEventListener('click', function() {
    alert('Language change feature coming soon!');
});

document.getElementById('searchBox').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        alert('Searching for: ' + this.value);
    }
});

document.querySelector('.consultation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your consultation request has been submitted successfully!');
    this.reset();
});
