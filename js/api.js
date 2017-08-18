function sendAPIEmail(){
	emailjs.init("user_zJJs3QAtIFoS18W7pVXN1");
	
	var toEmailName = document.getElementById('emailTextBox').value;
	var subject = document.getElementById('subjectTextBox').value;
	var message = document.getElementById('messageBox').value;
	
	//alert(toEmailName);
	//alert(message);
	
	if (toEmailName == "" || toEmailName == " "){
		alert("You need to fill out the email section");
		return;
	}
	if (subject == "" || subject == " "){
		alert("You need to fill out the subject section");
		return;
	}
	var messageCheck = message;
	messageCheck = messageCheck.replace(/^\s+/, '').replace(/\s+$/, '');
	
	if (messageCheck == "" || messageCheck == " "){
		alert("You need to fill out the message section");
		return;
	}

	// Send to company
	emailjs.send("sendgrid", "template_toCompany", {"reply_to":"kpm5311@gmail.com",
	"to_name":"karlacafe","from_name":toEmailName,
	"message_html":message}).then(function(response) {
		alert("You have successfully sent your email, someone will be getting back to you shortly!");
	}, function(err) {
		alert("Sorry, there was a problem sending your email")
	});
	
	
	// Confirmation email (send email to ourselves)
	emailjs.send("sendgrid", "template_c5AzhcaD", {"reply_to":toEmailName,
	"to_name":"karlacafe","from_name":"kpm5311@gmail.com",
	"message_html":"Hey there! Thank you for contacting us, we really appreciate it. We hope that we can work with you! We will respond to you quite shortly, so sit tight!"}).then(function(response) {
		alert("You will recieve a confirmation email");
	}, function(err) {
		alert("Sorry, there was a problem sending your email");
	});


}
