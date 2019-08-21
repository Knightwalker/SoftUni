function Story_CharacterCreationTest2() {
	let game_shead = "";
	let game_stext = "";
	let game_sbtns = "";

	game_shead = 'The History Classroom';
	game_stext = '<br>'
			   + '<div id="story_charactercreationtest1" class="game_simg"></div>'
	 		   + '<br>'
				 + '<p>You place the exam sheet on your desk and make yourself comfortable, while slightly closing your eyes under the harsh morning sunlight, beaming through the shutter cracks. Squinting, you lower your head towards the desk, looking away from <i>her</i>. Your new teacher... She was just standing there, infront of the chalkboard, captivating everybody with her pressence. I mean sure, you can sure tell she\'s pretty, all other boys from your class are all over her too, and even though she\'s a teacher and this is supposed to be wrong, you were having a hard time getting your mind off her, as if you were somehow being <i>charmed</i>. You could probably spend your whole day just looking at her, but unfortunately you don\'t really have that luxury. You gotta work hard - score high on this test - or else with your current grades, you might drop out from school sooner rather than later and this is not an option you would like to consider. Who would take care of your little sister then? You need to graduate, get a good job and better support your family... or whats left of it anyways.</p>'
	 		   + '<br>'
				 + '<p><span class="player">"I need to gather myself and focus!"</span>, you force your mind to behave and concentrate on the test. Atleast history was the only subject who was always interesting to you since you were a child. You hated it at first, but your passion on it started because of Elena, as you knew how much she loved history and you were always struggling in striking a conversation with her. It was actually a good thing that she was not here currently, as your mind was distracted enough already. Maybe it\'s her fault that you were not paying enough attention in other classes, but could you blame her? She was so delightful, that she manages to sneak into your mind every now and then. I mean just look at you, your thoughts are all over the place! You need to focus. You grab your pen and narrow your eyes towards the exam sheet on your desk, taking a good look at the questions, while a small smirk shines upon your face. You finally managed to concentrate and started working. You ought to admit that you had a slight advantage here. History was after all a subject you never felt naked on and after what felt like an hour, you are finally ready.</p>'
	 		   + '<br>'
	 		   + '<p><span class="player">"Teacher..."</span>, You say quietly, too light a tone to actually do anything, so you raise your hand and call her, with the faintest hint of a smile on your lips, <span class="player">"I am done..."</span>. You sound satisfied. You are really proud of your work and for a first time you have this feeling that everything was going to be alright... or was it really?</p>'
	 		   + '<br>'
			   + '<div id="story_charactercreationtest2" class="game_simg"></div>'
	 		   + '<br>'
	 		   + `<p><span class="player">"Good job {name}, seems like you put a lot of work in there!"</span>, a rather familiar, but disturbing voice complimented you in a seemingly friendly manner, however you already knew who <i>he</i> was and anxiety stroke you hard, as you swiftly turned backwards to confirm it. It was him, {name}!... but when did he sneak behind you. Was he planning to torture you again? Was tommorow's bullying not enough for him? Couldn't he just leave you alone for once!</p>`
	 		   + '<br>'
	 		   + `<p><span class="player">"There's no need to get so tense {name}. In fact, I would like to make you a deal"</span>, he said with a confident, seemingly friendly disposition, but a determined posture of someone who knows exactly what they want. You could only narrow your eyes as you looked at him, but you knew him well enough to trust a single word comming out of his mouth. <span class="player">"What deal? What do you want {name}?</span>, you ask him, unable to look him straight into his eyes. <span class="player">"If this is about the coffe, I already promised to fix my mistake and buy the proper one.</span>, you tell him, feeling your pulse quicken as you are barely able to talk back to him.</p>`
				 + '<br>'
				 + `<p><span class="player">"Ooh arent you being a little too loud {name}"</span>, he exclaimed, while his feet stayed leaned on your chair, as if he was ready to squash you into your desk, given that you provide his ears something he does not want to hear. Your senses sharpen, your grip on the desk and the chair strengthens, as your body is preparing itself for anything, as much as it can, while awaiting for what he has to say. You detect a movement out of him, as he places his feet down, followed by a deep sigh. <span class="player">"Listen {name}, I'm sorry..."</span>, he breathed out heavily and in that moment an awkward silence falls between you, as you finally looked him in the eyes and for the first time, you were completely unable to figure out what he wants. Frankly, you had no idea what just happened. What is this "Sorry"? There is no such word in his vocabulary. With this guy, there is only black and white. He wants something from you, you don't give it to him, he beats you... you give it to him, he doesn't beat you... There is no gray!</p>`
				 + '<br>'	
			   + '<div id="story_animalattack3" class="game_simg"></div>'
	 		   + '<br>'
	 		   + '<p>Delicate limbs, lovely curves, a lean build and porcelain skin described the body of Octavia, who was a hauntingly beautiful woman. As her tight, athletic figure possitioned right infront of you and despite being on heels, you could tell that she stood slightly taller than the average female and also you. You look into her eyes and you are dazed. <span class="octavia_lacroix">"Lastly I would like to encourage you all to write about yourself! There is a small field where you can craft me a small essay about your history and origins at the end. You can share me your story and later I could share mine."</span> Saying that last part quietly, the purple haired extended her hand towards you, giving you a test paper. You are not sure if this last part really rolled out of her lips as you were still dazed, but you would not want to leave her hand hanging out too much, so you better take that test from the lady\'s hand right away.</p>'
	 		   + '<br>'
				 ;

	game_sbtns = '<div id="game_choice">Do you want to:</div>'
			   + '<div class="choice_block noselect" onclick="OpenPlace(\'Place_1_2\', \'story\', \'story_charactercreationtest\')">Take the test!</div>'
			   ;	

	document.getElementById('game_shead').innerHTML = game_shead;
	document.getElementById('game_stext').innerHTML = game_stext; 
	document.getElementById('game_sbtns').innerHTML = game_sbtns;	
}