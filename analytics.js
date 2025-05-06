// Form Submission Handling
document.getElementById('farmForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Capture form input values
    const cropName = document.getElementById('cropName').value;
    const area = parseFloat(document.getElementById('area').value);
    const yieldKg = parseFloat(document.getElementById('yield').value);
    const waterUsage = parseFloat(document.getElementById('waterUsage').value);
    const fertilizer = parseFloat(document.getElementById('fertilizer').value);
    const plantingDate = document.getElementById('plantingDate').value;
    const healthStatus = document.getElementById('healthStatus').value;

    // Validate
    if (!cropName || !area || !yieldKg || !waterUsage || !fertilizer || !plantingDate || !healthStatus) {
        alert("Please fill in all fields!");
        return;
    }

    // Hide form, show charts
    document.getElementById('farmForm').style.display = 'none';
    document.getElementById('chartSection').style.display = 'flex';

    // Bar Chart for entered data
    const barCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['Planted Area (m²)', 'Expected Yield (kg)', 'Water Usage (liters)', 'Fertilizer Used (kg)'],
            datasets: [{
                label: `${cropName} (${plantingDate})`,
                data: [area, yieldKg, waterUsage, fertilizer],
                backgroundColor: ['#81C784', '#FFB74D', '#64B5F6', '#9575CD']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie Chart for Health Status
    const pieCtx = document.getElementById('healthPieChart').getContext('2d');
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Healthy', 'Needs Attention', 'Critical'],
            datasets: [{
                data: healthStatus === 'Healthy' ? [1, 0, 0] : healthStatus === 'Needs Attention' ? [0, 1, 0] : [0, 0, 1],
                backgroundColor: ['#4CAF50', '#FF9800', '#F44336']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Example Static Charts
    const cropYieldCtx = document.getElementById('cropYieldChart').getContext('2d');
    new Chart(cropYieldCtx, {
        type: 'doughnut',
        data: {
            labels: ['Tomatoes', 'Lettuce', 'Strawberries'],
            datasets: [{
                data: [40, 30, 30],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
        }
    });

    const resourceUsageCtx = document.getElementById('resourceUsageChart').getContext('2d');
    new Chart(resourceUsageCtx, {
        type: 'bar',
        data: {
            labels: ['Water', 'Fertilizer'],
            datasets: [{
                label: 'Resource Usage',
                data: [waterUsage, fertilizer],
                backgroundColor: ['#4FC3F7', '#81C784']
            }]
        }
    });

    const farmHealthCtx = document.getElementById('farmHealthChart').getContext('2d');
    new Chart(farmHealthCtx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Health Score',
                data: [90, 85, 88, 92],
                fill: false,
                borderColor: '#66BB6A',
                tension: 0.1
            }]
        }
    });
});
