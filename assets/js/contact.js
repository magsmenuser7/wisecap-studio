



function btnsubmit() {
    // Collect form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const location = document.getElementById("location").value.trim();
    const message = document.getElementById("message").value.trim();
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const phonePattern = /^[0-9]{10}$/;
	// Validate form fields
	if (!name) {
		alert("Name field is required");
		return;
	}
	if (!email) {
		alert("Email field is required");
		return;
	}
	if (!number) {
		alert("Phone field is required");
		return;
	}
	if (!location) {
		alert("Subject field is required");
		return;
	}
	if (!message) {
		alert("Message field is required");
		return;
	}
	if (!emailPattern.test(email)) {
		alert("Please enter a valid email address.");
		return;
	}
	if (!phonePattern.test(number)) {
		alert("Please enter a valid 10-digit phone number.");
		return;
	}

	const params = {
        name: name,
        email: email,
        number: number,
        location: location,
        message: message
    };


	emailjs.send("service_alp1zsm", "template_s720k6c", params)
        .then(function(response) {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset(); // Clear form
        }, function(error) {
            alert("Failed to send message: " + JSON.stringify(error));
        });

}

