<div id="computer_networking_fundamentals">

<h2>Tools</h2>

<p>Convert - Base2 To Base10</p>
<p>Enter Base2 Number: <input type="text" id="InputBase2ToBase10" placeholder="Example: 1101"></p>
<p><input type="checkbox" id="Base2ToBase10_Detailed"> Show detailed view</p>

<button onclick="calcBase2ToBase10()">Go</button>
<div id="Base2ToBase10_Result"></div>


<p>Convert - Base10 To Base2</p>
<p>Enter Base10 Number: <input type="text" id="Base10ToBase2_Input" placeholder="Example: 255"></p>
<p><input type="checkbox" id="Base10ToBase2_Detailed"> Show detailed view</p>

<button onclick="calcBase10ToBase2()">Go</button>
<div id="Base10ToBase2_Result"></div>


<p>Convert - Base16 To Base10</p>
<p>Enter Base16 Number: <input type="text" id="Base16ToBase10_Input" placeholder="Example: FF"></p>
<p><input type="checkbox" id="Base16ToBase10_Detailed"> Show detailed view</p>

<button onclick="calcBase16ToBase10()">Go</button>
<div id="Base16ToBase10_Result"></div>


<p>IPv4 Calculator</p>
<p>Address (Host or Network) Netmask (i.e. 24)</p>
<p><input type="text" id="IPv4ToBase2_Input" placeholder="192.168.0.1"> / <input type="text" id="MaskToBase2_Input" placeholder="24 or 255.255.255.0"></p>
<div>http://jodies.de/ipcalc</div>
<button onclick="IPv4_Calculator()">Go</button>
<div id="IPv4_Calculator_Table">
	<table style="font-family: monospace;">
	  <tr>
	    <td id="ipv4_table_td1">Address:</td>
	    <td id="ipv4_table_td2" style="color:blue">192.168.0.1</td>
	    <td id="ipv4_table_td3" style="color:grey">11000000.10101000.00000000. 00000001</td>
	  </tr>
	  <tr>
	    <td id="ipv4_table_td4">Netmask:</td>
	    <td id="ipv4_table_td5" style="color:blue">255.255.255.0 = 24</td>
	    <td id="ipv4_table_td6" style="color:red">11111111.11111111.11111111. 00000000</td>
	  </tr>
	  <tr>
	    <td>=></td>
	    <td></td>
	    <td></td>
	  </tr>
	  <tr>
	    <td>Network:</td>
	    <td id="ipv4_table_td11">x</td>
	    <td id="ipv4_table_td12">x</td>
	  </tr>
	  <tr>
	    <td>Broadcast:</td>
	    <td id="ipv4_table_td14">x</td>
	    <td id="ipv4_table_td15">x</td>
	  </tr>
	  <tr>
	    <td>HostMin:</td>
	    <td id="ipv4_table_td17">x</td>
	    <td id="ipv4_table_td18">x</td>
	  </tr>
	   <tr>
	    <td>HostMax:</td>
	    <td id="ipv4_table_td20">x</td>
	    <td id="ipv4_table_td21">x</td>
	  </tr>
	   <tr>
	    <td>Hosts/Net:</td>
	    <td id="ipv4_table_td23">x</td>
	    <td id="ipv4_table_td24">x</td>
	  </tr>
	</table>
</div>

<script>
function calcBase2ToBase10() {
	let n = document.getElementById("InputBase2ToBase10").value;
	let detailed = 0;
	if (document.getElementById("Base2ToBase10_Detailed").checked == true) {
		detailed = 1;
	}

  	document.getElementById("Base2ToBase10_Result").innerText = Base2ToBase10(n, detailed);
}

function calcBase10ToBase2() {
	let n = document.getElementById("Base10ToBase2_Input").value;
	let detailed = 0;
	if (document.getElementById("Base10ToBase2_Detailed").checked == true) {
		detailed = 1;
	}

  	document.getElementById("Base10ToBase2_Result").innerText = Base10ToBase2(n, detailed);
}

function calcBase16ToBase10() {
	let n = document.getElementById("Base16ToBase10_Input").value;
	let detailed = 0;
	if (document.getElementById("Base16ToBase10_Detailed").checked == true) {
		detailed = 1;
	}

  	document.getElementById("Base16ToBase10_Result").innerText = Base16ToBase10(n, detailed);
}

function IPv4_Calculator() {
	let IPv4 = document.getElementById("IPv4ToBase2_Input").value;
	let Mask = document.getElementById("MaskToBase2_Input").value;
	let MaskShortSyntax = ""; // i.e. 24
	let MaskLongSyntax = ""; // i.e. 255.255.255.0
	if (Mask.length <= 2) {
		MaskShortSyntax = Mask;
		MaskLongSyntax = MaskShortSyntaxToLongSyntax(Mask);
	} else {
		MaskShortSyntax = MaskLongSyntaxToShortSyntax(Mask);
		MaskLongSyntax = Mask;
	}

	// Logic
	let IPv4Base2 = IPv4ToBase2(IPv4);
	let MaskBase2 = MaskToBase2(MaskLongSyntax);
	let IPv4Base2Arr = IPv4Base2.split(".");
	let MaskBase2Arr = MaskBase2.split(".");
	console.log(MaskBase2Arr);

	let NetworkSeparatorLine = fNetworkSeparatorLine(MaskBase2Arr);

	let IPv4Base2StrView = fGetIPv4Base2(IPv4Base2Arr, NetworkSeparatorLine, "StrView");
	let MaskBase2StrView = fGetMaskBase2(MaskBase2Arr, NetworkSeparatorLine, "StrView");
	let NetworkBase2Arr = fGetNetworkBase2(IPv4Base2Arr, NetworkSeparatorLine, "Arr");
	let NetworkBase2StrView = fGetNetworkBase2(IPv4Base2Arr, NetworkSeparatorLine, "StrView");
	let BroadcastBase2Arr = fGetBroadcastBase2(IPv4Base2Arr, NetworkSeparatorLine, "Arr");
	let BroadcastBase2StrView = fGetBroadcastBase2(IPv4Base2Arr, NetworkSeparatorLine, "StrView");

	// View
	document.getElementById("ipv4_table_td2").innerText = IPv4;
	document.getElementById("ipv4_table_td3").innerText = IPv4Base2StrView;
	document.getElementById("ipv4_table_td5").innerText = MaskLongSyntax + " = " + MaskShortSyntax;
	document.getElementById("ipv4_table_td6").innerText = MaskBase2StrView;
	// =>
	document.getElementById("ipv4_table_td12").innerText = NetworkBase2StrView;

	document.getElementById("ipv4_table_td15").innerText = BroadcastBase2StrView;
}

function Base2ToBase10(arg, arg2) {
	// arg expects a String with a Base2 number;
	// arg2 expects a String with 0 or 1, where 1 will return a detailed view.
	let n = String(arg);
	let mode = String(arg2);
	let res = "";

	let resStr1 = "";
	let resStr2 = "";
	let resStr3 = "";
	let resNum = 0;

	let power = n.length - 1;
	for (let i = 0; i < n.length; i++) {
		let digitStr = n[i];
		let digitNum = Number(n[i]);
	
		// Build the strings, which will show the equation step by step.
		if (i < n.length - 1) {
			resStr1 += `${digitStr} * 2 ^ ${power} + `;
			resStr2 += `${digitStr * Math.pow(2, power)} + `;
		} else {
			resStr1 += `${digitStr} * 2 ^ ${power}`;
			resStr2 += `${digitStr * Math.pow(2, power)}`;
		}
		// Calculating 
		resNum += digitNum * Math.pow(2, power); 
		power--;
	}
	resStr3 = String(resNum);
	
	// mode 0 (Result) - returns a single-line string with just the result
	if (mode == '0') {
		res = String(resNum);
	// mode 1 (Detailed View) - returns a multi-line string with the full equation.
	} else if (mode == '1') {
		res = resStr1 + '\n';
		res += resStr2 + '\n';
		res += resStr3;
	}
	return res;
	
}

function Base10ToBase2(arg, arg2) {
	// Division of 0 is 0
	if (arg == '0') { return '0';}
  
	let n = Number(arg);
	let mode = String(arg2);
	let nStartLen = Number(String(n).length);

	let res = "";
	let temp = "";
	let resStr1 = "";
	let resStr2 = "";

	while(n > 0) {
	  if (n % 2 == 0) {
	    resStr1 += `${n} : 2 = ${n/2} | 0\n`;
	    temp += 0;
	    n -= n/2;
	  } else if (n % 2 == 1) {
	    resStr1 += `${n} : 2 = ${Math.floor(n/2)} | 1\n`;  
	    temp += 1;
	    n -= Math.ceil(n/2);
	  }
	}
	for (let i = temp.length - 1; i >= 0; i--) {
	  resStr2 += temp[i];
	}

	// mode 0 (Result) - returns a single-line string with just the result
	if (mode == '0') {
		res = resStr2;
	// mode 1 (Detailed View) - returns a multi-line string with the full equation.
	} else if (mode == '1') {
		res = resStr1 + '\n';
		res += resStr2;
	}

	console.log(resStr1);
	console.log(resStr2);

	return res;
}

function Base16ToBase10(arg, arg2) {
	// arg expects a String with a Base16 number;
	// arg2 expects a String with 0 or 1, where 1 will return a detailed view.
	let n = String(arg);
	let mode = String(arg2);
	let res = "";

	let resStr1 = "";
	let resStr2 = "";
	let resStr3 = "";
	let resNum = 0;

	let power = n.length - 1;
	for (let i = 0; i < n.length; i++) {
  	let digitStr = n[i];
	let digitNum = Number(n[i]);

	// Hexadecimal Table
	if (digitStr == "A") {
	digitNum = 10;
	} else if (digitStr == "B") {
	digitNum = 11;
	} else if (digitStr == "C") {
	digitNum = 12;
	} else if (digitStr == "D") {
	digitNum = 13;
	} else if (digitStr == "E") {
	digitNum = 14;
	} else if (digitStr == "F") {
	digitNum = 15;
	}
	
	// Build the strings, which will show the equation step by step.
	if (i < n.length - 1) {
		resStr1 += `${digitNum} * 16 ^ ${power} + `;
		resStr2 += `${digitNum * Math.pow(16, power)} + `;
	} else {
		resStr1 += `${digitNum} * 16 ^ ${power}`;
		resStr2 += `${digitNum * Math.pow(16, power)}`;
	}
	// Calculating 
	resNum += digitNum * Math.pow(16, power); 
	power--;
	}
	resStr3 = String(resNum);
	
	// mode 0 (Result) - returns a single-line string with just the result
	if (mode == '0') {
		res = String(resNum);
	// mode 1 (Detailed View) - returns a multi-line string with the full equation.
	} else if (mode == '1') {
		res = resStr1 + '\n';
		res += resStr2 + '\n';
		res += resStr3;
	}
	return res;

}

function IPv4ToBase2(IPv4) {
  let nStrArr = IPv4.split('.'); 
  let res = '';

  for (let i = 0; i < nStrArr.length; i++) {
    let nStr = nStrArr[i]; 
    let temp = Base10ToBase2(nStr, 0);
    // Format the number with D8 - C# formatting
    if (temp.length < 8) {
      temp = '0'.repeat(8-temp.length) + temp;
    }
    // Format the end of each IP octet with a dot
    if (i < nStrArr.length - 1) {
      temp += '.';
    }
    res += temp;
  }
  return res;
  
}

function MaskShortSyntaxToLongSyntax(MaskShortSyntax) {
	let Mask = "";
	if (MaskShortSyntax == "8") { Mask = "255.0.0.0"; }
	else if (MaskShortSyntax == "9") { Mask = "255.128.0.0"; }
	else if (MaskShortSyntax == "10") { Mask = "255.192.0.0"; }
	else if (MaskShortSyntax == "11") { Mask = "255.224.0.0"; }
	else if (MaskShortSyntax == "12") { Mask = "255.240.0.0"; }
	else if (MaskShortSyntax == "13") { Mask = "255.248.0.0"; }
	else if (MaskShortSyntax == "14") { Mask = "255.252.0.0"; }
	else if (MaskShortSyntax == "15") { Mask = "255.254.0.0"; }
	else if (MaskShortSyntax == "16") { Mask = "255.255.0.0"; }
	else if (MaskShortSyntax == "17") { Mask = "255.255.128.0"; }
	else if (MaskShortSyntax == "18") { Mask = "255.255.192.0"; }
	else if (MaskShortSyntax == "19") { Mask = "255.255.224.0"; }
	else if (MaskShortSyntax == "20") { Mask = "255.255.240.0"; }
	else if (MaskShortSyntax == "21") { Mask = "255.255.248.0"; }
	else if (MaskShortSyntax == "22") { Mask = "255.255.252.0"; }
	else if (MaskShortSyntax == "23") { Mask = "255.255.254.0"; }
	else if (MaskShortSyntax == "24") { Mask = "255.255.255.0"; }
	else if (MaskShortSyntax == "25") { Mask = "255.255.255.128"; }
	return Mask;
}

function MaskLongSyntaxToShortSyntax(MaskLongSyntax) {
	let Mask = "";
	if (MaskLongSyntax == "255.0.0.0") { Mask = "8"; }
	else if (MaskLongSyntax == "255.128.0.0") { Mask = "9"; }
	else if (MaskLongSyntax == "255.192.0.0") { Mask = "10"; }
	else if (MaskLongSyntax == "255.224.0.0") { Mask = "11"; }
	else if (MaskLongSyntax == "255.240.0.0") { Mask = "12"; }
	else if (MaskLongSyntax == "255.248.0.0") { Mask = "13"; }
	else if (MaskLongSyntax == "255.252.0.0") { Mask = "14"; }
	else if (MaskLongSyntax == "255.254.0.0") { Mask = "15"; }
	else if (MaskLongSyntax == "255.255.0.0") { Mask = "16"; }
	else if (MaskLongSyntax == "255.255.128.0") { Mask = "17"; }
	else if (MaskLongSyntax == "255.255.192.0") { Mask = "18"; }
	else if (MaskLongSyntax == "255.255.224.0") { Mask = "19"; }
	else if (MaskLongSyntax == "255.255.240.0") { Mask = "20"; }
	else if (MaskLongSyntax == "255.255.248.0") { Mask = "21"; }
	else if (MaskLongSyntax == "255.255.252.0") { Mask = "22"; }
	else if (MaskLongSyntax == "255.255.254.0") { Mask = "23"; }
	else if (MaskLongSyntax == "255.255.255.0") { Mask = "24"; }
	else if (MaskLongSyntax == "255.255.255.128") { Mask = "25"; }
	return Mask;	
}

function MaskToBase2(Mask) {
	let nStrArr = Mask.split('.'); 
	let res = '';

  for (let i = 0; i < nStrArr.length; i++) {
    let nStr = nStrArr[i]; 
    let temp = Base10ToBase2(nStr, 0);
    // Format the number with D8 - C# formatting
    if (temp.length < 8) {
      temp = '0'.repeat(8-temp.length) + temp;
    }
    // Format the end of each IP octet with a dot
    if (i < nStrArr.length - 1) {
      temp += '.';
    }
    res += temp;
  }
  return res;
  
}

function fNetworkSeparatorLine(MaskBase2Arr) {
  let res = 0;

  for(let i = 0; i < MaskBase2Arr.length; i++) {
    for (let i2 = 0; i2 < MaskBase2Arr[i].length; i2++) {
      if (MaskBase2Arr[i][i2] == "1") {
        res++;
      } else {
        break;
      }
    }
  }
  return res;

}

function fGetIPv4Base2(IPv4Base2Arr, NetworkSeparatorLine, mode) {
  let index = 0;
  let separatorPlaced = false;
  let res = "";
  let resArr = [];

  if (mode == "Arr") {
	for(let i = 0; i < IPv4Base2Arr.length; i++) {
		for (let i2 = 0; i2 < IPv4Base2Arr[i].length; i2++) {
			if (index < NetworkSeparatorLine) {
	    		res += IPv4Base2Arr[i][i2];
	  	} else {
	    	res += "0";
	  	}
	  		index++;
		}
		if (i < IPv4Base2Arr.length - 1) {
	 		res += ".";
		}
	}
	return resArr = res.split(".");

  } else if (mode == "StrView") {
	for(let i = 0; i < IPv4Base2Arr.length; i++) {
		for (let i2 = 0; i2 < IPv4Base2Arr[i].length; i2++) {
			if (index < NetworkSeparatorLine) {
	    		res += IPv4Base2Arr[i][i2];
	  	} else {
	  		if (separatorPlaced == false) { res += " "; separatorPlaced = true; }
	    	res += "0";
	  	}
	  		index++;
		}
		if (i < IPv4Base2Arr.length - 1) {
	 		res += ".";
		}
	}
	return res;

  }

}

function fGetMaskBase2(MaskBase2Arr, NetworkSeparatorLine, mode) {
  let index = 0;
  let separatorPlaced = false;
  let res = "";
  let resArr = [];

  if (mode == "Arr") {
	for(let i = 0; i < MaskBase2Arr.length; i++) {
		for (let i2 = 0; i2 < MaskBase2Arr[i].length; i2++) {
			if (index < NetworkSeparatorLine) {
	    		res += MaskBase2Arr[i][i2];
	  	} else {
	    	res += "0";
	  	}
	  		index++;
		}
		if (i < MaskBase2Arr.length - 1) {
	 		res += ".";
		}
	}
	return resArr = res.split(".");

  } else if (mode == "StrView") {
	for(let i = 0; i < MaskBase2Arr.length; i++) {
		for (let i2 = 0; i2 < MaskBase2Arr[i].length; i2++) {
			if (index < NetworkSeparatorLine) {
	    		res += MaskBase2Arr[i][i2];
	  	} else {
	  		if (separatorPlaced == false) { res += " "; separatorPlaced = true; }
	    	res += "0";
	  	}
	  		index++;
		}
		if (i < MaskBase2Arr.length - 1) {
	 		res += ".";
		}
	}
	return res;

  }

}

function fGetNetworkBase2(IPv4Base2Arr, NetworkSeparatorLine, mode) {
  let index = 0;
  let separatorPlaced = false;
  let res = "";
  let resArr = [];

  if (mode == "Arr") {
	for(let i = 0; i < IPv4Base2Arr.length; i++) {
		for (let i2 = 0; i2 < IPv4Base2Arr[i].length; i2++) {
			if (index < NetworkSeparatorLine) {
	    		res += IPv4Base2Arr[i][i2];
	  	} else {
	    	res += "0";
	  	}
	  		index++;
		}
		if (i < IPv4Base2Arr.length - 1) {
	 		res += ".";
		}
	}
	return resArr = res.split(".");

  } else if (mode == "StrView") {
	for(let i = 0; i < IPv4Base2Arr.length; i++) {
		for (let i2 = 0; i2 < IPv4Base2Arr[i].length; i2++) {
			if (index < NetworkSeparatorLine) {
	    		res += IPv4Base2Arr[i][i2];
	  	} else {
	  		if (separatorPlaced == false) { res += " "; separatorPlaced = true; }
	    	res += "0";
	  	}
	  		index++;
		}
		if (i < IPv4Base2Arr.length - 1) {
	 		res += ".";
		}
	}
	return res;

  }

}

function fGetBroadcastBase2(IPv4Base2Arr, NetworkSeparatorLine, mode) {
  let index = 0;
  let separatorPlaced = false;
  let res = "";
  let resArr = [];

  if (mode == "Arr") {
	for(let i = 0; i < IPv4Base2Arr.length; i++) {
		for (let i2 = 0; i2 < IPv4Base2Arr[i].length; i2++) {
			if (index < NetworkSeparatorLine) {
	    		res += IPv4Base2Arr[i][i2];
	  	} else {
	    	res += "1";
	  	}
	  		index++;
		}
		if (i < IPv4Base2Arr.length - 1) {
	 		res += ".";
		}
	}
	return resArr = res.split(".");

  } else if (mode == "StrView") {
	for(let i = 0; i < IPv4Base2Arr.length; i++) {
		for (let i2 = 0; i2 < IPv4Base2Arr[i].length; i2++) {
			if (index < NetworkSeparatorLine) {
	    		res += IPv4Base2Arr[i][i2];
	  	} else {
	  		if (separatorPlaced == false) { res += " "; separatorPlaced = true; }
	    	res += "1";
	  	}
	  		index++;
		}
		if (i < IPv4Base2Arr.length - 1) {
	 		res += ".";
		}
	}
	return res;

  }

}

</script>

</div>