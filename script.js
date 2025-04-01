// Function to display a greeting when the page loads
window.onload = function() {
    alert("Welcome to CatholicPH! Explore our site to learn more.");
}

// Example of a simple function to handle form submission (for the contact page)
document.querySelector("form")?.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the default form submission
    alert("Thank you for your feedback! We will get back to you soon.");
});

// Example of interactive button (you can add a button in HTML to trigger this)
function showMessage() {
    alert("This is a message from the CatholicPH site.");
}

// Adding event listener to a button (you can add a button in HTML to trigger this)
document.querySelector("#exampleButton")?.addEventListener("click", showMessage);
