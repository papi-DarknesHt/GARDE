document.getElementById('sendmail').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Collect form data
    const formData = new FormData(this);
  
    // Convert formData to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
  
    // Example: Log form data to console
    console.log(jsonData);
  
    // Example: Send form data to a server using fetch API
    fetch('sendEmail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        // Clear form fields
        this.reset();
      } else {
        alert('Failed to send message. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to send message. Please try again later.');
    });
  });
  