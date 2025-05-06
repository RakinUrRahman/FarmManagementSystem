const recordList = document.getElementById('recordList');

// Sample crops (In real app, pull from database or server API)
const sampleCrops = [
  {
    type: 'Wheat',
    plantingDate: '2025-03-01',
    growthStage: 'Vegetative',
    wateringSchedule: '2025-04-01',
    fertilizationDate: '2025-04-15',
    harvestingDate: '2025-06-10'
  },
  {
    type: 'Corn',
    plantingDate: '2025-02-15',
    growthStage: 'Seeding',
    wateringSchedule: '2025-03-05',
    fertilizationDate: '2025-03-20',
    harvestingDate: '2025-05-30'
  }
];

function displayRecords() {
  recordList.innerHTML = '';

  sampleCrops.forEach(crop => {
    const recordItem = document.createElement('div');
    recordItem.className = 'record-item';
    recordItem.innerHTML = `
      <strong>${crop.type}</strong><br>
      Planting Date: ${crop.plantingDate}<br>
      Growth Stage: ${crop.growthStage}<br>
      Watering: ${crop.wateringSchedule}<br>
      Fertilization: ${crop.fertilizationDate}<br>
      Harvesting: ${crop.harvestingDate}
    `;
    recordList.appendChild(recordItem);
  });
}

displayRecords();
