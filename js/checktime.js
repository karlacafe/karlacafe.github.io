function checkTime(){
	 var dt = new Date();
	 var hours = dt.getHours();
	 var msg ="";

	if (hours < 8) {
        msg = "Sorry. We are not delivering at this time.";
    } else if (hours < 20) {
        msg = "We are delivering! Give us a call (973)472-1201!";
    } else if (hours >= 20){
        msg = "Sorry. We are not delivering at this time.";
    }
	
	document.getElementById('thingHere').innerHTML = msg;
 }