<div id="computer_networking_fundamentals">

<h2>Computer Networking Fundamentals</h2>
<h3>Basic Concepts</h3>
<div>
	A computer network is a set of computers connected together for the sole purpose of sharing resources.
	<br>
	<br>
	Everything begins with an idea that became the basis for the internet. ARPANET - The Advanced Research Projects Agency NETwork. Established in 1969, it is the first packet switching network which will use TCP/IP. It was designed for scientific purposes and to share computer resources. It did not start as a military purpose network and it was not designed to survive a nuclear attack.
	<br>
	<br>
	Common Types of Computer Networks
	<ul>
		<li>Local Area Network (LAN)</li>
		<li>Wide Area Network (WAN)</li>
		<li>Wireless Local Area Network (WLAN)</li>
		<li>Storage Area Network (SAN)</li>
		<li>Home Area Network (HAN)</li>
	</ul>
	Common Types of Networking Devices
	<ul>
		<li>Hub (obsolete, not secure and very slow)</li>
		<li>Switch</li>
		<li>Router</li>
		<li>Modem</li>
		<li>Firewall</li>
		<li>Bridge (like a Switch, fewer ports)</li>
		<li>Repeater (like a Hub, it just amplifies the signal)</li>
	</ul>
	Types of Network Topologies
	<ul>
		<li>Bus</li>
		<li>Star</li>
		<li>Ring</li>
		<li>Mesh</li>
		<li>Tree</li>
		<li>Hybrid</li>
	</ul>
	Types of Network Cabels
	<ul>
		<li>"X"TP ("something" Twisted Pair). The "twist" idea was introduced by Alexander Bell in 1881</li>
		<li>Coaxial Cabel</li>
		<li>Fiber Optic</li>
		<li>Wireless</li>
	</ul>
	Types of Network Communications Protocols
	<ul>
		<p><b>L7 - Application Layer</b></p>
		<li>HTTP | Port 80 | Hypertext Transfer Protocol</li>
		<li>HTTPS | Port 443 | Hypertext Transfer Protocol</li>
		<li>FTP | Port 21 | File Transfer Protocol</li>
		<li>SFTP | Port 22 | Secure File Transfer Protocol</li>
		<li>SMTP | Port 25 | Simple Mail Transfer Protocol</li>
		<li>DNS - Domain Name System</li>
		<li>DHCP - Dynamic Host Configuration Protocol</li>
		<li>SSH - Secure Shell</li>
		<li>RDP - Remote Desktop Protocol</li>
		<li>Telenet - Teletype Network</li>
	</ul>
</div>
<h3>IP and MAC Addresses</h3>
<b>IP Address</b>
<p>The Internet Protocol address (IP address), also known as Logical Address, is a string of numbers assigned to each device connected to a computer network that uses the Internet Protocol for communication.</p>		
<div><img src="../../../../img/computer_networking_fundamentals/750px-Ipv4_address.svg.png"></div>
<br>
<b>MAC Address</b>
<p>A media access control address (MAC address), also known as Physical Address, is a unique identifier assigned to a network interface controller (NIC).</p>
<div><img src="../../../../img/computer_networking_fundamentals/MAC_address.png"></div>

<br>
<br>
<br>

<h3>III. Network Access, Security and VLANs</h3>
<h4>III.2 Accessing network devices</h4>
<h4>Out-of-band Management</h4>
<ul>
	<li>Dedicated channel for management only.</li>
	<li>Does not require IP adresses.</li>
	<li>Requires terminal emulator software (Putty, SecureCRT, etc.)</li>
	<li>More secure and reliable. Traffic is local and not routed.</li>
	<li>Typical protocol: Console</li>
	<div id="out_of_band_img"></div>
</ul>
<h4>In-band Management</h4>
<ul>
	<li>Management session on top of existing data connection.</li>
	<li>Requires both L3 connectivity and IP addresses.</li>
	<li>More convenient to use but not always secure and reliable. Traffic travels the same path as user traffic.</li>
	<li>Typical protocols: Telnet, SSH, SNMP, Web</li>
	<div id="in_band_img"></div>
</ul>
<h4>Accessing and Exiting Commands (Routers & Switches)</h4>
<table style="text-align: left;">
  <tr>
    <th style="width: 14%;">Command Mode</th>
    <th>Access Method</th>
    <th style="width: 14%;">Prompt</th>
    <th>Exit Method</th>
  </tr>
  <tr>
    <td>User EXEC</td>
    <td>Log in. <b>Hit Enter</b></td>
    <td>Router></td>
    <td>Use the <b>logout</b> command.</td>
  </tr>
  <tr>
    <td>Privileged EXEC</td>
    <td>
    	<p>From user EXEC mode:</p>
    	<p><b>enable</b></p>
    </td>
    <td>Router#</td>
    <td>To return to user EXEC mode, use the disable command.</td>
  </tr>
  <tr>
    <td>Global configuration</td>
    <td>
    	<p>From privileged EXEC mode:</p>
    	<p><b>configure terminal</b></p>
    	<p><b>conf t</b></p>
    </td>
    <td>Router(config)#</td>
    <td>To return to privileged EXEC mode from global configuration mode, use the <b>exit</b> or <b>end</b> command, or press <b>Ctrl-Z.</b></td>
  </tr>
  <tr>
    <td>Interface configuration</td>
    <td>From global configuration mode, specify an interface using an <b>interface</b> command.</td>
    <td>Router(config-if)#</td>
    <td>To return to global configuration mode, use the <b>exit</b> command. To return to privileged EXEC mode, use the <b>end</b> command, or press <b>Ctrl-Z.</b></td>
  </tr>
  <tr>
    <td>ROM monitor</td>
    <td>From privileged EXEC mode, use the <b>reload</b> EXEC command. Press the <b>Break</b> key during the first 60 seconds while the system is booting.</td>
    <td>></td>
    <td>To exit ROM monitor mode, use the <b>continue</b> command.</td>
  </tr>
</table>

<h4>III.3 Securing network device access</h4>
<ul>
	<li><b>Where to apply device access security?</b></li>
	<li>Physical security (often underestimated)</li>
	<li>Set passwords and privileges</li>
	<li>Implement ACLs</li>
</ul>
<h4>Passwords and Privileges</h4>
<ul>
	<b>There are 2 default privilege levels</b>
	<p>privilege 1 - this is <b>User EXEC</b> mode.</p>
	<p>privilege 15 - this is <b>Privilege EXEC</b> mode.</p>
	<br>
	<b>You can also define custom levels numbered from 2 to 14 and</b>
	<p>Associate each level with allowed commands use the <b>privilege</b> command</p>
	<p>Assign a password to level n with <b>enable secret level n {password}</b></p>
	<p>To check your current privilege level, use <b>show privilege</b></p>
	<p>To change your privilege level to n, use <b>enable n</b></p>
</ul>

<ul>
	<p>The password to protect the <b>privileged EXEC mode</b> can be set from <b>Global configuration mode</b> with either command:</p>
	<p><b>enable password {password}</b> - the command will set a password in plain text (Not secure)</p>
	<p><b>service password-encryption</b> - the command will encrypt the current password with "Type7" encryption. (Not secure)</p>
	<p><b>enable secret {password}</b> - the command will set a password and encrypt the current password with "Type5" encryption. (More secure)</p>
</ul>
<ul>
	<p>Two important interfaces to be protected:</p>
	<p><b>Line Console 0</b> – the console access (out-of-band)</p>
	<p><b>Line VTY 0 N*</b> – the Telnet and/or SSH access connections (in-band). *N depends on the OS, usually is 15 or 63</p>
</ul>

<h3>IV. Layer 2 Redundancy - Spanning Tree Protocol</h3>
<h4>IV.1. Spanning Tree Protocol (STP)</h4>

<ul>
	<p>In order to check:</p>
	<p>- Which switch is the Root?</p>
	<p>- Which ports are root?</p>
	<p>- Which ports are designated?</p>
	<p>- Which port is blocking (alternate)?</p>
	<br>
	<p>And use the following commands:</p>
	<p><b>show spanning-tree</b> or <b>sh span</b> - From <b>User EXEC mode</b> to check information</p>
	<p><b>spanning-tree vlan 1 priority {number}</b> - From <b>Privilege EXEC mode</b> to change priorities and select new root</p>
</ul>

<!-- END computer_networking_fundamentals -->
</div>

<div id="computer_networking_fundamentals_menu">
	<div id="computer_networking_fundamentals_menu_h">Table of Content</div>
</div>