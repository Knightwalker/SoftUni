<?php
?>

<table id="character_traits_points">
<tbody>
<tr>	
<td>Points Remaining</td>
</tr>
<tr>
<td id="character_traits_table_pointstospend">0<td>
</tr>
</tbody>
</table>

<br>

<table id="character_traits_table">
<tbody>
<tr>
<td colspan="3">1. The positive traits</td>
</tr>
<tr>
<td><b>Enhanced Strength (+3):</b> Your character is slightly stronger than other characters when it comes to physical strength.
<p><b>Explanation:</b> One extra starting point in the strength stat.</p></td>
<td class="characterstatistics_table_column4"><button id="plusEnhancedStrength">+</button></td>
<td class="characterstatistics_table_column5"><button id="minusEnhancedStrength">-</button></td>  
</tr>
<tr>
<td>Strength</td>
<td class="characterstatistics_table_column4"><button id="plusStrength">+</button></td>
<td class="characterstatistics_table_column5"><button id="minusStrength">-</button></td>
</tr>
<tr>
<td>Dexterity</td>
<td class="characterstatistics_table_column4"><button id="plusDexterity">+</button></td>
<td class="characterstatistics_table_column5"><button id="minusDexterity">-</button></td>
</tr>
<tr>
<td>Endurance</td>
<td class="characterstatistics_table_column4"><button id="plusEndurance">+</button></td>
<td class="characterstatistics_table_column5"><button id="minusEndurance">-</button></td>
</tr>
<tr>
<td>Intelligence</td>
<td class="characterstatistics_table_column4"><button id="plusIntelligence">+</button></td>
<td class="characterstatistics_table_column5"><button id="minusIntelligence">-</button></td>
</tr>
<tr>
<td>Wisdom</td>
<td class="characterstatistics_table_column4"><button id="plusWisdom">+</button></td>
<td class="characterstatistics_table_column5"><button id="minusWisdom">-</button></td>
</tr>
<tr>
<td>Spirit</td>
<td class="characterstatistics_table_column4"><button id="plusSpirit">+</button></td>
<td class="characterstatistics_table_column5"><button id="minusSpirit">-</button></td>
</tbody>
</table>



<style>
#character_traits_points {
width: 500px;
height: 20px;
line-height: 20px;
border: 1px solid #000;
}

#character_traits_points tr {
border-bottom: 1px solid #000;
}

#character_traits_table {
width: 500px;
height: 20px;
line-height: 20px;
border: 1px solid #000;
}
#character_traits_table td {
border: 1px solid #000;
}

.character_traits_table_column4, .character_traits_table_column5 {
width: 20px;	
}
</style>



 <script type="text/javascript">

document.getElementById("plusVigor").addEventListener("click", function() {Limbo_CharacterStatistics('plusVigor');});
document.getElementById("minusVigor").addEventListener("click", function() {Limbo_CharacterStatistics('minusVigor');});
document.getElementById("plusStrength").addEventListener("click", function() {Limbo_CharacterStatistics('plusStrength');});
document.getElementById("minusStrength").addEventListener("click", function() {Limbo_CharacterStatistics('minusStrength');});
document.getElementById("plusDexterity").addEventListener("click", function() {Limbo_CharacterStatistics('plusDexterity');});
document.getElementById("minusDexterity").addEventListener("click", function() {Limbo_CharacterStatistics('minusDexterity');});
document.getElementById("plusEndurance").addEventListener("click", function() {Limbo_CharacterStatistics('plusEndurance');});
document.getElementById("minusEndurance").addEventListener("click", function() {Limbo_CharacterStatistics('minusEndurance');});
document.getElementById("plusIntelligence").addEventListener("click", function() {Limbo_CharacterStatistics('plusIntelligence');});
document.getElementById("minusIntelligence").addEventListener("click", function() {Limbo_CharacterStatistics('minusIntelligence');});
document.getElementById("plusWisdom").addEventListener("click", function() {Limbo_CharacterStatistics('plusWisdom');});
document.getElementById("minusWisdom").addEventListener("click", function() {Limbo_CharacterStatistics('minusWisdom');});
document.getElementById("plusSpirit").addEventListener("click", function() {Limbo_CharacterStatistics('plusSpirit');});
document.getElementById("minusSpirit").addEventListener("click", function() {Limbo_CharacterStatistics('minusSpirit');});
document.getElementById("plusFaith").addEventListener("click", function() {Limbo_CharacterStatistics('plusFaith');});
document.getElementById("minusFaith").addEventListener("click", function() {Limbo_CharacterStatistics('minusFaith');});
document.getElementById("plusLuck").addEventListener("click", function() {Limbo_CharacterStatistics('plusLuck');});
document.getElementById("minusLuck").addEventListener("click", function() {Limbo_CharacterStatistics('minusLuck');});


function Limbo_CharacterStatistics(param) {

	var local_js_character_statistics = param;  // This gets us values from passed parameters
	var js_limbo_calculator = Number(0);
    var js_limbo_character_pointstospend = Number(document.create_character.php_character_statistics_pointstospend.value); 
    var js_limbo_character_vigor = Number(document.create_character.php_character_statistics_vigor.value);
    var js_limbo_character_strength = Number(document.create_character.php_character_statistics_strength.value);
    var js_limbo_character_dexterity = Number(document.create_character.php_character_statistics_dexterity.value);
    var js_limbo_character_endurance = Number(document.create_character.php_character_statistics_endurance.value);
    var js_limbo_character_intelligence = Number(document.create_character.php_character_statistics_intelligence.value);
    var js_limbo_character_wisdom = Number(document.create_character.php_character_statistics_wisdom.value);
    var js_limbo_character_spirit = Number(document.create_character.php_character_statistics_spirit.value);
    var js_limbo_character_faith = Number(document.create_character.php_character_statistics_faith.value);
    var js_limbo_character_luck = Number(document.create_character.php_character_statistics_luck.value);


    if (param == "plusVigor") {
        if  (!(js_limbo_character_pointstospend <= 0)) {
            js_limbo_calculator = js_limbo_character_vigor + 1;
            document.create_character.php_character_statistics_vigor.value = js_limbo_calculator;
            document.getElementById("characterstatistics_table_vigor").innerHTML = js_limbo_calculator;

            var js_lust_character_pointstospend = js_limbo_character_pointstospend - 1;
            document.create_character.php_character_statistics_pointstospend.value = js_lust_character_pointstospend;
            document.getElementById("characterstatistics_table_pointstospend").innerHTML = js_lust_character_pointstospend;
        }
    } else if (param == "minusVigor") {
        if  (!(js_limbo_character_vigor <= 0)) {
            js_limbo_calculator = js_limbo_character_vigor - 1;
            document.create_character.php_character_statistics_vigor.value = js_limbo_calculator;
            document.getElementById("characterstatistics_table_vigor").innerHTML = js_limbo_calculator;

            var js_lust_character_pointstospend = js_limbo_character_pointstospend + 1;
            document.create_character.php_character_statistics_pointstospend.value = js_lust_character_pointstospend;
            document.getElementById("characterstatistics_table_pointstospend").innerHTML = js_lust_character_pointstospend;
        }    
    } else if (param == "plusStrength") {
		if  (!(js_limbo_character_pointstospend <= 0)) {
			js_limbo_calculator = js_limbo_character_strength + 1;
        	document.create_character.php_character_statistics_strength.value = js_limbo_calculator;
            document.getElementById("characterstatistics_table_strength").innerHTML = js_limbo_calculator;

            var js_lust_character_pointstospend = js_limbo_character_pointstospend - 1;
            document.create_character.php_character_statistics_pointstospend.value = js_lust_character_pointstospend;
            document.getElementById("characterstatistics_table_pointstospend").innerHTML = js_lust_character_pointstospend;
		}
    } else if (param == "minusStrength") {
		if  (!(js_limbo_character_strength <= 0)) {
			js_limbo_calculator = js_limbo_character_strength - 1;
        	document.create_character.php_character_statistics_strength.value = js_limbo_calculator;
            document.getElementById("characterstatistics_table_strength").innerHTML = js_limbo_calculator;

            var js_lust_character_pointstospend = js_limbo_character_pointstospend + 1;
            document.create_character.php_character_statistics_pointstospend.value = js_lust_character_pointstospend;
            document.getElementById("characterstatistics_table_pointstospend").innerHTML = js_lust_character_pointstospend;
		} 
    } else if (param == "plusDexterity") {
		if  (!(js_limbo_character_pointstospend <= 0)) {
			js_limbo_calculator = js_limbo_character_dexterity + 1;
        	document.create_character.php_character_statistics_dexterity.value = js_limbo_calculator;
            document.getElementById("characterstatistics_table_dexterity").innerHTML = js_limbo_calculator;

            var js_lust_character_pointstospend = js_limbo_character_pointstospend - 1;
            document.create_character.php_character_statistics_pointstospend.value = js_lust_character_pointstospend;
            document.getElementById("characterstatistics_table_pointstospend").innerHTML = js_lust_character_pointstospend;
		}
	} else if (param == "minusDexterity") {
		if  (!(js_limbo_character_dexterity <= 0)) {
			js_limbo_calculator = js_limbo_character_dexterity - 1;
        	document.create_character.php_character_statistics_dexterity.value = js_limbo_calculator;
            document.getElementById("characterstatistics_table_dexterity").innerHTML = js_limbo_calculator;

            var js_lust_character_pointstospend = js_limbo_character_pointstospend + 1;
            document.create_character.php_character_statistics_pointstospend.value = js_lust_character_pointstospend;
            document.getElementById("characterstatistics_table_pointstospend").innerHTML = js_lust_character_pointstospend;
		}
    } else if (param == "plusEndurance") {
        if  (!(js_limbo_character_pointstospend <= 0)) {
            js_limbo_calculator = js_limbo_character_endurance + 1;
            document.create_character.php_character_statistics_endurance.value = js_limbo_calculator;
            document.getElementById("characterstatistics_table_endurance").innerHTML = js_limbo_calculator;

            var js_lust_character_pointstospend = js_limbo_character_pointstospend - 1;
            document.create_character.php_character_statistics_pointstospend.value = js_lust_character_pointstospend;
            document.getElementById("characterstatistics_table_pointstospend").innerHTML = js_lust_character_pointstospend;
        }
    } else if (param == "minusEndurance") {
        if  (!(js_limbo_character_endurance <= 0)) {
            js_limbo_calculator = js_limbo_character_endurance - 1;
            document.create_character.php_character_statistics_endurance.value = js_limbo_calculator;
            document.getElementById("characterstatistics_table_endurance").innerHTML = js_limbo_calculator;

            var js_lust_character_pointstospend = js_limbo_character_pointstospend + 1;
            document.create_character.php_character_statistics_pointstospend.value = js_lust_character_pointstospend;
            document.getElementById("characterstatistics_table_pointstospend").innerHTML = js_lust_character_pointstospend;
        }
    } else if (param == "plusIntelligence") {
        if  (!(js_limbo_character_pointstospend <= 0)) {
            js_limbo_calculator = js_limbo_character_intelligence + 1;
            document.create_character.php_character_statistics_intelligence.value = js_limbo_calculator;
            document.getElementById("characterstatistics_table_intelligence").innerHTML = js_limbo_calculator;

            var js_lust_character_pointstospend = js_limbo_character_pointstospend - 1;
            document.create_character.php_character_statistics_pointstospend.value = js_lust_character_pointstospend;
            document.getElementById("characterstatistics_table_pointstospend").innerHTML = js_lust_character_pointstospend;
        }
    } else if (param == "minusIntelligence") {
        if  (!(js_limbo_character_intelligence <= 0)) {
            js_limbo_calculator = js_limbo_character_intelligence - 1;
            document.create_character.php_character_statistics_intelligence.value = js_limbo_calculator;
            document.getElementById("characterstatistics_table_intelligence").innerHTML = js_limbo_calculator;

            var js_lust_character_pointstospend = js_limbo_character_pointstospend + 1;
            document.create_character.php_character_statistics_pointstospend.value = js_lust_character_pointstospend;
            document.getElementById("characterstatistics_table_pointstospend").innerHTML = js_lust_character_pointstospend;
        }
    } else if (param == "plusWisdom") {
        if  (!(js_limbo_character_pointstospend <= 0)) {
            js_limbo_calculator = js_limbo_character_wisdom + 1;
            document.create_character.php_character_statistics_wisdom.value = js_limbo_calculator;
            document.getElementById("characterstatistics_table_wisdom").innerHTML = js_limbo_calculator;

            var js_lust_character_pointstospend = js_limbo_character_pointstospend - 1;
            document.create_character.php_character_statistics_pointstospend.value = js_lust_character_pointstospend;
            document.getElementById("characterstatistics_table_pointstospend").innerHTML = js_lust_character_pointstospend;
        }
    } else if (param == "minusWisdom") {
        if  (!(js_limbo_character_wisdom <= 0)) {
            js_limbo_calculator = js_limbo_character_wisdom - 1;
            document.create_character.php_character_statistics_wisdom.value = js_limbo_calculator;
            document.getElementById("characterstatistics_table_wisdom").innerHTML = js_limbo_calculator;

            var js_lust_character_pointstospend = js_limbo_character_pointstospend + 1;
            document.create_character.php_character_statistics_pointstospend.value = js_lust_character_pointstospend;
            document.getElementById("characterstatistics_table_pointstospend").innerHTML = js_lust_character_pointstospend;
        }
    } else if (param == "plusSpirit") {
        if  (!(js_limbo_character_pointstospend <= 0)) {
            js_limbo_calculator = js_limbo_character_spirit + 1;
            document.create_character.php_character_statistics_spirit.value = js_limbo_calculator;
            document.getElementById("characterstatistics_table_spirit").innerHTML = js_limbo_calculator;

            var js_lust_character_pointstospend = js_limbo_character_pointstospend - 1;
            document.create_character.php_character_statistics_pointstospend.value = js_lust_character_pointstospend;
            document.getElementById("characterstatistics_table_pointstospend").innerHTML = js_lust_character_pointstospend;
        }
    } else if (param == "minusSpirit") {
        if  (!(js_limbo_character_spirit <= 0)) {
            js_limbo_calculator = js_limbo_character_spirit - 1;
            document.create_character.php_character_statistics_spirit.value = js_limbo_calculator;
            document.getElementById("characterstatistics_table_spirit").innerHTML = js_limbo_calculator;

            var js_lust_character_pointstospend = js_limbo_character_pointstospend + 1;
            document.create_character.php_character_statistics_pointstospend.value = js_lust_character_pointstospend;
            document.getElementById("characterstatistics_table_pointstospend").innerHTML = js_lust_character_pointstospend;
        }
    } else if (param == "plusFaith") {
        if  (!(js_limbo_character_pointstospend <= 0)) {
            js_limbo_calculator = js_limbo_character_faith + 1;
            document.create_character.php_character_statistics_faith.value = js_limbo_calculator;
            document.getElementById("characterstatistics_table_faith").innerHTML = js_limbo_calculator;

            var js_lust_character_pointstospend = js_limbo_character_pointstospend - 1;
            document.create_character.php_character_statistics_pointstospend.value = js_lust_character_pointstospend;
            document.getElementById("characterstatistics_table_pointstospend").innerHTML = js_lust_character_pointstospend;
        }
    } else if (param == "minusFaith") {
        if  (!(js_limbo_character_faith <= 0)) {
            js_limbo_calculator = js_limbo_character_faith - 1;
            document.create_character.php_character_statistics_faith.value = js_limbo_calculator;
            document.getElementById("characterstatistics_table_faith").innerHTML = js_limbo_calculator;

            var js_lust_character_pointstospend = js_limbo_character_pointstospend + 1;
            document.create_character.php_character_statistics_pointstospend.value = js_lust_character_pointstospend;
            document.getElementById("characterstatistics_table_pointstospend").innerHTML = js_lust_character_pointstospend;
        }
    } else if (param == "plusLuck") {
        if  (!(js_limbo_character_pointstospend <= 0)) {
            js_limbo_calculator = js_limbo_character_luck + 1;
            document.create_character.php_character_statistics_luck.value = js_limbo_calculator;
            document.getElementById("characterstatistics_table_luck").innerHTML = js_limbo_calculator;

            var js_lust_character_pointstospend = js_limbo_character_pointstospend - 1;
            document.create_character.php_character_statistics_pointstospend.value = js_lust_character_pointstospend;
            document.getElementById("characterstatistics_table_pointstospend").innerHTML = js_lust_character_pointstospend;
        }
    } else if (param == "minusLuck") {
        if  (!(js_limbo_character_luck <= 0)) {
            js_limbo_calculator = js_limbo_character_luck - 1;
            document.create_character.php_character_statistics_luck.value = js_limbo_calculator;
            document.getElementById("characterstatistics_table_luck").innerHTML = js_limbo_calculator;

            var js_lust_character_pointstospend = js_limbo_character_pointstospend + 1;
            document.create_character.php_character_statistics_pointstospend.value = js_lust_character_pointstospend;
            document.getElementById("characterstatistics_table_pointstospend").innerHTML = js_lust_character_pointstospend;
        }
	}

} // END FUNCTION Limbo_CharacterStatistics

 </script>