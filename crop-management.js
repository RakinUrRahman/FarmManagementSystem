const cropForm = document.getElementById('cropForm');
const cropList = document.getElementById('cropList');

let crops = [];

cropForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const crop = {
    id: Date.now(),
    type: document.getElementById('cropType').value,
    plantingDate: document.getElementById('plantingDate').value,
    growthStage: document.getElementById('growthStage').value,
    wateringSchedule: document.getElementById('wateringSchedule').value,
    fertilizationDate: document.getElementById('fertilizationDate').value,
    harvestingDate: document.getElementById('harvestingDate').value
  };

  crops.push(crop);
  cropForm.reset();
  renderCrops();
});

function renderCrops() {
  cropList.innerHTML = '';

  if (crops.length === 0) {
    cropList.innerHTML = '<p>No crops added yet.</p>';
    return;
  }

  crops.forEach(crop => {
    const cropItem = document.createElement('div');
    cropItem.className = 'crop-item';
    cropItem.innerHTML = `
      <strong>${crop.type}</strong><br>
      Planting Date: ${crop.plantingDate}<br>
      Growth Stage: ${crop.growthStage}<br>
      Watering Schedule: ${crop.wateringSchedule}<br>
      Fertilization Date: ${crop.fertilizationDate}<br>
      Harvesting Date: ${crop.harvestingDate}<br>
      <button onclick="deleteCrop(${crop.id})">Delete</button>
    `;
    cropList.appendChild(cropItem);
  });
}

function deleteCrop(id) {
  crops = crops.filter(crop => crop.id !== id);
  renderCrops();
}
