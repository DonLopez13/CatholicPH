// Example of a simple script to interact with the page

document.addEventListener("DOMContentLoaded", function () {
    // This code will run when the DOM is fully loaded

    // Example of handling a click event on navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            alert('Navigating to ' + this.textContent);
        });
    });

    // Example of handling form submission (for contact or feedback forms)
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission for demo purposes
            alert('Form submitted!');
        });
    }
});
