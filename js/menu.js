
var breakfastArray = ["Eggs", "Toast","Sausage","Muffin"];
var lunchArray = ["Soup", "rice", "bread"];
			
var breakFastStr = "";
for (i = 0; i < breakfastArray.length; i++) { 
	breakFastStr += breakfastArray[i] + "<br>";
}
			
document.getElementById('messageBF').innerHTML = breakFastStr;
			
			
var lunchStr = "";
for (i = 0; i < lunchArray.length; i++) { 
	lunchStr += lunchArray[i] + "<br>";
}

document.getElementById('messageLunch').innerHTML = lunchStr;