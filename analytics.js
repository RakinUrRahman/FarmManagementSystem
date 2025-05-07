let farmDataList = [];

document.getElementById('addMoreBtn').addEventListener('click', function () {
    const data = collectFormData();
    if (data) {
        farmDataList.push(data);
        clearForm();
        alert("Crop data added. You can add another.");
    }
});

document.getElementById('farmForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const data = collectFormData();
    if (data) {
        farmDataList.push(data);
        showCharts(farmDataList);
        document.getElementById('farmForm').style.display = 'none';
        document.getElementById('chartSection').style.display = 'flex';
    }
});

function collectFormData() {
    const cropName = document.getElementById('cropName').value;
    const area = parseFloat(document.getElementById('area').value);
    const yieldKg = parseFloat(document.getElementById('yield').value);
    const waterUsage = parseFloat(document.getElementById('waterUsage').value);
    const fertilizer = parseFloat(document.getElementById('fertilizer').value);
    const plantingDate = document.getElementById('plantingDate').value;
    const healthStatus = document.getElementById('healthStatus').value;

    if (!cropName || !area || !yieldKg || !waterUsage || !fertilizer || !plantingDate || !healthStatus) {
        alert("Please fill in all fields!");
        return null;
    }

    return { cropName, area, yieldKg, waterUsage, fertilizer, plantingDate, healthStatus };
}

function clearForm() {
    document.getElementById('cropName').value = '';
    document.getElementById('area').value = '';
    document.getElementById('yield').value = '';
    document.getElementById('waterUsage').value = '';
    document.getElementById('fertilizer').value = '';
    document.getElementById('plantingDate').value = '';
    document.getElementById('healthStatus').value = '';
}

function showCharts(dataList) {
    const labels = dataList.map(d => ${d.cropName} (${d.plantingDate}));

    const barData = {
        labels: labels,
        datasets: [
            {
                label: 'Planted Area (m²)',
                data: dataList.map(d => d.area),
                backgroundColor: '#81C784'
            },
            {
                label: 'Expected Yield (kg)',
                data: dataList.map(d => d.yieldKg),
                backgroundColor: '#FFB74D'
            },
            {
                label: 'Water Usage (liters)',
                data: dataList.map(d => d.waterUsage),
                backgroundColor: '#64B5F6'
            },
            {
                label: 'Fertilizer Used (kg)',
                data: dataList.map(d => d.fertilizer),
                backgroundColor: '#9575CD'
            }
        ]
    };

    const barCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barCtx, {
        type: 'bar',
        data: barData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true } }
        }
    });

    const healthCounts = { Healthy: 0, 'Needs Attention': 0, Critical: 0 };
    dataList.forEach(d => healthCounts[d.healthStatus]++);

    const pieCtx = document.getElementById('healthPieChart').getContext('2d');
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: Object.keys(healthCounts),
            datasets: [{
                data: Object.values(healthCounts),
                backgroundColor: ['#4CAF50', '#FF9800', '#F44336']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}
