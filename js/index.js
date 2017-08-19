$(window).load(function() {
	alert("Our webpage loaded");
});
		
if (/iPhone|iPod|Android|iPad|webOS|Blackberry|IEMobile|Opera Mini/i.test(navigator.userAgenet)){
	alert('We noticed you are using mobile. Enhance your experience by using a desktop.');
} else {
	alert('We noticed you are using a desktop. Check us out using our mobile app!');
}