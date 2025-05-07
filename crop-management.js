const cropForm = document.getElementById('cropForm');
const cropList = document.getElementById('cropList');

// Load existing crops or initialize empty list
let crops = JSON.parse(localStorage.getItem('crops')) || [];
let editId = null; // Will hold the ID of the crop being edited

renderCrops();

// Handle form submission
cropForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const crop = {
    id: editId !== null ? editId : Date.now(), // Reuse ID if updating
    type: document.getElementById('cropType').value,
    plantingDate: document.getElementById('plantingDate').value,
    growthStage: document.getElementById('growthStage').value,
    wateringSchedule: document.getElementById('wateringSchedule').value,
    fertilizationDate: document.getElementById('fertilizationDate').value,
    harvestingDate: document.getElementById('harvestingDate').value
  };

  if (editId !== null) {
    // Updating an existing crop
    crops = crops.map(c => c.id === editId ? crop : c);
    editId = null;
  } else {
    // Adding a new crop
    crops.push(crop);
  }

  localStorage.setItem('crops', JSON.stringify(crops));
  cropForm.reset();
  renderCrops();
});

// Render crop list
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
      <button onclick="editCrop(${crop.id})">Update</button>
      <button onclick="deleteCrop(${crop.id})">Delete</button>
    `;
    cropList.appendChild(cropItem);
  });
}

// Delete crop
function deleteCrop(id) {
  crops = crops.filter(crop => crop.id !== id);
  localStorage.setItem('crops', JSON.stringify(crops));
  renderCrops();
}

// Edit crop
function editCrop(id) {
  const crop = crops.find(c => c.id === id);
  if (!crop) return;

  // Fill the form with crop data
  document.getElementById('cropType').value = crop.type;
  document.getElementById('plantingDate').value = crop.plantingDate;
  document.getElementById('growthStage').value = crop.growthStage;
  document.getElementById('wateringSchedule').value = crop.wateringSchedule;
  document.getElementById('fertilizationDate').value = crop.fertilizationDate;
  document.getElementById('harvestingDate').value = crop.harvestingDate;

  editId = crop.id; // Set the edit ID so we can update instead of add
}
