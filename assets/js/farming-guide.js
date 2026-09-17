/**
 * Agrify Farming Guide & Crop Doctor Controller
 */

document.addEventListener('DOMContentLoaded', function () {
  const plantTabs = document.querySelectorAll('.plant-tab-item');
  const contentPanels = document.querySelectorAll('.crop-content-panel');
  const cropSearchInput = document.getElementById('crop-search-input');

  function activatePlant(plantKey) {
    if (!plantKey) return;

    // Update tab active state
    plantTabs.forEach(tab => {
      if (tab.getAttribute('data-plant') === plantKey) {
        tab.classList.add('active');
        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        tab.classList.remove('active');
      }
    });

    // Update panel active state
    contentPanels.forEach(panel => {
      if (panel.id === `${plantKey}-content`) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    // Update hash in URL
    window.history.replaceState(null, null, `#${plantKey}`);
  }

  // Click handler on tabs
  plantTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const plantKey = this.getAttribute('data-plant');
      activatePlant(plantKey);
    });
  });

  // Filter crops search
  if (cropSearchInput) {
    cropSearchInput.addEventListener('input', function () {
      const query = this.value.trim().toLowerCase();
      plantTabs.forEach(tab => {
        const name = tab.querySelector('.plant-tab-name').textContent.toLowerCase();
        if (name.includes(query)) {
          tab.style.display = 'flex';
        } else {
          tab.style.display = 'none';
        }
      });
    });
  }

  // Check URL hash for direct plant linking (e.g. #tomato)
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash) {
    activatePlant(hash);
  }
});
