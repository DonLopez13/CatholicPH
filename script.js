document.addEventListener('DOMContentLoaded', function() {
    // Navigation Links - Add active class when clicked
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Remove the 'active' class from all navigation links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add 'active' class to the clicked link
            event.target.classList.add('active');
        });
    });

    // Form Submission Example (if needed for a contact form or others)
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent form from submitting normally (page reload)
            alert("Form Submitted!");  // Alert for submission (Replace with actual logic if needed)
        });
    }
});
