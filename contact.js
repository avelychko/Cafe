document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const description = document.getElementById('description').value;

        const formData = {
            name: name,
            email: email,
            description: description
        };

        localStorage.setItem('contactFormData', JSON.stringify(formData));

        form.reset();
        alert('We have received your message and will get back to you as soon as possible!');
    });
});
