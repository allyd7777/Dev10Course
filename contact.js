function validateForm() {
	var x = document.forms["contactForm"]["name"].value;
	var y = document.forms["contactForm"]["phone"].value;
	if (x == "") {
		alert("Please tell us your name!");
		return false;
	}
	if (y == "") {
		alert("Please tell us your phone number!");
		return false;
	}
}