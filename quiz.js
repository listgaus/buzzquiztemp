
var counter = 0;

function sayHello() {
	var x = document.getElementById("myText").value;
	document.getElementById("sayHi").innerHTML ="Thank you"+" "+x+", Let's Begin Your Test";
}

function reply(clicked_id){
	
			// alert(clicked_id);
			var x = parseInt(clicked_id);
			counter = counter+x;
			
		}

		
		function cbChange(obj) {
			var cbs = document.getElementsByClassName("checkme");
			for (var i = 0; i < cbs.length; i++) {
				cbs[i].checked = false;
			}
			obj.checked = true;
    // counter=counter+parseInt(obj.value);
    var x = parseInt(obj.value);
    counter += x;

}


function myFunction() {
	var y = document.getElementById("myNumber");
	var yVal = parseInt(y.value);
	counter+= yVal;

}

function picOne() { counter += 1; }
function picTwo() { counter+=2; }
function picThree() { counter+=3; }
function picFour() { counter+=4; }

function sumItAll() {

	var z = document.getElementsByClassName("rad");
	
	for (var i = 0 ; i < z.length ; i++) {
		if (z.item(i).checked === true) {
			counter += parseInt(z[i].value);
			console.log(counter);
		}
	}

	if (counter<=5){
		document.getElementById("demo").innerHTML = "You're probably a sanguin persone, google it ;)"

	}
	if ((counter>5) && (counter <=10)){
		document.getElementById("demo").innerHTML = "You're definitly choleric, good for you? google it to learn more about yourself"

	}
	if ((counter>10) && (counter <=15)){
		document.getElementById("demo").innerHTML = "You have a melancholic personality. i would reccomand googling it and seeking a change"

	}
	if (counter>15){
		document.getElementById("demo").innerHTML = "You're most likely to be Phlegmatic person, google it ;)"

	}

}