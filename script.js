// Example JavaScript code to add more interactivity if needed

// Function to handle form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us, ' + document.getElementById('name').value + '!');
});
