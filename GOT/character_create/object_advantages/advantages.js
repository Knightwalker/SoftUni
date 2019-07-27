// Declaring all variables
var js_advantages_points = 3;
var js_advantages_athletic = 0;
var js_advantages_combat_expertise = 0;
var js_advantages_iron_will = 0;
var js_advantages_agile = 0;
var js_advantages_stealthy = 0;
var js_advantages_sleight_of_hand = 0;
var js_advantages_sharpshooter = 0;
var js_advantages_diligent = 0;
var js_advantages_cunning = 0;
var js_advantages_general_knowledge = 0;
var js_advantages_combat_knowledge = 0;
var js_advantages_secret_knowledge = 0;
var js_advantages_animal_affinity = 0;
var js_advantages_survivalist = 0;
var js_advantages_negotiator = 0;
var js_advantages_investigator = 0;
var js_advantages_actor = 0;
var js_advantages_charming = 0;
var js_advantages_deceitful = 0;
var js_advantages_persuasive = 0;

// Declaring all event listeners
document.getElementById("athletic").addEventListener("mouseover", selectCharacterAdvantagesAthletic);
document.getElementById("combat_expertise").addEventListener("mouseover", selectCharacterAdvantagesCombatExpertise);
document.getElementById("iron_will").addEventListener("mouseover", selectCharacterAdvantagesIronWill);
document.getElementById("agile").addEventListener("mouseover", selectCharacterAdvantagesAgile);
document.getElementById("stealthy").addEventListener("mouseover", selectCharacterAdvantagesStealthy);
document.getElementById("sleight_of_hand").addEventListener("mouseover", selectCharacterAdvantagesSleightOfHand);
document.getElementById("sharpshooter").addEventListener("mouseover", selectCharacterAdvantagesSharpshooter);
document.getElementById("diligent").addEventListener("mouseover", selectCharacterAdvantagesDiligent);
document.getElementById("cunning").addEventListener("mouseover", selectCharacterAdvantagesCunning);
document.getElementById("general_knowledge").addEventListener("mouseover", selectCharacterAdvantagesGeneralKnowledge);
document.getElementById("combat_knowledge").addEventListener("mouseover", selectCharacterAdvantagesCombatKnowledge);
document.getElementById("secret_knowledge").addEventListener("mouseover", selectCharacterAdvantagesSecretKnowledge);
document.getElementById("animal_affinity").addEventListener("mouseover", selectCharacterAdvantagesAnimalAffinity);
document.getElementById("survivalist").addEventListener("mouseover", selectCharacterAdvantagesSurvivalist);
document.getElementById("negotiator").addEventListener("mouseover", selectCharacterAdvantagesNegotiator);
document.getElementById("investigator").addEventListener("mouseover", selectCharacterAdvantagesInvestigator);
document.getElementById("actor").addEventListener("mouseover", selectCharacterAdvantagesActor);
document.getElementById("charming").addEventListener("mouseover", selectCharacterAdvantagesCharming);
document.getElementById("deceitful").addEventListener("mouseover", selectCharacterAdvantagesDeceitful);
document.getElementById("persuasive").addEventListener("mouseover", selectCharacterAdvantagesPersuasive);
// ---------- ---------- ---------- ---------- ----------   
document.getElementById("athletic").addEventListener("mouseout", deselectCharacterAdvantagesAthletic);
document.getElementById("combat_expertise").addEventListener("mouseout", deselectCharacterAdvantagesCombatExpertise);
document.getElementById("iron_will").addEventListener("mouseout", deselectCharacterAdvantagesIronWill);
document.getElementById("agile").addEventListener("mouseout", deselectCharacterAdvantagesAgile);
document.getElementById("stealthy").addEventListener("mouseout", deselectCharacterAdvantagesStealthy);
document.getElementById("sleight_of_hand").addEventListener("mouseout", deselectCharacterAdvantagesSleightOfHand);
document.getElementById("sharpshooter").addEventListener("mouseout",deselectCharacterAdvantagesSharpshooter);
document.getElementById("diligent").addEventListener("mouseout", deselectCharacterAdvantagesDiligent);
document.getElementById("cunning").addEventListener("mouseout", deselectCharacterAdvantagesCunning);
document.getElementById("general_knowledge").addEventListener("mouseout", deselectCharacterAdvantagesGeneralKnowledge);
document.getElementById("combat_knowledge").addEventListener("mouseout", deselectCharacterAdvantagesCombatKnowledge);
document.getElementById("secret_knowledge").addEventListener("mouseout", deselectCharacterAdvantagesSecretKnowledge);
document.getElementById("animal_affinity").addEventListener("mouseout", deselectCharacterAdvantagesAnimalAffinity);
document.getElementById("survivalist").addEventListener("mouseout", deselectCharacterAdvantagesSurvivalist);
document.getElementById("negotiator").addEventListener("mouseout", deselectCharacterAdvantagesNegotiator);
document.getElementById("investigator").addEventListener("mouseout", deselectCharacterAdvantagesInvestigator);
document.getElementById("actor").addEventListener("mouseout", deselectCharacterAdvantagesActor);
document.getElementById("charming").addEventListener("mouseout", deselectCharacterAdvantagesCharming);
document.getElementById("deceitful").addEventListener("mouseout", deselectCharacterAdvantagesDeceitful);
document.getElementById("persuasive").addEventListener("mouseout", deselectCharacterAdvantagesPersuasive);
// ---------- ---------- ---------- ---------- ----------    
document.getElementById("athletic").addEventListener("click", clickCharacterAdvantagesAthletic);
document.getElementById("combat_expertise").addEventListener("click", clickCharacterAdvantagesCombatExpertise);
document.getElementById("iron_will").addEventListener("click", clickCharacterAdvantagesIronWill);
document.getElementById("agile").addEventListener("click", clickCharacterAdvantagesAgile);
document.getElementById("stealthy").addEventListener("click", clickCharacterAdvantagesStealthy);
document.getElementById("sleight_of_hand").addEventListener("click", clickCharacterAdvantagesSleightOfHand);
document.getElementById("sharpshooter").addEventListener("click", clickCharacterAdvantagesSharpshooter);
document.getElementById("diligent").addEventListener("click", clickCharacterAdvantagesDiligent);
document.getElementById("cunning").addEventListener("click", clickCharacterAdvantagesCunning);
document.getElementById("general_knowledge").addEventListener("click", clickCharacterAdvantagesGeneralKnowledge);
document.getElementById("combat_knowledge").addEventListener("click", clickCharacterAdvantagesCombatKnowledge);
document.getElementById("secret_knowledge").addEventListener("click", clickCharacterAdvantagesSecretKnowledge);
document.getElementById("animal_affinity").addEventListener("click", clickCharacterAdvantagesAnimalAffinity);
document.getElementById("survivalist").addEventListener("click", clickCharacterAdvantagesSurvivalist);
document.getElementById("negotiator").addEventListener("click", clickCharacterAdvantagesNegotiator);
document.getElementById("investigator").addEventListener("click", clickCharacterAdvantagesInvestigator);
document.getElementById("actor").addEventListener("click", clickCharacterAdvantagesActor);
document.getElementById("charming").addEventListener("click", clickCharacterAdvantagesCharming);
document.getElementById("deceitful").addEventListener("click", clickCharacterAdvantagesDeceitful);
document.getElementById("persuasive").addEventListener("click", clickCharacterAdvantagesPersuasive);

// Declaring all functions
    function selectCharacterAdvantagesAthletic() {
      document.getElementById("athletic").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    function selectCharacterAdvantagesCombatExpertise() {
      document.getElementById("combat_expertise").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    function selectCharacterAdvantagesIronWill() {
      document.getElementById("iron_will").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    function selectCharacterAdvantagesAgile() {
      document.getElementById("agile").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    function selectCharacterAdvantagesStealthy() {
      document.getElementById("stealthy").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    function selectCharacterAdvantagesSleightOfHand() {
      document.getElementById("sleight_of_hand").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    function selectCharacterAdvantagesSharpshooter() {
      document.getElementById("sharpshooter").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
 	function selectCharacterAdvantagesDiligent() {
      document.getElementById("diligent").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    function selectCharacterAdvantagesCunning() {
      document.getElementById("cunning").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    function selectCharacterAdvantagesGeneralKnowledge() {
      document.getElementById("general_knowledge").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    function selectCharacterAdvantagesCombatKnowledge() {
      document.getElementById("combat_knowledge").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    function selectCharacterAdvantagesSecretKnowledge() {
      document.getElementById("secret_knowledge").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    function selectCharacterAdvantagesAnimalAffinity() {
      document.getElementById("animal_affinity").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    function selectCharacterAdvantagesSurvivalist() {
      document.getElementById("survivalist").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    function selectCharacterAdvantagesNegotiator() {
      document.getElementById("negotiator").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    function selectCharacterAdvantagesInvestigator() {
      document.getElementById("investigator").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    function selectCharacterAdvantagesActor() {
      document.getElementById("actor").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    function selectCharacterAdvantagesCharming() {
      document.getElementById("charming").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    function selectCharacterAdvantagesDeceitful() {
      document.getElementById("deceitful").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    function selectCharacterAdvantagesPersuasive() {
      document.getElementById("persuasive").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
// ---------- ---------- ---------- ---------- ---------- 
    function deselectCharacterAdvantagesAthletic() {
    	document.getElementById("athletic").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesCombatExpertise() {
    	document.getElementById("combat_expertise").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesIronWill() {
    	document.getElementById("iron_will").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesAgile() {
    	document.getElementById("agile").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesStealthy() {
    	document.getElementById("stealthy").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesSleightOfHand() {
    	document.getElementById("sleight_of_hand").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesSharpshooter() {
    	document.getElementById("sharpshooter").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesDiligent() {
    	document.getElementById("diligent").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesCunning() {
    	document.getElementById("cunning").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesGeneralKnowledge() {
    	document.getElementById("general_knowledge").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesCombatKnowledge() {
    	document.getElementById("combat_knowledge").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesSecretKnowledge() {
    	document.getElementById("secret_knowledge").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesAnimalAffinity() {
    	document.getElementById("animal_affinity").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesSurvivalist() {
    	document.getElementById("survivalist").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesNegotiator() {
    	document.getElementById("negotiator").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesInvestigator() {
    	document.getElementById("investigator").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesActor() {
    	document.getElementById("actor").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesCharming() {
    	document.getElementById("charming").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesDeceitful() {
    	document.getElementById("deceitful").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function deselectCharacterAdvantagesPersuasive() {
    	document.getElementById("persuasive").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
// ---------- ---------- ---------- ---------- ---------- 
	function clickCharacterAdvantagesAthletic() {
		if (js_advantages_athletic == 0 && js_advantages_points > 0) {
			document.getElementById("check_athletic").style.display = "block";
			js_advantages_athletic = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_athletic.value = 1;
		} else if (js_advantages_athletic == 1) {
			document.getElementById("check_athletic").style.display = "none";
			js_advantages_athletic = 0;
			js_advantages_points = js_advantages_points +1;
			document.create_character.php_character_advantages_athletic.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
	function clickCharacterAdvantagesCombatExpertise() {
		if (js_advantages_combat_expertise == 0 && js_advantages_points > 0) {
			document.getElementById("check_combat_expertise").style.display = "block";
			js_advantages_combat_expertise = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_combat_expertise.value = 1;
		} else if (js_advantages_combat_expertise == 1) {
			document.getElementById("check_combat_expertise").style.display = "none";
			js_advantages_combat_expertise = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_combat_expertise.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
	function clickCharacterAdvantagesIronWill() {
		if (js_advantages_iron_will == 0 && js_advantages_points > 0) {
			document.getElementById("check_iron_will").style.display = "block";
			js_advantages_iron_will = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_iron_will.value = 1;
		} else if (js_advantages_iron_will == 1) {
			document.getElementById("check_iron_will").style.display = "none";
			js_advantages_iron_will = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_iron_will.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
   	function clickCharacterAdvantagesAgile() {
		if (js_advantages_agile == 0 && js_advantages_points > 0) {
			document.getElementById("check_agile").style.display = "block";
			js_advantages_agile = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_agile.value = 1;
		} else if (js_advantages_agile == 1) {
			document.getElementById("check_agile").style.display = "none";
			js_advantages_agile = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_agile.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
   	function clickCharacterAdvantagesStealthy() {
		if (js_advantages_stealthy == 0 && js_advantages_points > 0) {
			document.getElementById("check_stealthy").style.display = "block";
			js_advantages_stealthy = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_stealthy.value = 1;
		} else if (js_advantages_stealthy == 1) {
			document.getElementById("check_stealthy").style.display = "none";
			js_advantages_stealthy = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_stealthy.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
   	function clickCharacterAdvantagesSleightOfHand() {
		if (js_advantages_sleight_of_hand == 0 && js_advantages_points > 0) {
			document.getElementById("check_sleight_of_hand").style.display = "block";
			js_advantages_sleight_of_hand = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_sleight_of_hand.value = 1;
		} else if (js_advantages_sleight_of_hand == 1) {
			document.getElementById("check_sleight_of_hand").style.display = "none";
			js_advantages_sleight_of_hand = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_sleight_of_hand.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
   	function clickCharacterAdvantagesSharpshooter() {
		if (js_advantages_sharpshooter == 0 && js_advantages_points > 0) {
			document.getElementById("check_sharpshooter").style.display = "block";
			js_advantages_sharpshooter = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_sharpshooter.value = 1;
		} else if (js_advantages_sharpshooter == 1) {
			document.getElementById("check_sharpshooter").style.display = "none";
			js_advantages_sharpshooter = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_sharpshooter.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
   	function clickCharacterAdvantagesDiligent() {
		if (js_advantages_diligent == 0 && js_advantages_points > 0) {
			document.getElementById("check_diligent").style.display = "block";
			js_advantages_diligent = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_diligent.value = 1;
		} else if (js_advantages_diligent == 1) {
			document.getElementById("check_diligent").style.display = "none";
			js_advantages_diligent = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_diligent.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
   	function clickCharacterAdvantagesCunning() {
		if (js_advantages_cunning == 0 && js_advantages_points > 0) {
			document.getElementById("check_cunning").style.display = "block";
			js_advantages_cunning = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_cunning.value = 1;
		} else if (js_advantages_cunning == 1) {
			document.getElementById("check_cunning").style.display = "none";
			js_advantages_cunning = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_cunning.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
   	function clickCharacterAdvantagesGeneralKnowledge() {
		if (js_advantages_general_knowledge == 0 && js_advantages_points > 0) {
			document.getElementById("check_general_knowledge").style.display = "block";
			js_advantages_general_knowledge = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_general_knowledge.value = 1;
		} else if (js_advantages_general_knowledge == 1) {
			document.getElementById("check_general_knowledge").style.display = "none";
			js_advantages_general_knowledge = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_general_knowledge.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
   	function clickCharacterAdvantagesCombatKnowledge() {
		if (js_advantages_combat_knowledge == 0 && js_advantages_points > 0) {
			document.getElementById("check_combat_knowledge").style.display = "block";
			js_advantages_combat_knowledge = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_combat_knowledge.value = 1;
		} else if (js_advantages_combat_knowledge == 1) {
			document.getElementById("check_combat_knowledge").style.display = "none";
			js_advantages_combat_knowledge = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_combat_knowledge.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
   	function clickCharacterAdvantagesSecretKnowledge() {
		if (js_advantages_secret_knowledge == 0 && js_advantages_points > 0) {
			document.getElementById("check_secret_knowledge").style.display = "block";
			js_advantages_secret_knowledge = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_secret_knowledge.value = 1;
		} else if (js_advantages_secret_knowledge == 1) {
			document.getElementById("check_secret_knowledge").style.display = "none";
			js_advantages_secret_knowledge = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_secret_knowledge.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
   	function clickCharacterAdvantagesAnimalAffinity() {
		if (js_advantages_animal_affinity == 0 && js_advantages_points > 0) {
			document.getElementById("check_animal_affinity").style.display = "block";
			js_advantages_animal_affinity = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_animal_affinity.value = 1;
		} else if (js_advantages_animal_affinity == 1) {
			document.getElementById("check_animal_affinity").style.display = "none";
			js_advantages_animal_affinity = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_animal_affinity.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
   	function clickCharacterAdvantagesSurvivalist() {
		if (js_advantages_survivalist == 0 && js_advantages_points > 0) {
			document.getElementById("check_survivalist").style.display = "block";
			js_advantages_survivalist = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_survivalist.value = 1;
		} else if (js_advantages_survivalist == 1) {
			document.getElementById("check_survivalist").style.display = "none";
			js_advantages_survivalist = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_survivalist.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
   	function clickCharacterAdvantagesNegotiator() {
		if (js_advantages_negotiator == 0 && js_advantages_points > 0) {
			document.getElementById("check_negotiator").style.display = "block";
			js_advantages_negotiator = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_negotiator.value = 1;
		} else if (js_advantages_negotiator == 1) {
			document.getElementById("check_negotiator").style.display = "none";
			js_advantages_negotiator = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_negotiator.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
   	function clickCharacterAdvantagesInvestigator() {
		if (js_advantages_investigator == 0 && js_advantages_points > 0) {
			document.getElementById("check_investigator").style.display = "block";
			js_advantages_investigator = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_investigator.value = 1;
		} else if (js_advantages_investigator == 1) {
			document.getElementById("check_investigator").style.display = "none";
			js_advantages_investigator = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_investigator.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
   	function clickCharacterAdvantagesActor() {
		if (js_advantages_actor == 0 && js_advantages_points > 0) {
			document.getElementById("check_actor").style.display = "block";
			js_advantages_actor = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_actor.value = 1;
		} else if (js_advantages_actor == 1) {
			document.getElementById("check_actor").style.display = "none";
			js_advantages_actor = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_actor.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
   	function clickCharacterAdvantagesCharming() {
		if (js_advantages_charming == 0 && js_advantages_points > 0) {
			document.getElementById("check_charming").style.display = "block";
			js_advantages_charming = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_charming.value = 1;
		} else if (js_advantages_charming == 1) {
			document.getElementById("check_charming").style.display = "none";
			js_advantages_charming = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_charming.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
   	function clickCharacterAdvantagesDeceitful() {
		if (js_advantages_deceitful == 0 && js_advantages_points > 0) {
			document.getElementById("check_deceitful").style.display = "block";
			js_advantages_deceitful = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_deceitful.value = 1;
		} else if (js_advantages_deceitful == 1) {
			document.getElementById("check_deceitful").style.display = "none";
			js_advantages_deceitful = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_deceitful.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}
   	function clickCharacterAdvantagesPersuasive() {
		if (js_advantages_persuasive == 0 && js_advantages_points > 0) {
			document.getElementById("check_persuasive").style.display = "block";
			js_advantages_persuasive = 1;
			js_advantages_points = js_advantages_points - 1;
			document.create_character.php_character_advantages_persuasive.value = 1;
		} else if (js_advantages_persuasive == 1) {
			document.getElementById("check_persuasive").style.display = "none";
			js_advantages_persuasive = 0;
			js_advantages_points = js_advantages_points + 1;
			document.create_character.php_character_advantages_persuasive.value = 0;
		}
		changeCharacterAdvantagesPointsText()
	}

	function changeCharacterAdvantagesPointsText() {
		if (js_advantages_points == 3) {
			document.getElementById("advantages_menu_points").innerHTML = "You may choose 3 feats and abilities that you have";
		} else if (js_advantages_points == 2) {
			document.getElementById("advantages_menu_points").innerHTML = "You may choose 2 more feats and abilities that you have";
		} else if (js_advantages_points == 1) {
			document.getElementById("advantages_menu_points").innerHTML = "You may choose 1 more feat and abilitiy that you have";
		} else if (js_advantages_points == 0) {
			document.getElementById("advantages_menu_points").innerHTML = "You cannot choose more feats and abilities";
		}
	}