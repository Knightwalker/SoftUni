document.getElementById("choice_religion").addEventListener("click", openCharacterReligionPopupMenu);

document.getElementById("choice_religion_faithoftheseven").addEventListener("mouseover", selectCharacterReligionFaithoftheseven);
document.getElementById("choice_religion_faithoftheseven").addEventListener("mouseout", deselectCharacterReligionFaithoftheseven);
document.getElementById("choice_religion_faithoftheseven").addEventListener("click", choiceReligionFaithoftheseven);
document.getElementById("choice_religion_faithoftheseven").addEventListener("click", closeCharacterReligionPopupMenu);
// ---------- ---------- ---------- ---------- ----------   
document.getElementById("choice_religion_theoldgods").addEventListener("mouseover", selectCharacterReligionTheoldgods);
document.getElementById("choice_religion_theoldgods").addEventListener("mouseout", deselectCharacterReligionTheoldgods);
document.getElementById("choice_religion_theoldgods").addEventListener("click", choiceReligionTheoldgods);
document.getElementById("choice_religion_theoldgods").addEventListener("click", closeCharacterReligionPopupMenu);
// ---------- ---------- ---------- ---------- ----------   
document.getElementById("choice_religion_nogods").addEventListener("mouseover", selectCharacterReligionNogods);
document.getElementById("choice_religion_nogods").addEventListener("mouseout", deselectCharacterReligionNogods);
document.getElementById("choice_religion_nogods").addEventListener("click", choiceReligionNogods);
document.getElementById("choice_religion_nogods").addEventListener("click", closeCharacterReligionPopupMenu);

// BEGIN FUNCTIONS for ID "character_religion_popup"
    function selectCharacterReligionFaithoftheseven() {
      document.getElementById("choice_religion_faithoftheseven").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    }
    function deselectCharacterReligionFaithoftheseven() {
      document.getElementById("choice_religion_faithoftheseven").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function selectCharacterReligionTheoldgods() {
      document.getElementById("choice_religion_theoldgods").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    }
    function deselectCharacterReligionTheoldgods() {
      document.getElementById("choice_religion_theoldgods").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    function selectCharacterReligionNogods() {
      document.getElementById("choice_religion_nogods").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    }
    function deselectCharacterReligionNogods() {
      document.getElementById("choice_religion_nogods").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
// ---------- ---------- ---------- ---------- ----------    
    function openCharacterReligionPopupMenu() {
      document.getElementById("gotrp_client_body_darkener").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      document.getElementById("character_religion_popup").style.display = "block";
    }
    function closeCharacterReligionPopupMenu() {
      document.getElementById("gotrp_client_body_darkener").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      document.getElementById("character_religion_popup").style.display = "none";
    }
// ---------- ---------- ---------- ---------- ---------- 
    function choiceReligionFaithoftheseven(){
      document.getElementById("choice_religion_text").innerHTML = "Religion: Faith of the Seven";
      document.create_character.php_character_religion.value = "faithoftheseven";
    }
    function choiceReligionTheoldgods(){
      document.getElementById("choice_religion_text").innerHTML = "Religion: The Old Gods";
      document.create_character.php_character_religion.value = "theoldgods";
    }
    function choiceReligionNogods(){
      document.getElementById("choice_religion_text").innerHTML = "Religion: No Gods";
      document.create_character.php_character_religion.value = "nogods";
    }
// END FUNCTIONS for ID "character_religion_popup"