<?php
include_once 'includes/dbh.inc.php';
session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/game_style.css">
  <link rel="stylesheet" type="text/css" href="css/back_end_functions.css">
  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Architects+Daughter">
</head>
<body id="gotrp_client_body">
<div id="gotrp_client_body_darkener">
<div class="gotrp_client_wrapper">
  <div id="gotrp_client_grid">

  <div id="subgrid1">
    <div id="character_faceclaim"><div id="character_faceclaim_frame"></div></div>
    <div id="choose_your_persona">
      <button id="character_faceclaim_backward" type="button">Backward</button> <!-- javascript function -->
      <button id="character_faceclaim_forward" type="button">Forward</button> <!-- javascript function -->
      <br>
      <button id="button_character_gender_male" type="button" value="male">Male</button>
      <button id="button_character_gender_female" type="button" value="female">Female</button>
      <br>
      <table id="choose_your_persona_table" border="1">
      <tbody>
      <tr>
      <td>Name:</td>
      <td><input id="character_name" type="text" name="character_name"></td>
      <td id="choose_your_persona_table_house"></td>
      </tr>
      <tr>
      <td>Age:</td>
      <td><input id="character_age" type="text" name="character_age"></td>
      <td>&nbsp;</td>
      </tr>
      <tr>
      <td>Birthday:</td>
      <td><input id="character_birthday" type="text" name="character_birthday"></td>
      <td>&nbsp;</td>
      </tr>
      </tbody>
      </table>

      <br>
      <br>
      <form name="gotrp_client_form_variables">
      <input type="hidden" name="php_character_faceclaim" value="fate_archer">  
      </form>
      <form id="create_character" name="create_character" action="includes/create_character.inc.php" method="POST">
     
      <!-- Character -->
      <input type="hidden" name="php_character_faceclaim" value="fate_archer">
      <input type="hidden" name="php_character_faceclaim_img" value="url('Images/Characters/Apperances/Lannister/Fate_Archer.jpg')">
      <input type="hidden" name="php_character_gender" value="male">

      <!-- Character Origin -->
      <input type="hidden" name="php_character_house" value="lannister">
      <input type="hidden" name="php_character_religion" value="">

      <!-- Character Statistics --> 
      <input type="hidden" name="php_character_advantages_athletic" value="0">
      <input type="hidden" name="php_character_advantages_combat_expertise" value="0">
      <input type="hidden" name="php_character_advantages_iron_will" value="0">
      <input type="hidden" name="php_character_advantages_agile" value="0">
      <input type="hidden" name="php_character_advantages_stealthy" value="0">
      <input type="hidden" name="php_character_advantages_sleight_of_hand" value="0">
      <input type="hidden" name="php_character_advantages_sharpshooter" value="0">
      <input type="hidden" name="php_character_advantages_diligent" value="0">
      <input type="hidden" name="php_character_advantages_cunning" value="0">
      <input type="hidden" name="php_character_advantages_general_knowledge" value="0">
      <input type="hidden" name="php_character_advantages_combat_knowledge" value="0">
      <input type="hidden" name="php_character_advantages_secret_knowledge" value="0">
      <input type="hidden" name="php_character_advantages_animal_affinity" value="0">
      <input type="hidden" name="php_character_advantages_survivalist" value="0">
      <input type="hidden" name="php_character_advantages_negotiator" value="0">
      <input type="hidden" name="php_character_advantages_investigator" value="0">
      <input type="hidden" name="php_character_advantages_actor" value="0">
      <input type="hidden" name="php_character_advantages_charming" value="0">
      <input type="hidden" name="php_character_advantages_deceitful" value="0">
      <input type="hidden" name="php_character_advantages_persuasive" value="0">

      <!-- Character Statistics --> 
      <input type="hidden" name="php_character_statistics_pointstospend" value="10">
      <input type="hidden" name="php_character_statistics_charisma" value="0">
      <input type="hidden" name="php_character_statistics_vigor" value="0">
      <input type="hidden" name="php_character_statistics_strength" value="0">
      <input type="hidden" name="php_character_statistics_dexterity" value="0">
      <input type="hidden" name="php_character_statistics_endurance" value="0">
      <input type="hidden" name="php_character_statistics_intelligence" value="0">
      <input type="hidden" name="php_character_statistics_wisdom" value="0">
      <input type="hidden" name="php_character_statistics_spirit" value="0">
      <input type="hidden" name="php_character_statistics_faith" value="0">
      <input type="hidden" name="php_character_statistics_luck" value="0">

      <!-- Character Apperance --> 
      <input type="" name="php_character_apperance_build" value="">
      <input type="" name="php_character_apperance_height" value="">
      <input type="" name="php_character_apperance_hair" value="">
      <input type="" name="php_character_apperance_eyes" value="">
      <input type="" name="php_character_apperance_generalapperance" value="">
      <input type="" name="php_character_apperance_extra" value="">

      <!-- Character Traits To Be Re-evaluated --> <input type="hidden" name="php_character_traits_pointstospend" value="0">

      <button type="submit" name="submit">Create character</button>
      </form>
    </div> <!-- ENDS div choose_your_persona -->
    </div> <!-- ENDS div subgrid1 -->

    <div id="subgrid2">
        <button id="character_origin" type="button">Origin</button>
        <button id="button_character_advantages" type="button">Advantages</button>
        <button id="character_statistics" type="button">Statistics</button>
        <button id="button_character_personality" type="button">Personality</button>  
        <button id="button_character_apperance" type="button">Apperance</button>
        <div id="menu_character_origin"> <!-- RENAMED FROM choose_your_house DEBUGG -->
          <button id="button_character_house_baratheon" type="button" value="stark">House Baratheon</button>
          <button id="button_character_house_lannister" type="button" value="lannister">House Lannister</button>
          <button id="button_character_house_greyjoy" type="button" value="lannister">House Greyjoy</button>
          <button id="button_character_house_stark" type="button" value="stark">House Stark</button>
          <br>
          <a id="choice_religion_text">Religion: Faith of the Seven</a>
          <button id="choice_religion" type="button"">Change</button>
        
          <div id="character_religion_popup">
            <div id="character_religion_popup_container">
              <div id="character_religion_popup_container_text">
              <p id="character_religion_popup_container_p1">Gods, Demons and Faith</p>
              <p>The Gods are a demonstrable pressence in the world, their devoted servents spread their message. Demons reject the gods and seek to spread anarchy and lust. "I've been all over the world, my boy, and everywhere I go people tell me about "the true God". They all think they've found the right one!" - Salladhor Saan</p>
              <br>
              <p>The Seven, or True Gods as they are called, are the overwhelmingly dominant religion in Westeros. The faith originated six thousand years ago in the continent of Essos, when the God of Seven manifested before the Andal people and led them towards the continent of Westeros, conquering it. They all worship him, the "Seven-faced God", a single deity with seven "aspects" or "faces".</p>
              <br>
              <p>There also is the Old Faith, a dark and mysterious religion worshipped by the Children of the Forest, the non-human original inhabitants of Westeros. This was once the original religion of the continent worshiped for thousands of years, before the invasion of the Andals, who slaughtered the Children of the Forest and cut down the weirwood trees. Now the religion is practised only in the North and Beyond the Wall. </p>
              <br>
              <p>A few choose to worship no gods.</p>
              <br>
              <p>What gods do you follow?</p>
              <br>
              <div id="choice_religion_faithoftheseven"><p>Faith of the Seven<p></div>
              <div id="choice_religion_theoldgods"><p>The Old Gods<p></div>
              <div id="choice_religion_nogods"><p>No Gods<p></div>
              </div>
            </div>
          </div> <!-- ENDS div character_religion_popup -->
        </div> <!-- ENDS div menu_character_origin -->   
        <div id="menu_character_advantages"><?php include_once 'character_create/object_advantages/advantages.php';?></div> 
        <div id="menu_character_statistics"><?php include_once 'character_create/object_statistics/statistics.php';?></div> 
        <div id="menu_character_apperance"><?php include_once 'character_create/object_apperance/apperance.php';?></div> 
        <div id="menu_character_personality"><?php include_once 'character_create/object_personality/personality.php';?></div> 
    </div> <!-- ENDS div subgrid2 -->

  </div> <!-- ENDS id gotrp_client_grid -->
</div> <!-- ENDS div gotrp_cliend_wrapper -->
</div> <!-- ENDS div client_body_darkener --> 

<audio id="audio_button1" src="audio/beep_quarter.mp3"></audio>   

    <link rel="stylesheet" type="text/css" href="character_create/object_apperance/apperance.css">
    <link rel="stylesheet" type="text/css" href="character_create/object_advantages/advantages.css">
    <link rel="stylesheet" type="text/css" href="character_create/object_statistics/statistics.css">
    <link rel="stylesheet" type="text/css" href="character_create/object_personality/personality.css">

    <script type="text/javascript" src="character_create/object_advantages/advantages.js"></script>
    <script type="text/javascript" src="character_create/object_statistics/statistics.js"></script>
    <script type="text/javascript" src="character_create/object_personality/personality.js"></script>

    <script type="text/javascript" src="javascript/characterFaceclaimPicker.js"></script>
    <script type="text/javascript" src="javascript/characterReligionPopup.js"></script>
    <script type="text/javascript" src="javascript/gotrpClientSounds.js"></script>
    <script type="text/javascript">

    document.getElementById("character_origin").addEventListener("click", menuOriginShow);
    document.getElementById("button_character_advantages").addEventListener("click", menuCharacterAdvantagesShow);
    document.getElementById("character_statistics").addEventListener("click", menuCharacterStatisticsShow);
    document.getElementById("button_character_apperance").addEventListener("click", menuCharacterApperanceShow);
    document.getElementById("button_character_personality").addEventListener("click", menuCharacterPersonalityShow);


   
    function menuOriginShow() {
      document.getElementById("menu_character_origin").style.display = "block";
      document.getElementById("menu_character_advantages").style.display = "none";      
      document.getElementById("menu_character_statistics").style.display = "none";
      document.getElementById("menu_character_apperance").style.display = "none";
      document.getElementById("menu_character_personality").style.display = "none";      
    }
    function  menuCharacterAdvantagesShow() {
      document.getElementById("menu_character_origin").style.display = "none";
      document.getElementById("menu_character_advantages").style.display = "block"; 
      document.getElementById("menu_character_statistics").style.display = "none";
      document.getElementById("menu_character_apperance").style.display = "none";
      document.getElementById("menu_character_personality").style.display = "none";   
    }
    function menuCharacterStatisticsShow() {
      document.getElementById("menu_character_origin").style.display = "none";
      document.getElementById("menu_character_advantages").style.display = "none"; 
      document.getElementById("menu_character_statistics").style.display = "block";
      document.getElementById("menu_character_personality").style.display = "none";
      document.getElementById("menu_character_apperance").style.display = "none"; 
    }

    function menuCharacterApperanceShow() {
      document.getElementById("menu_character_origin").style.display = "none";
      document.getElementById("menu_character_advantages").style.display = "none"; 
      document.getElementById("menu_character_statistics").style.display = "none";
      document.getElementById("menu_character_apperance").style.display = "block"; 
      document.getElementById("menu_character_personality").style.display = "none";
    }

    function menuCharacterPersonalityShow() {
      document.getElementById("menu_character_origin").style.display = "none";
      document.getElementById("menu_character_advantages").style.display = "none"; 
      document.getElementById("menu_character_statistics").style.display = "none";
      document.getElementById("menu_character_apperance").style.display = "none"; 
      document.getElementById("menu_character_personality").style.display = "block";
    }


    // Variables for functions

    // Variables for character creation and database
    var js_character_gender;
    var js_character_house;

// BEGIN this gets the values for variable "php_character_house"
    document.getElementById("button_character_house_baratheon").onclick = function(){
      document.getElementById("gotrp_client_body").style.backgroundImage = "url('images/game_client/tomasz-jedruszek-baratheon.jpg')";
      document.getElementById("choose_your_persona_table_house").innerHTML = "Baratheon";
      js_character_house = "baratheon";
      document.create_character.php_character_house.value = js_character_house;
    }
    document.getElementById("button_character_house_lannister").onclick = function(){
      document.getElementById("gotrp_client_body").style.backgroundImage = "url('images/game_client/tomasz-jedruszek-lannister.jpg')";
      document.getElementById("choose_your_persona_table_house").innerHTML = "Lannister";
      js_character_house = "lannister";
      document.create_character.php_character_house.value = js_character_house;
    }
    document.getElementById("button_character_house_greyjoy").onclick = function(){
      document.getElementById("gotrp_client_body").style.backgroundImage = "url('images/game_client/tomasz-jedruszek-greyjoy.jpg')";
      document.getElementById("choose_your_persona_table_house").innerHTML = "Greyjoy";
      js_character_house = "greyjoy";
      document.create_character.php_character_house.value = js_character_house;
    }
    document.getElementById("button_character_house_stark").onclick = function(){
      document.getElementById("gotrp_client_body").style.backgroundImage = "url('images/game_client/tomasz-jedruszek-stark.jpg')";
      document.getElementById("choose_your_persona_table_house").innerHTML = "Stark";
      js_character_house = "stark";
      document.create_character.php_character_house.value = js_character_house;
    }
// END "php_character_house"
// BEGIN this gets the values for variable "php_character_gender"
    document.getElementById("button_character_gender_male").onclick = function(){
      document.getElementById("button_character_gender_male").style.border = "4px solid #2196F3";
      document.getElementById("button_character_gender_female").style.border = "4px solid #161616";
      js_character_gender = "male";
      document.create_character.php_character_gender.value = js_character_gender;
    }
    document.getElementById("button_character_gender_female").onclick = function(){
      document.getElementById("button_character_gender_female").style.border = "4px solid #E91E63";
      document.getElementById("button_character_gender_male").style.border = "4px solid #161616";
      js_character_gender = "female";
      document.create_character.php_character_gender.value = js_character_gender;
    }
// END "php_character_gender"
// BEGIN this gets the values for variable "php_character_religion"

//Momentary Scroll Fix
document.getElementById("character_origin").addEventListener("click", function() {fixScroll(0);});
document.getElementById("button_character_advantages").addEventListener("click", function() {fixScroll(1);});
document.getElementById("character_statistics").addEventListener("click", function() {fixScroll(2);});
document.getElementById("button_character_apperance").addEventListener("click", function() {fixScroll(3);});
document.getElementById("button_character_personality").addEventListener("click", function() {fixScroll(4);});

  function fixScroll (fix) {
    if (fix == 0 || fix == 2 || fix == 3 || fix == 4) {
      document.getElementById("gotrp_client_grid").style.height = "100vh";
    } else if (fix == 1) {
      document.getElementById("gotrp_client_grid").style.height = "100%";
    }
  }
    </script>

</body>
</html>