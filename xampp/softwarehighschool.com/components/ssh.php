<div id="ssh">
<h1>### Secure Shell (SSH) ###</h1>
	
- Cryptographic network protocol for operating network services securely over an unsecured network.

<div>I. What do we use SSH for?</div>
- remote login to computer systems by users

<div>II. What programs to use?</div>
<p>1. On Windows</p>
<p>- Git Bash</p> 
<p>- Windows 10 cmd</p>
<p>- PuTTY</p>
<p>2. On Linux</p>
<p>- Bash</p>

<div>III. SSH Fundamentals</div>
1. Remote login
ssh user@host
-requires password

user = cpanel user
host = cpanel IP address
password = cpanel password
port (by default it is 22)

2. Secure Copy Protocol (SCP)
Syntax: scp user@host:SourcePath DestinationPath
Syntax: scp SourcePath user@host:DestinationPath

scp -r rmbb5z0ve003@160.153.129.25:/home/rmbb5z0ve003/public_html ~Desktop/test
scp -r ~Desktop/test rmbb5z0ve003@160.153.129.25:/home/rmbb5z0ve003/public_html

IV. Commands Reference
command: ls - lists directory contents of files and directories.
example: ls

command: pwd - writes the full pathname of the current working directory to the standard output
example: pwd

command: mkdir - creates a directory
example: mkdir test

command: touch - creates a file 
example: touch test.txt
</div>