document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Create a data object to send to the server
    const data = {
        name: name,
        email: email,
        message: message
    };
     
    // Send the data to the server using an XMLHttpRequest or Fetch API
    // Here, you would make an AJAX request to your server-side script
    // to send the email. Replace 'your_server_script.php' with your actual server-side script.
    fetch("EmailServerScript.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Email sent successfully!");
            // Optionally, reset the form
            document.getElementById("contactForm").reset();
        } else {
            alert("Email could not be sent. Please try again later.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    });
});
