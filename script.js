function validateForm(event) {
    event.preventDefault();

    // You can add more sophisticated validation here

    // Simple validation example
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address');
        return;
    }

    // If validation passes, you can proceed with form submission
    alert('Form submitted successfully! (Note: Email sending is not implemented in client-side)');
}
