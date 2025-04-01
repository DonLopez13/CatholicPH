// Example of a simple script to interact with the page

// Function to display a greeting when the page loads
window.onload = function() {
    alert("Welcome to CatholicPH! Explore our site to learn more.");
}

// Example of interactive button (if you want to add a button later)
function showMessage() {
    alert("This is a message from the CatholicPH site.");
}

// Adding event listener to a button (you can add a button in HTML to trigger this)
document.querySelector("#exampleButton").addEventListener("click", showMessage);
