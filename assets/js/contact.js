



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



// // Contact Form Submission
// function btnsubmit() {

// 	// Get form fields
// 	let username = document.getElementById("name").value.trim();
// 	let useremail = document.getElementById("email").value.trim();
// 	let userphone = document.getElementById("number").value.trim();
// 	let userlocation = document.getElementById("location").value.trim();
// 	let usermessage = document.getElementById("message").value.trim();

// 	// Email validation regex
// 	let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 	// Phone validation regex (Assuming 10-digit numbers)
// 	let phonePattern = /^[0-9]{10}$/;

// 	if (!username) {
//         alert("Name field is required");
//         return;
//     }

//     if (!useremail) {
//         alert("Email field is required");
//         return;
//     }

//     if (!userphone) {
//         alert("Phone field is required");
//         return;
//     }

//     if (!userlocation) {
//         alert("Subject field is required");
//         return;
//     }

// 	if (!usermessage) {
//         alert("Message field is required");
//         return;
//     }


// 	if (!emailPattern.test(useremail)) {
// 		alert("Please enter a valid email address.");
// 		return;
// 	}

// 	if (!phonePattern.test(userphone)) {
// 		alert("Please enter a valid 10-digit phone number.");
// 		return;
// 	}

// 	// Prepare email parameters
// 	let emailParams = {
// 		username: username,
// 		useremail: useremail,
// 		userphone: userphone,
// 		userlocation: userlocation,
// 		usermessage: usermessage
// 	};

// 	// Send email via EmailJS 
// 	emailjs.sendForm("service_alp1zsm", "template_s720k6c", '#contact-form','3wTsQ9ooVSx-OAMuR', emailParams)
// 	.then(function(response) {
// 		alert("Message sent successfully!");
// 		document.getElementById("contact-form").reset();
// 	}, function(error) {
// 		alert("Error sending message. Please try again.");
// 		console.error("EmailJS Error:", error);
// 	});
// }









