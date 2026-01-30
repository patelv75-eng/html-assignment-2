document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const status = document.querySelector('input[name="status"]:checked');
        const message = document.getElementById('message').value.trim();

        // Validation
        let isValid = true;
        let errors = [];

        if (name === '') {
            errors.push('Please enter your name');
            isValid = false;
        } else if (name.length < 2) {
            errors.push('Name must be at least 2 characters');
            isValid = false;
        }

        if (email === '') {
            errors.push('Please enter your email');
            isValid = false;
        } else if (!isValidEmail(email)) {
            errors.push('Please enter a valid email address');
            isValid = false;
        }

        if (!status) {
            errors.push('Please select your marital status');
            isValid = false;
        }

        if (message === '') {
            errors.push('Please enter a message');
            isValid = false;
        } else if (message.length < 10) {
            errors.push('Message must be at least 10 characters');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
            // Here you can add code to actually submit the form, e.g., form.submit();
        } else {
            alert('Please fix the following errors:\n' + errors.join('\n'));
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
