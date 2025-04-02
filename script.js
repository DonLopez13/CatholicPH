// Access the popup elements
const popup = document.getElementById('popup');
const popupOverlay = document.getElementById('popup-overlay');
const form = document.querySelector('form');

// Show the popup when the page loads
window.onload = () => {
    popup.style.display = 'block';
    popupOverlay.style.display = 'block';
};

// Close the popup if clicking outside of it
popupOverlay.addEventListener('click', () => {
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
});

// Prevent form submission and close popup when submitted
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted!'); // You can handle form logic here.
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
});
