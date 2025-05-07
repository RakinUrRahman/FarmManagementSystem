document.addEventListener('DOMContentLoaded', function () {
    // Language button alert
    document.getElementById('languageButton').addEventListener('click', function() {
        alert('Language change feature coming soon!');
    });

    // Search box alert on Enter
    document.getElementById('searchBox').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            alert('Search for: ' + this.value);
        }
    });

    // Form submission and score calculation
    document.getElementById('sustainabilityForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const farmSize = document.getElementById('farmSize').value;
        const plantTypes = document.getElementById('plantTypes').value;
        const irrigation = document.getElementById('irrigation').value;
        const verticalFarming = document.getElementById('verticalFarming').value;
        const energySource = document.getElementById('energySource').value;
        const waterRecycling = document.getElementById('waterRecycling').value;
        const fertilizerUsage = document.getElementById('fertilizerUsage').value;
        const harvestFrequency = document.getElementById('harvestFrequency').value;

        let sustainabilityScore = 0;

        if (energySource === 'solar') sustainabilityScore += 25;
        else if (energySource === 'wind') sustainabilityScore += 20;

        if (waterRecycling === 'yes') sustainabilityScore += 15;
        if (fertilizerUsage === 'organic') sustainabilityScore += 10;
        if (irrigation === 'drip') sustainabilityScore += 10;
        if (verticalFarming === 'yes') sustainabilityScore += 20;

        sustainabilityScore += parseInt(farmSize) * 0.05;
        sustainabilityScore += parseInt(harvestFrequency) * 2;

        const resultMessage = `
            Farm Area: ${farmSize} m²<br>
            Plant Types: ${plantTypes}<br>
            Irrigation: ${irrigation}<br>
            Vertical Farming: ${verticalFarming}<br>
            Energy Source: ${energySource}<br>
            Water Recycling: ${waterRecycling}<br>
            Fertilizer Usage: ${fertilizerUsage}<br>
            Harvest Frequency: ${harvestFrequency} times/year<br><br>
            <strong>Your Sustainability Score: ${sustainabilityScore} (out of 100)</strong>
        `;

        document.getElementById('modalContent').innerHTML = resultMessage;
        document.getElementById('resultModal').style.display = "block";
    });

    // Close modal via 'X'
    document.getElementById('closeModal').addEventListener('click', function() {
        document.getElementById('resultModal').style.display = "none";
    });

    // Close modal via "Close" button
    document.getElementById('modalButton').addEventListener('click', function() {
        document.getElementById('resultModal').style.display = "none";
    });

    // Close modal by clicking outside the modal content
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('resultModal');
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
