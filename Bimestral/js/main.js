document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

document.querySelector('form').addEventListener('submit', function(e) {
    const inputs = this.querySelectorAll('input[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            const errorElement = document.getElementById(`${input.id}-error`);
            if (errorElement) {
                errorElement.classList.remove('hidden');
            }
        }
    });
    
    if (!isValid) {
        e.preventDefault();
    }
});