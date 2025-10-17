
// Simple JavaScript to handle the plant selection
document.addEventListener('DOMContentLoaded', function() {
    const plantItems = document.querySelectorAll('.plant-item');
    const contentDivs = document.querySelectorAll('.content');
    
    plantItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all plant items
            plantItems.forEach(pi => pi.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Hide all content divs
            contentDivs.forEach(content => content.classList.remove('active'));
            
            // Show the selected content
            const plantType = this.getAttribute('data-plant');
            const contentToShow = document.getElementById(plantType + '-content');
            if (contentToShow) {
                contentToShow.classList.add('active');
            }
        });
    });
});