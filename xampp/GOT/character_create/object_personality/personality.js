// This Calls the Function below and PASS Parameters from personality.php
document.getElementById("personality_builder").addEventListener("click",Limbo_OpenPersonalityBuilder);


// Declaring all variables from personality.php
var book_page1 = document.getElementById("book_page1");
var book_page2 = document.getElementById("book_page2");


	/*
	function lust_FearRats() {
		setTimeout(myTimeout, 1000) }
			function myTimeout() {
    		book_page1.style.display = "none";
    		book_page2.style.display = "none";
    		book_page3.style.display = "inline-table";
    		book_page4.style.display = "none";
    		book_page5.style.display = "none";
	}	*/

// ---------- ---------- ---------- ---------- ---------- 
function Limbo_OpenPersonalityBuilder() {
	document.getElementById("gotrp_client_body_darkener").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
	document.getElementById("canvas").style.display = "block";
	document.getElementById("book").style.display = "block";
}
function Limbo_ClosePersonalityBuilder() {
	document.getElementById("gotrp_client_body_darkener").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
	document.getElementById("character_religion_popup").style.display = "none";
}
// ---------- ---------- ---------- ---------- ----------   

//Declaring all EventListeners
window.addEventListener("keydown", checkKeyPressQEandSPACE, false);

//Declaring all Variables
var book_page = 0;
var limbo_js_fear_highplaces = 0;
var limbo_js_fear_tightplaces = 0;
var limbo_js_fear_snakes = 0; 
var limbo_js_fear_rats = 0;
var limbo_js_fear_spiders = 0;
var limbo_js_fear_crows = 0;
var limbo_js_fear_clowns = 0;
var limbo_js_fear_scarecrows = 0;
var limbo_js_fear_drowning = 0;
var limbo_js_fear_thunder = 0;

var hand_img = document.createElement("IMG");
var limbo_js_fear_highplaces_img = document.createElement("IMG");
var limbo_js_fear_tightplaces_img = document.createElement("IMG");
var limbo_js_fear_snakes_img = document.createElement("IMG");
var limbo_js_fear_rats_img = document.createElement("IMG");
var limbo_js_fear_spiders_img = document.createElement("IMG");
var limbo_js_fear_crows_img = document.createElement("IMG");
var limbo_js_fear_clowns_img = document.createElement("IMG");
var limbo_js_fear_scarecrows_img = document.createElement("IMG");
var limbo_js_fear_drowning_img = document.createElement("IMG");
var limbo_js_fear_thunder_img = document.createElement("IMG");

//Loading all Images
hand_img.setAttribute("src", "character_create/object_personality/hand12.png");
limbo_js_fear_highplaces_img.setAttribute("src", "character_create/object_personality/leftpage_fear_highplaces.png");
limbo_js_fear_tightplaces_img.setAttribute("src", "character_create/object_personality/rightpage_fear_tightplaces.png");
limbo_js_fear_snakes_img.setAttribute("src", "character_create/object_personality/leftpage_fear_snakes.png");
limbo_js_fear_rats_img.setAttribute("src", "character_create/object_personality/rightpage_fear_rats.png");
limbo_js_fear_spiders_img.setAttribute("src", "character_create/object_personality/leftpage_fear_spiders.png");
limbo_js_fear_crows_img.setAttribute("src", "character_create/object_personality/rightpage_fear_crows.png");
limbo_js_fear_clowns_img.setAttribute("src", "character_create/object_personality/leftpage_fear_clowns.png");
limbo_js_fear_scarecrows_img.setAttribute("src", "character_create/object_personality/rightpage_fear_scarecrows.png");
limbo_js_fear_drowning_img.setAttribute("src", "character_create/object_personality/leftpage_fear_drowning.png");
limbo_js_fear_thunder_img.setAttribute("src", "character_create/object_personality/rightpage_fear_thunder.png");

function checkKeyPressQEandSPACE(key) {
	//This selects a fear
	if ((book_page == 1) && (limbo_js_fear_highplaces == 0 && limbo_js_fear_tightplaces == 0) && (key.keyCode == "81" || key.keyCode == "113")) {
		canvas('highplaces');
		limbo_js_fear_highplaces = 1;
	} else if ((book_page == 1) && (limbo_js_fear_highplaces == 0 && limbo_js_fear_tightplaces == 0) && (key.keyCode == "69" || key.keyCode == "101")) {
		canvas('tightplaces');
		limbo_js_fear_tightplaces = 1;
	} else if ((book_page == 2) && (limbo_js_fear_snakes == 0 && limbo_js_fear_rats == 0) && (key.keyCode == "81" || key.keyCode == "113")) {
		canvas('snakes');
		limbo_js_fear_snakes = 1;	
	} else if ((book_page == 2) && (limbo_js_fear_snakes == 0 && limbo_js_fear_rats == 0) && (key.keyCode == "69" || key.keyCode == "101")) {
		canvas('rats');
		limbo_js_fear_rats = 1;	
	} else if ((book_page == 3) && (limbo_js_fear_spiders == 0 && limbo_js_fear_crows == 0) && (key.keyCode == "81" || key.keyCode == "113")) {
		canvas('spiders');
		limbo_js_fear_spiders = 1;	
	} else if ((book_page == 3) && (limbo_js_fear_spiders == 0 && limbo_js_fear_crows == 0) && (key.keyCode == "69" || key.keyCode == "101")) {
		canvas('crows');
		limbo_js_fear_crows = 1;	
	} else if ((book_page == 4) && (limbo_js_fear_clowns == 0 && limbo_js_fear_scarecrows == 0) && (key.keyCode == "81" || key.keyCode == "113")) {
		canvas('clowns');
		limbo_js_fear_clowns = 1;	
	} else if ((book_page == 4) && (limbo_js_fear_clowns == 0 && limbo_js_fear_scarecrows == 0) && (key.keyCode == "69" || key.keyCode == "101")) {
		canvas('scarecrows');
		limbo_js_fear_scarecrows = 1;	
	} else if ((book_page == 5) && (limbo_js_fear_drowning == 0 && limbo_js_fear_thunder == 0) && (key.keyCode == "81" || key.keyCode == "113")) {
		canvas('drowning');
		limbo_js_fear_drowning = 1;	
	} else if ((book_page == 5) && (limbo_js_fear_drowning == 0 && limbo_js_fear_thunder == 0) && (key.keyCode == "69" || key.keyCode == "101")) {
		canvas('thunder');
		limbo_js_fear_thunder = 1;	
	}

    //This changes the book's page
	if (book_page == 0 && key.keyCode == "32") {
		canvas('book_page_one');
		book_page = 1;
	} else if (book_page == 1 && key.keyCode == "32") {
		canvas('book_page_two');
		book_page = 2;
	} else if (book_page == 2 && key.keyCode == "32") {
		canvas('book_page_three');
		book_page = 3;
	} else if (book_page == 3 && key.keyCode == "32") {
		canvas('book_page_four');
		book_page = 4;
	} else if (book_page == 4 && key.keyCode == "32") {
		canvas('book_page_five');
		book_page = 5;
	}

} // END function checkKeyPressQEandSPACE

function canvas (param) {
	var canvas = document.getElementById("canvas");
	var c = canvas.getContext("2d");
	
	var i = 0;	 			/// "progress"
	var steps = 20;		    /// constant speed

    /// set start point
    var x1 = 1035;
    var y1 = 600;

    /// end point 
	if (param == "highplaces" || param == "snakes" || param == "spiders" || param == "clowns" || param == "drowning") {
    	var x2 = 255;
    	var y2 = 350;
	} else if (param == "tightplaces" || param == "rats" || param == "crows" || param == "scarecrows" || param == "thunder") {
    	var x2 = 770;
    	var y2 = 350;
	}

    /// calc distance
    var dx = x2 - x1;
        dy = y2 - y1;
    
    var dist = Math.abs(Math.sqrt(dx * dx + dy * dy));

   /// speed will be number of steps / distance
    var speed = steps / dist;


	function loop() {
		c.clearRect(0, 0, canvas.width, canvas.height);
		
		//This selects a fear
		if (param == "highplaces") {
			c.drawImage(limbo_js_fear_highplaces_img, 100, 96.5, 500, 607);
			c.drawImage(limbo_js_fear_tightplaces_img, 600, 96.5, 500, 607);
		}
		else if (param == "tightplaces") {
			c.drawImage(limbo_js_fear_highplaces_img, 100, 96.5, 500, 607);
			c.drawImage(limbo_js_fear_tightplaces_img, 600, 96.5, 500, 607);
		} else if (param == "snakes") {
			c.drawImage(limbo_js_fear_snakes_img, 100, 96.5, 500, 607);
			c.drawImage(limbo_js_fear_rats_img, 600, 96.5, 500, 607);
		} else if (param == "rats") {
			c.drawImage(limbo_js_fear_snakes_img, 100, 96.5, 500, 607);
			c.drawImage(limbo_js_fear_rats_img, 600, 96.5, 500, 607);
		} else if (param == "spiders") {
			c.drawImage(limbo_js_fear_spiders_img, 100, 96.5, 500, 607);
			c.drawImage(limbo_js_fear_crows_img, 600, 96.5, 500, 607);
		} else if (param == "crows") {
			c.drawImage(limbo_js_fear_spiders_img, 100, 96.5, 500, 607);
			c.drawImage(limbo_js_fear_crows_img, 600, 96.5, 500, 607);
		} else if (param == "clowns") {
			c.drawImage(limbo_js_fear_clowns_img, 100, 96.5, 500, 607);
			c.drawImage(limbo_js_fear_scarecrows_img, 600, 96.5, 500, 607);
		} else if (param == "scarecrows") {
			c.drawImage(limbo_js_fear_clowns_img, 100, 96.5, 500, 607);
			c.drawImage(limbo_js_fear_scarecrows_img, 600, 96.5, 500, 607);
		} else if (param == "drowning") {
			c.drawImage(limbo_js_fear_drowning_img, 100, 96.5, 500, 607);
			c.drawImage(limbo_js_fear_thunder_img, 600, 96.5, 500, 607);
		} else if (param == "thunder") {
			c.drawImage(limbo_js_fear_drowning_img, 100, 96.5, 500, 607);
			c.drawImage(limbo_js_fear_thunder_img, 600, 96.5, 500, 607);
		}
    	

		//This changes the book's page
		if (param == "book_page_one") {
			c.drawImage(limbo_js_fear_highplaces_img, 100, 96.5, 500, 607);
			c.drawImage(limbo_js_fear_tightplaces_img, 600, 96.5, 500, 607);
			c.font = "30px Arial";
			c.textAlign="center"; 
			c.fillText("I hate heights", 350, 130);
			c.fillText("I hate tight places", 850, 130);
		} else if (param == "book_page_two") {
			c.drawImage(limbo_js_fear_snakes_img, 100, 96.5, 500, 607);
			c.drawImage(limbo_js_fear_rats_img, 600, 96.5, 500, 607);
			c.font = "30px Arial";
			c.textAlign="center"; 
			c.fillText("Snakes scare me", 350, 130);
			c.fillText("Rats scare me", 850, 130);
		} else if (param == "book_page_three") {
			c.drawImage(limbo_js_fear_spiders_img, 100, 96.5, 500, 607);
			c.drawImage(limbo_js_fear_crows_img, 600, 96.5, 500, 607);
			c.font = "30px Arial";
			c.textAlign="center"; 
			c.fillText("I hate spiders", 350, 130);
			c.fillText("I hate crows", 850, 130);			
		} else if (param == "book_page_four") {
			c.drawImage(limbo_js_fear_clowns_img, 100, 96.5, 500, 607);
			c.drawImage(limbo_js_fear_scarecrows_img, 600, 96.5, 500, 607);
			c.font = "30px Arial";
			c.textAlign="center"; 
			c.fillText("Clowns scare me", 350, 130);
			c.fillText("Scarecrows scare me", 850, 130);
		} else if (param == "book_page_five") {
			c.drawImage(limbo_js_fear_drowning_img, 100, 96.5, 500, 607);
			c.drawImage(limbo_js_fear_thunder_img, 600, 96.5, 500, 607);
			c.font = "30px Arial";
			c.textAlign="center"; 
			c.fillText("I fear drowning", 350, 130);
			c.fillText("I fear thunder", 850, 130);
		}

   		/// move a step
   		i = i + speed;

   		/// calc current x/y position
   		x = x1 + (x2 - x1) * i;
    	y = y1 + (y2 - y1) * i;   			

    	/// at goal? if not, loop
    	if (i < 1) {
       		c.drawImage(hand_img, x, y, 400, 580);
			requestAnimationFrame(loop);
    	} else {
			c.drawImage(hand_img, x2, y2, 400, 580);
		}
    	

		/*c.beginPath();
 		c.moveTo(1035, 600);
 		c.lineTo(335,300);
 		c.strokeStyle = "#fa34a3"
 		c.stroke();*/
		
		console.log(loop);

	} // END function loop

	loop();
    console.log(canvas);

} // END function canvas

