function submitForm(event) {
    event.preventDefault();

    // Validate the form (you can add more sophisticated validation here)

    // Simple validation example
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address');
        return;
    }

    // If validation passes, you can proceed with form submission

    // Use fetch API to send form data to the server-side script
    fetch('https://hostdevcreate.github.io/Registartion//send_email.php', { // Replace with your server domain
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(new FormData(event.target)),
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Display the server's response
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

