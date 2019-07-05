function solve(){
   
   let map = {
      castle: "empty",
      dungeon: "empty",
      fortress: "empty",
      inferno: "empty",
      necropolis: "empty",
      rampart: "empty",
      stronghold: "empty",
      tower: "empty",
      conflux: "empty"
   }

   let btnRebuildAKingdom = document.querySelector("#kingdom > div > button");
   btnRebuildAKingdom.addEventListener("click", function(){
      // input
      let kingdomEl = document.querySelector("#kingdom > div > input[type=text]:nth-child(1)");
      let kingEl = document.querySelector("#kingdom > div > input[type=text]:nth-child(2)");
      let kingdomName = kingdomEl.value.toLowerCase();
      let kingName = kingEl.value;
      kingdomEl.value = "";
      kingEl.value = "";

      // validation
      if (kingName.length < 2) {
         console.log("king name length must be greater or equal than 2");
         return;
      }
      if (!map[kingdomName]) {
         console.log("kingdom name does not exist");
         return;
      }
      if (map[kingdomName] != "empty") {
         console.log("kingdom was already rebuild");
         return;
      }

      // rebuilding
      let currentKingdomEl = document.getElementById(kingdomName);
      currentKingdomEl.style.display = "inline-block";

         let h1El = document.createElement("h1");
         h1El.textContent = kingdomName.toUpperCase();
         let divEl = document.createElement("div");
         divEl.className = "castle";
         let h2El = document.createElement("h2");
         h2El.textContent = kingName.toUpperCase();

         let fieldsetEl = document.createElement("fieldset");
            let legendEl = document.createElement("legend");
            legendEl.textContent = "Army";
            let p1El = document.createElement("p");
            p1El.textContent = "TANKS - 0";
            let p2El = document.createElement("p");
            p2El.textContent = "FIGHTERS - 0";
            let p3El = document.createElement("p");
            p3El.textContent = "MAGES - 0";
            let divEl2 = document.createElement("div");
            divEl2.className = "armyOutput";
         fieldsetEl.appendChild(legendEl);
         fieldsetEl.appendChild(p1El);
         fieldsetEl.appendChild(p2El);
         fieldsetEl.appendChild(p3El);
         fieldsetEl.appendChild(divEl2);

      currentKingdomEl.appendChild(h1El);
      currentKingdomEl.appendChild(divEl);
      currentKingdomEl.appendChild(h2El);
      currentKingdomEl.appendChild(fieldsetEl);
      map[kingdomName] = "rebuilt";
   });

   let btnJoinAKingdom = document.querySelector("#characters > div:nth-child(4) > button");
   btnJoinAKingdom.addEventListener("click", function(){
      // input
      let joinCharacterEl = document.querySelector("#characters > div:nth-child(4) > input[type=text]:nth-child(1)");
      let joinKingdomEl = document.querySelector("#characters > div:nth-child(4) > input[type=text]:nth-child(2)");
      let characterTypeFigtherEl = document.querySelector("#characters > div:nth-child(1) > input[type=radio]");
      let characterTypeMageEl = document.querySelector("#characters > div:nth-child(2) > input[type=radio]");
      let characterTypeTankEl = document.querySelector("#characters > div:nth-child(3) > input[type=radio]");

      let characterName = joinCharacterEl.value;
      let kingdomName = joinKingdomEl.value.toLowerCase();
      joinCharacterEl.value = "";
      joinKingdomEl.value = "";
      
      let characterType = "";
      if (characterTypeFigtherEl.checked) { characterType = "fighter"; }
      else if (characterTypeMageEl.checked) { characterType = "mage"; }
      else if (characterTypeTankEl.checked) { characterType = "tank"; }
      // console.log(characterTypeFigtherEl.checked);
      // console.log(characterTypeMageEl.checked);
      // console.log(characterTypeTankEl.checked);
      // console.log(characterType);

      // validation
      if (characterType == "") {
         console.log("Character type must be selected");
         return;
      }
      if (characterName.length < 2) {
         console.log("character name length must be greater or equal than 2");
         return;
      }
      if (!map[kingdomName]) {
         console.log("kingdom name does not exist");
         return;
      }
      if (map[kingdomName] != "rebuilt") {
         console.log("kingdom name has not been rebuilt");
         return;
      }

      // join
      let currentKingdomEl = document.getElementById(kingdomName);
      let tanksEl = document.querySelector(`#${kingdomName} > fieldset > p:nth-child(2)`);
      let tanksN = Number(tanksEl.textContent.slice(8));
      let fightersEl = document.querySelector(`#${kingdomName} > fieldset > p:nth-child(3)`);
      let fightersN = Number(fightersEl.textContent.slice(11));
      let magesEl = document.querySelector(`#${kingdomName} > fieldset > p:nth-child(4)`);
      let magesN = Number(magesEl.textContent.slice(8));
      let armyEl = document.querySelector(`#${kingdomName} > fieldset > div`);
      
      if (characterType == "fighter") {
         console.log(fightersN);
         fightersN += 1; 
         fightersEl.textContent = "FIGHTERS - " + fightersN;
      } else if (characterType == "mage") {
         magesN += 1; 
         magesEl.textContent = "MAGES - " + magesN;
      }
      else if (characterType == "tank") {
         tanksN += 1; 
         tanksEl.textContent = "TANKS - " + tanksN;
      }
      armyEl.textContent += characterName + " ";

   });

   let btnAttack = document.querySelector("#actions > button");
   btnAttack.addEventListener("click", function(){
      // input
      let attackerEl = document.querySelector("#actions > input[type=text]:nth-child(2)");
      let defenderEl = document.querySelector("#actions > input[type=text]:nth-child(3)");
      let attacker = attackerEl.value.toLowerCase();
      let defender = defenderEl.value.toLowerCase();
      attackerEl.value = "";
      defenderEl.value = "";

      // validation
      if (map[attacker] != "rebuilt") {
         console.log(`kingdom ${attacker} has not been rebuilt`);
         return;
      }
      if (map[defender] != "rebuilt") {
         console.log(`kingdom ${defender} has not been rebuilt`);
         return;
      }

      // war
      let attackerPoints = 0;
      let defenderPoints = 0;

      let attackerKingValue = document.querySelector(`#${attacker}> h2`).innerHTML;
      let attackTanksEl = document.querySelector(`#${attacker} > fieldset > p:nth-child(2)`);
      let attackTanksN = Number(attackTanksEl.textContent.slice(8));
      let attackFightersEl = document.querySelector(`#${attacker} > fieldset > p:nth-child(3)`);
      let attackFightersN = Number(attackFightersEl.textContent.slice(11));
      let attackMagesEl = document.querySelector(`#${attacker} > fieldset > p:nth-child(4)`);
      let attackMagesN = Number(attackMagesEl.textContent.slice(8));

      let defenderKing = document.querySelector(`#${defender}> h2`);
      let defenderTanksEl = document.querySelector(`#${defender} > fieldset > p:nth-child(2)`);
      let defenderTanksN = Number(defenderTanksEl.textContent.slice(8));
      let defenderFightersEl = document.querySelector(`#${defender} > fieldset > p:nth-child(3)`);
      let defenderFightersN = Number(defenderFightersEl.textContent.slice(11));
      let defenderMagesEl = document.querySelector(`#${defender} > fieldset > p:nth-child(4)`);
      let defenderMagesN = Number(defenderMagesEl.textContent.slice(8));

      attackerPoints = (attackMagesN * 70 + attackFightersN * 50 + attackTanksN * 20);
      defenderPoints = (defenderMagesN * 30 + defenderFightersN * 50 + defenderTanksN * 80);

      // console.log(attacker + " = " + attackerPoints);
      // console.log(defender + " = " + defenderPoints);

      if (attackerPoints > defenderPoints) {
         // console.log(defenderKing);
         // console.log(attackerKingValue);
         defenderKing.textContent = attackerKingValue;
      }

   });

}

solve();

