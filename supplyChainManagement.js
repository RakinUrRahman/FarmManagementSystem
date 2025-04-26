document.getElementById('languageButton').addEventListener('click', function() {
    alert('Language change feature coming soon!');
});

document.getElementById('searchBox').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        alert('Search for: ' + this.value);
    }
});

document.getElementById('scmForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const productName = document.getElementById('productName').value;
    const quantityAvailable = document.getElementById('quantityAvailable').value;
    const minStock = document.getElementById('minStock').value;
    const distributionDeadline = document.getElementById('distributionDeadline').value;
    const salesTracking = document.getElementById('salesTracking').value;
    const alerts = document.getElementById('alerts').value;

    // Display the form data for confirmation (you can replace this with backend integration later)
    alert(`Supply Chain Details:
    Product Name: ${productName}
    Quantity Available: ${quantityAvailable} units
    Minimum Stock Level: ${minStock} units
    Distribution Deadline: ${distributionDeadline}
    Sales Tracking: ${salesTracking}
    Alerts: ${alerts}`);
});
