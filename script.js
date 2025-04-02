// Initialize EmailJS with your User ID (Public Key)
emailjs.init("O99s-O6m1ns7qYzgd");

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    // Get form values
    const name = document.getElementById('user_name').value;
    const email = document.getElementById('user_email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send("service_4b01g8g", "template_pjz9pnz", {
        name: name,     
        email: email,   
        message: message  
    }).then(function(response) {
        alert('Message sent successfully!');
    }, function(error) {
        alert('Failed to send message: ' + error.text);
    });
});
