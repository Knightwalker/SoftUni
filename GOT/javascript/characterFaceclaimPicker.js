// This Presets variables for gotrp_client.php
document.getElementById("character_faceclaim").style.backgroundImage = "url('Images/Characters/Apperances/Lannister/Fate_Archer.jpg')";
document.create_character.php_character_faceclaim.value = "fate_archer";

// This Calls the Function below and PASS Parameters from gotrp_client.php
document.getElementById("character_faceclaim_backward").addEventListener("click", function() {Limbo_CharacterFaceclaimPicker('backward');});
document.getElementById("character_faceclaim_forward").addEventListener("click", function() {Limbo_CharacterFaceclaimPicker('forward');});
document.getElementById("button_character_gender_male").addEventListener("click", function() {Limbo_CharacterFaceclaimPicker('male');});
document.getElementById("button_character_gender_female").addEventListener("click", function() {Limbo_CharacterFaceclaimPicker('female');});
document.getElementById("button_character_house_baratheon").addEventListener("click", function() {Limbo_CharacterFaceclaimPicker('house_baratheon');});
document.getElementById("button_character_house_lannister").addEventListener("click", function() {Limbo_CharacterFaceclaimPicker('house_lannister');});
document.getElementById("button_character_house_greyjoy").addEventListener("click", function() {Limbo_CharacterFaceclaimPicker('house_greyjoy');});
document.getElementById("button_character_house_stark").addEventListener("click", function() {Limbo_CharacterFaceclaimPicker('house_stark');});

function Limbo_CharacterFaceclaimPicker(param) {

  var local_js_character_faceclaimpicker = param;  // This gets us either "forward" or "backward" value from passed parameters
  var local_js_character_faceclaim = document.create_character.php_character_faceclaim.value;
  var local_js_character_faceclaim_img = document.create_character.php_character_faceclaim_img.value;
  var local_js_character_house = document.create_character.php_character_house.value;
  var local_js_character_gender = document.create_character.php_character_gender.value;

// We can change Faceclaims for house Baratheon here
  var local_js_baratheon_male_slot1 = "op_law')";
  var local_js_baratheon_male_slot2 = "fate_lancer";
  var local_js_baratheon_male_slot3 = "berserk_guts";
  var local_js_baratheon_male_slot4 = "original_artsbycarlos";
  var local_js_baratheon_male_slot1_img = "url('Images/Characters/Apperances/Baratheon/OP_Law.jpg')";
  var local_js_baratheon_male_slot2_img = "url('Images/Characters/Apperances/Baratheon/Fate_Lancer.jpg')";
  var local_js_baratheon_male_slot3_img = "url('Images/Characters/Apperances/Baratheon/Berserk_Guts.jpg')";
  var local_js_baratheon_male_slot4_img = "url('Images/Characters/Apperances/Baratheon/Original_Artsbycarlos.jpg')";
  var local_js_baratheon_female_slot1 = "op_lawf')";
  var local_js_baratheon_female_slot2 = "wonder_woman";
  var local_js_baratheon_female_slot3 = "boa_hancock";
  var local_js_baratheon_female_slot4 = "nico_robin";
  var local_js_baratheon_female_slot1_img = "url('Images/Characters/Apperances/Baratheon/OP_LawF.jpg')";
  var local_js_baratheon_female_slot2_img = "url('Images/Characters/Apperances/Baratheon/Wonder_Woman.jpg')";
  var local_js_baratheon_female_slot3_img = "url('Images/Characters/Apperances/Baratheon/Boa_Hancock.jpg')";
  var local_js_baratheon_female_slot4_img = "url('Images/Characters/Apperances/Baratheon/Nico_Robin.jpg')";

 // We can change Faceclaims for house Lannister here
  var local_js_lannister_male_slot1 = "fate_archer";
  var local_js_lannister_male_slot2 = "fate_saberm";
  var local_js_lannister_male_slot3 = "FMA_Edward";
  var local_js_lannister_male_slot4 = "fate_gilgamesh";
  var local_js_lannister_male_slot1_img = "url('Images/Characters/Apperances/Lannister/Fate_Archer.jpg')";
  var local_js_lannister_male_slot2_img = "url('Images/Characters/Apperances/Lannister/Fate_SaberM.jpg')";
  var local_js_lannister_male_slot3_img = "url('Images/Characters/Apperances/Lannister/FMA_Edward.jpg')";
  var local_js_lannister_male_slot4_img = "url('Images/Characters/Apperances/Lannister/Fate_Gilgamesh.jpg')";
  var local_js_lannister_female_slot1 = "fate_saber";
  var local_js_lannister_female_slot2 = "sao_asuna";
  var local_js_lannister_female_slot3 = "witcher_ciri";
  var local_js_lannister_female_slot4 = "lol_katarina";
  var local_js_lannister_female_slot1_img = "url('Images/Characters/Apperances/Lannister/Fate_Saber.jpg')";
  var local_js_lannister_female_slot2_img = "url('Images/Characters/Apperances/Lannister/SAO_Asuna.jpg')";
  var local_js_lannister_female_slot3_img = "url('Images/Characters/Apperances/Lannister/Witcher_Ciri.jpg')";
  var local_js_lannister_female_slot4_img = "url('Images/Characters/Apperances/Lannister/LOL_Katarina.jpg')";

 // We can change Faceclaims for house Greyjoy here
  var local_js_greyjoy_male_slot1 = "eren_jaeger";
  var local_js_greyjoy_male_slot2 = "squall_leonhart";
  var local_js_greyjoy_male_slot3 = "sengoku_musou";
  var local_js_greyjoy_male_slot4 = "witcher_geralt";
  var local_js_greyjoy_male_slot1_img = "url('Images/Characters/Apperances/Greyjoy/Eren_Jaeger.jpg')";
  var local_js_greyjoy_male_slot2_img = "url('Images/Characters/Apperances/Greyjoy/Squall_Leonhart.jpg')";
  var local_js_greyjoy_male_slot3_img = "url('Images/Characters/Apperances/Greyjoy/Sengoku_Musou.jpg')";
  var local_js_greyjoy_male_slot4_img = "url('Images/Characters/Apperances/Greyjoy/Witcher_Geralt.jpg')";
  var local_js_greyjoy_female_slot1 = "lara_croft";
  var local_js_greyjoy_female_slot2 = "thelastofus_ellie";
  var local_js_greyjoy_female_slot3 = "op_nami";
  var local_js_greyjoy_female_slot4 = "aloy_horizon";
  var local_js_greyjoy_female_slot1_img = "url('Images/Characters/Apperances/Greyjoy/Lara_Croft.jpg')";
  var local_js_greyjoy_female_slot2_img = "url('Images/Characters/Apperances/Greyjoy/Thelastofus_Ellie.jpg')";
  var local_js_greyjoy_female_slot3_img = "url('Images/Characters/Apperances/Greyjoy/OP_Nami.jpg')";
  var local_js_greyjoy_female_slot4_img = "url('Images/Characters/Apperances/Greyjoy/Aloy_Horizon.jpg')";

 // We can change Faceclaims for house Stark here WIP
  var local_js_stark_male_slot1 = "levi_ackerman";
  var local_js_stark_male_slot2 = "noctis_caelum";
  var local_js_stark_male_slot3 = "zack_fair";
  var local_js_stark_male_slot4 = "dmc_dante";
  var local_js_stark_male_slot1_img = "url('Images/Characters/Apperances/Stark/Levi_Ackerman.jpg')";
  var local_js_stark_male_slot2_img = "url('Images/Characters/Apperances/Stark/Noctis_Caelum.jpg')";
  var local_js_stark_male_slot3_img = "url('Images/Characters/Apperances/Stark/Zack_Fair.jpg')";
  var local_js_stark_male_slot4_img = "url('Images/Characters/Apperances/Stark/DMC_Dante.jpg')";
  var local_js_stark_female_slot1 = "mikasa_ackerman";
  var local_js_stark_female_slot2 = "ggo_kirito";
  var local_js_stark_female_slot3 = "witcher_yennefer";
  var local_js_stark_female_slot4 = "nier_yorhaa2";
  var local_js_stark_female_slot1_img = "url('Images/Characters/Apperances/Stark/Mikasa_Ackerman.jpg')";
  var local_js_stark_female_slot2_img = "url('Images/Characters/Apperances/Stark/GGO_Kirito.jpg')";
  var local_js_stark_female_slot3_img = "url('Images/Characters/Apperances/Stark/Witcher_Yennefer.jpg')";
  var local_js_stark_female_slot4_img = "url('Images/Characters/Apperances/Stark/Nier_Yorhaa2.jpg')";

  if (param == "forward" || param == "backward") {
    lust_CharacterFaceclaimPicker();
  } else if (param == "male") {
    lust_CharacterGenderMaleFaceclaimReset();
  } else if (param == "female") {
    lust_CharacterGenderFemaleFaceclaimReset();
  } else if (param == "house_baratheon") {
    lust_CharacterHouseBaratheonFaceclaimReset();
  } else if (param == "house_lannister") {
    lust_CharacterHouseLannisterFaceclaimReset();
  } else if (param == "house_greyjoy") {
    lust_CharacterHouseGreyjoyFaceclaimReset();
  } else if (param == "house_stark") {
    lust_CharacterHouseStarkFaceclaimReset();
  }

    function lust_CharacterFaceclaimPicker() { 
      if (local_js_character_house == "baratheon" && local_js_character_gender == "male" && local_js_character_faceclaimpicker == "forward") {
        if (local_js_character_faceclaim == local_js_baratheon_male_slot1) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_male_slot2_img;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_male_slot2 
        } else if (local_js_character_faceclaim == local_js_baratheon_male_slot2) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_male_slot3_img;;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_male_slot3; 
        } else if (local_js_character_faceclaim == local_js_baratheon_male_slot3) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_male_slot4_img;;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_male_slot4;
        } else {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_male_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_male_slot1;
        }
      } else if (local_js_character_house == "baratheon" && local_js_character_gender == "male" && local_js_character_faceclaimpicker == "backward") {
        if (local_js_character_faceclaim == local_js_baratheon_male_slot4) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_male_slot3_img;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_male_slot3 
        } else if (local_js_character_faceclaim == local_js_baratheon_male_slot3) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_male_slot2_img;;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_male_slot2; 
        } else if (local_js_character_faceclaim == local_js_baratheon_male_slot2) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_male_slot1_img;;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_male_slot1;
        } else {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_male_slot4_img;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_male_slot4;
        }
      } else if (local_js_character_house == "baratheon" && local_js_character_gender == "female" && local_js_character_faceclaimpicker == "forward") {
        if (local_js_character_faceclaim == local_js_baratheon_female_slot1) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_female_slot2_img;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_female_slot2;
        } else if (local_js_character_faceclaim == local_js_baratheon_female_slot2) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_female_slot3_img;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_female_slot3;
        } else if (local_js_character_faceclaim == local_js_baratheon_female_slot3) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_female_slot4_img;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_female_slot4;
        } else {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_female_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_female_slot1;
        }
      } else if (local_js_character_house == "baratheon" && local_js_character_gender == "female" && local_js_character_faceclaimpicker == "backward") {
        if (local_js_character_faceclaim == local_js_baratheon_female_slot4) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_female_slot3_img;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_female_slot3;
        } else if (local_js_character_faceclaim == local_js_baratheon_female_slot3) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_female_slot2_img;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_female_slot2;
        } else if (local_js_character_faceclaim == local_js_baratheon_female_slot2) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_female_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_female_slot1;
        } else {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_female_slot4_img;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_female_slot4;
        }
      } else if (local_js_character_house == "lannister" && local_js_character_gender == "male" && local_js_character_faceclaimpicker == "forward") {
        if (local_js_character_faceclaim == local_js_lannister_male_slot1) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_male_slot2_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_male_slot2;
        } else if (local_js_character_faceclaim == local_js_lannister_male_slot2) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_male_slot3_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_male_slot3;
        } else if (local_js_character_faceclaim == local_js_lannister_male_slot3) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_male_slot4_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_male_slot4;
        } else {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_male_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_male_slot1;
        }
      } else if (local_js_character_house == "lannister" && local_js_character_gender == "male" && local_js_character_faceclaimpicker == "backward") {
        if (local_js_character_faceclaim == local_js_lannister_male_slot4) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_male_slot3_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_male_slot3;
        } else if (local_js_character_faceclaim == local_js_lannister_male_slot3) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_male_slot2_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_male_slot2;
        } else if (local_js_character_faceclaim == local_js_lannister_male_slot2) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_male_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_male_slot1;
        } else {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_male_slot4_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_male_slot4;
        }
      } else if (local_js_character_house == "lannister" && local_js_character_gender == "female" && local_js_character_faceclaimpicker == "forward") {
        if (local_js_character_faceclaim == local_js_lannister_female_slot1) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_female_slot2_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_female_slot2;
        } else if (local_js_character_faceclaim == local_js_lannister_female_slot2) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_female_slot3_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_female_slot3;
        } else if (local_js_character_faceclaim == local_js_lannister_female_slot3) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_female_slot4_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_female_slot4;
        } else {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_female_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_female_slot1;
        }
      } else if (local_js_character_house == "lannister" && local_js_character_gender == "female" && local_js_character_faceclaimpicker == "backward") {
        if (local_js_character_faceclaim == local_js_lannister_female_slot4) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_female_slot3_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_female_slot3;
        } else if (local_js_character_faceclaim == local_js_lannister_female_slot3) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_female_slot2_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_female_slot2;
        } else if (local_js_character_faceclaim == local_js_lannister_female_slot2) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_female_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_female_slot1;
        } else {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_female_slot4_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_female_slot4;
        }
      } else if (local_js_character_house == "greyjoy" && local_js_character_gender == "male" && local_js_character_faceclaimpicker == "forward") {
        if (local_js_character_faceclaim == local_js_greyjoy_male_slot1) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_male_slot2_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_male_slot2;
        } else if (local_js_character_faceclaim == local_js_greyjoy_male_slot2) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_male_slot3_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_male_slot3;
        } else if (local_js_character_faceclaim == local_js_greyjoy_male_slot3) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_male_slot4_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_male_slot4;
        } else {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_male_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_male_slot1;
        }
      } else if (local_js_character_house == "greyjoy" && local_js_character_gender == "male" && local_js_character_faceclaimpicker == "backward") {
        if (local_js_character_faceclaim == local_js_greyjoy_male_slot4) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_male_slot3_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_male_slot3;
        } else if (local_js_character_faceclaim == local_js_greyjoy_male_slot3) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_male_slot2_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_male_slot2;
        } else if (local_js_character_faceclaim == local_js_greyjoy_male_slot2) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_male_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_male_slot1;
        } else {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_male_slot4_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_male_slot4;
        }
      } else if (local_js_character_house == "greyjoy" && local_js_character_gender == "female" && local_js_character_faceclaimpicker == "forward") {
        if (local_js_character_faceclaim == local_js_greyjoy_female_slot1) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_female_slot2_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_female_slot2;
        } else if (local_js_character_faceclaim == local_js_greyjoy_female_slot2) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_female_slot3_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_female_slot3;
        } else if (local_js_character_faceclaim == local_js_greyjoy_female_slot3) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_female_slot4_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_female_slot4;
        } else {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_female_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_female_slot1;
        }
      } else if (local_js_character_house == "greyjoy" && local_js_character_gender == "female" && local_js_character_faceclaimpicker == "backward") {
        if (local_js_character_faceclaim == local_js_greyjoy_female_slot4) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_female_slot3_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_female_slot3;
        } else if (local_js_character_faceclaim == local_js_greyjoy_female_slot3) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_female_slot2_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_female_slot2;
        } else if (local_js_character_faceclaim == local_js_greyjoy_female_slot2) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_female_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_female_slot1;
        } else {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_female_slot4_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_female_slot4;
        }
      } else if (local_js_character_house == "stark" && local_js_character_gender == "male" && local_js_character_faceclaimpicker == "forward") {
        if (local_js_character_faceclaim == local_js_stark_male_slot1) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_male_slot2_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_male_slot2;
        } else if (local_js_character_faceclaim == local_js_stark_male_slot2) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_male_slot3_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_male_slot3;
        } else if (local_js_character_faceclaim == local_js_stark_male_slot3) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_male_slot4_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_male_slot4;
        } else {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_male_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_male_slot1;
        }
      } else if (local_js_character_house == "stark" && local_js_character_gender == "male" && local_js_character_faceclaimpicker == "backward") {
        if (local_js_character_faceclaim == local_js_stark_male_slot4) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_male_slot3_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_male_slot3;
        } else if (local_js_character_faceclaim == local_js_stark_male_slot3) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_male_slot2_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_male_slot2;
        } else if (local_js_character_faceclaim == local_js_stark_male_slot2) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_male_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_male_slot1;
        } else {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_male_slot4_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_male_slot4;
        }
      } else if (local_js_character_house == "stark" && local_js_character_gender == "female" && local_js_character_faceclaimpicker == "forward") {
        if (local_js_character_faceclaim == local_js_stark_female_slot1) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_female_slot2_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_female_slot2; 
        } else if (local_js_character_faceclaim == local_js_stark_female_slot2) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_female_slot3_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_female_slot3;
        } else if (local_js_character_faceclaim == local_js_stark_female_slot3) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_female_slot4_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_female_slot4;
        } else {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_female_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_female_slot1;
        }
      } else if (local_js_character_house == "stark" && local_js_character_gender == "female" && local_js_character_faceclaimpicker == "backward") {
        if (local_js_character_faceclaim == local_js_stark_female_slot4) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_female_slot3_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_female_slot3; 
        } else if (local_js_character_faceclaim == local_js_stark_female_slot3) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_female_slot2_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_female_slot2;
        } else if (local_js_character_faceclaim == local_js_stark_female_slot2) {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_female_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_female_slot1;
        } else {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_female_slot4_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_female_slot4;
        }
      }    
    } // END FUNCTION characterFaceclaimPicker

    function lust_CharacterGenderMaleFaceclaimReset() {
      if (local_js_character_house == "baratheon") {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_male_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_male_slot1; 
      } else if (local_js_character_house == "lannister") {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_male_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_male_slot1; 
      } else if (local_js_character_house == "greyjoy") {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_male_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_male_slot1; 
      } else if (local_js_character_house == "stark") {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_male_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_male_slot1; 
      }
    } // END FUNCTION lust_CharacterGenderMaleFaceclaimReset

    function lust_CharacterGenderFemaleFaceclaimReset() {
      if (local_js_character_house == "baratheon") {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_female_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_female_slot1; 
      } else if (local_js_character_house == "lannister") {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_female_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_female_slot1; 
      } else if (local_js_character_house == "greyjoy") {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_female_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_female_slot1; 
      } else if (local_js_character_house == "stark") {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_female_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_female_slot1; 
      }
    } // END FUNCTION lust_CharacterGenderFemaleFaceclaimReset

    function lust_CharacterHouseBaratheonFaceclaimReset() {
      if (local_js_character_gender == "male") {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_male_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_male_slot1; 
      } else if (local_js_character_gender == "female") {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_baratheon_female_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_baratheon_female_slot1; 
      }
    } // END FUNCTION lust_CharacterHouseBaratheonFaceclaimReset

    function lust_CharacterHouseLannisterFaceclaimReset() {
      if (local_js_character_gender == "male") {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_male_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_male_slot1; 
      } else if (local_js_character_gender == "female") {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_lannister_female_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_lannister_female_slot1; 
      }
    } // END FUNCTION lust_CharacterHouseBaratheonFaceclaimReset

    function lust_CharacterHouseGreyjoyFaceclaimReset() {
      if (local_js_character_gender == "male") {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_male_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_male_slot1; 
      } else if (local_js_character_gender == "female") {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_greyjoy_female_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_greyjoy_female_slot1; 
      }
    } // END FUNCTION lust_CharacterHouseGreyjoyFaceclaimReset    

    function lust_CharacterHouseStarkFaceclaimReset() {
      if (local_js_character_gender == "male") {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_male_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_male_slot1; 
      } else if (local_js_character_gender == "female") {
        document.getElementById("character_faceclaim").style.backgroundImage = local_js_stark_female_slot1_img;
        document.create_character.php_character_faceclaim.value = local_js_stark_female_slot1; 
      }
    } // END FUNCTION lust_CharacterHouseBaratheonFaceclaimReset

} // END FUNCTION Limbo_CharacterFaceclaimPicker



